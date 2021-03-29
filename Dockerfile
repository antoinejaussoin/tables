# This must be run with the Docker context set to the root folder of the repository
# (the one with the yarn.lock file)

FROM --platform=$BUILDPLATFORM node:15-alpine as Node
# FROM node:15-alpine as Node

ENV NODE_ENV=production

WORKDIR /home/node/app
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN chown -R node:node /home/node/app

USER node

RUN yarn --network-timeout 1000000 install

COPY --chown=node:node ./src ./src
COPY --chown=node:node ./public ./public
COPY --chown=node:node ./tsconfig.json ./tsconfig.json

RUN yarn build

FROM nginx:alpine

COPY --from=Node /home/node/app/build /usr/share/nginx/html
COPY ./docker/nginx.conf.template /etc/nginx/conf.d/default.conf.template
COPY ./docker/frontend-entrypoint.sh /

RUN ["chmod", "+x", "/frontend-entrypoint.sh"]
ENTRYPOINT ["/frontend-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
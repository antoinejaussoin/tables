import random from "lodash/random";

export function getRandomNumber(max: number): number {
  return random(0, max);
}

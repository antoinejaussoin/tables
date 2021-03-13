import { styled } from "solid-styled-components";

interface QuestionProps {
  first: () => number;
  second: () => number;
  result: () => number | null;
}

export default function Question({ first, second, result }: QuestionProps) {
  return (
    <Container>
      {first} x {second} = {result}
    </Container>
  );
}

const Container = styled("div")`
  font-weight: 100;
  font-size: 4em;
`;

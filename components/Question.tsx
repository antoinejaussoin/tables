import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import AnswerPicker from "./AnswerPicker";

type QuestionProps = {
  first: number;
  second: number;
  onReply: (success: boolean) => void;
};

export default function Question({ first, second, onReply }: QuestionProps) {
  const [current, setCurrent] = useState<number[]>([]);
  const [answer, setAnswer] = useState<number | null>(null);

  useEffect(() => {
    if (answer !== null) {
      onReply(first * second === answer);
    }
  }, [answer, first, second, onReply]);

  return (
    <Container>
      <Line>
        {first} x {second} ={" "}
        {current.map((n, i) => (
          <span key={i}>{n}</span>
        ))}
      </Line>
      <AnswerPicker onChange={setCurrent} onAnswer={setAnswer} />
    </Container>
  );
}

const Container = styled.div``;

const Line = styled.div`
  display: flex;
  font-size: 5rem;
`;

import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import NumberButton from "./NumberButton";

type AnswerPickerProps = {
  onAnswer: (number: number) => void;
  onChange: (digits: number[]) => void;
};

export default function AnswerPicker({
  onAnswer,
  onChange,
}: AnswerPickerProps) {
  const [digits, setDigits] = useState<number[]>([]);
  const handleSelection = (n: number) => {
    setDigits([...digits, n]);
  };
  const handleAnswer = () => {
    const answer = digits.reduce((prev, cur, i) => {
      return prev * 10 + cur;
    }, 0);
    onAnswer(answer);
    setDigits([]);
  };

  useEffect(() => {
    onChange(digits);
  }, [digits, onChange]);

  return (
    <Container>
      {new Array(10).fill(0).map((_, i) => (
        <NumberButton
          key={i}
          number={i}
          onClick={handleSelection}
          // selected={digits.includes(i)}
        />
      ))}
      <Button onClick={handleAnswer}>V</Button>
      <Button onClick={() => setDigits([])}>X</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

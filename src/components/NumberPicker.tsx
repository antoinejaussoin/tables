import { styled } from "solid-styled-components";

interface NumberPickerProps {
  onPick(result: number): void;
  onCheck(): void;
  onClear(): void;
}

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function NumberPicker({
  onCheck,
  onClear,
  onPick,
}: NumberPickerProps) {
  return (
    <Container>
      {digits.map((d) => (
        <Digit onClick={() => onPick(d)}>{d}</Digit>
      ))}
      <Clear onClick={() => onClear()}>X</Clear>
      <Check onClick={() => onCheck()}>V</Check>
    </Container>
  );
}

const Container = styled("div")`
  display: flex;
`;

const Digit = styled("div")`
  padding: 20px;
  border: 1px solid #03a9f4;
  background-color: #80d8ff;
  border-radius: 5px;
  margin: 5px;
  width: 40px;
  height: 40px;
  font-size: 3em;
  font-weight: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Clear = styled(Digit)`
  border: 1px solid #ff1744;
  background-color: #ff8a80;
`;
const Check = styled(Digit)`
  border: 1px solid #00e676;
  background-color: #b9f6ca;
`;

import styled from "@emotion/styled";
import { colors } from "@mui/material";

type NumberButtonProps = {
  number: number;
  selected?: boolean;
  onClick: (number: number) => void;
};

export default function NumberButton({
  number,
  selected,
  onClick,
}: NumberButtonProps) {
  return (
    <Button selected={selected || false} onClick={() => onClick(number)}>
      {number}
    </Button>
  );
}

const Button = styled.button<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  border: none;
  width: 50px;
  height: 50px;
  background-color: ${(props) =>
    props.selected ? colors.blue[900] : "inherit"};
  color: ${(props) => (props.selected ? "white" : "inherit")};
`;

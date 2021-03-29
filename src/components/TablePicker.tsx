import { Tables } from "../constants";
import styled from "styled-components";

interface TablePickerProps {
  current: number;
  onSelect: (table: number) => void;
}

export default function TablePicker({ current, onSelect }: TablePickerProps) {
  return (
    <Container>
      {Tables.map((table) => (
        <TableButton onClick={() => onSelect(table)}>{table}</TableButton>
      ))}
    </Container>
  );
}

const Container = styled.div``;

const TableButton = styled.button``;

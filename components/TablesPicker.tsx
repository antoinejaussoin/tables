import styled from "@emotion/styled";
import NumberButton from "./NumberButton";

type TablesPickerProps = {
  selected: number[];
  onSelect: (values: number[]) => void;
};

export default function TablesPicker({
  selected,
  onSelect,
}: TablesPickerProps) {
  const handleSelection = (n: number) => {
    if (selected.includes(n)) {
      onSelect(selected.filter((x) => x !== n));
    } else {
      onSelect([...selected, n]);
    }
  };
  return (
    <Container>
      {new Array(12).fill(0).map((_, i) => (
        <NumberButton
          key={i}
          number={i + 1}
          onClick={handleSelection}
          selected={selected.includes(i + 1)}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

interface NumberPickerProps {
  expected: number;
  onPick(result: number): void;
}

export default function NumberPicker({ expected, onPick }: NumberPickerProps) {}

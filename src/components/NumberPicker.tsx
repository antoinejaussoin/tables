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
    <div className="flex flex-wrap">
      {digits.map((d) => (
        <Digit number={d} onClick={() => onPick(d)} />
      ))}
      <Digit
        number="X"
        onClick={() => onClear()}
        color1="from-red-500"
        color2="to-red-700"
      />
      <Digit
        number="V"
        onClick={() => onCheck()}
        color1="from-green-500"
        color2="to-green-700"
      />
    </div>
  );
}

interface DigitProps {
  number: number | string;
  color1?: string;
  color2?: string;
  onClick: () => void;
}

function Digit({
  number,
  onClick,
  color1 = "from-blue-500",
  color2 = "to-blue-700",
}: DigitProps) {
  return (
    <div
      className={`bg-gradient-to-r ${color1} ${color2} cursor-pointer p-4 rounded-md w-12 h-12 m-1 flex items-center justify-center text-white text-3xl`}
      onClick={onClick}
    >
      {number}
    </div>
  );
}

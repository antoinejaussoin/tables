import { Tables } from "../constants";

interface TablePickerProps {
  current: number;
  onSelect: (table: number) => void;
}

export default function TablePicker({ current, onSelect }: TablePickerProps) {
  return (
    <div className="flex">
      {Tables.map((table) => (
        <div
          key={table}
          className="cursor-pointer p-4 rounded-md w-12 h-12 m-1 flex items-center justify-center text-black text-3xl border-gray-500 border-solid border-2"
          onClick={() => onSelect(table)}
        >
          {table}
        </div>
      ))}
    </div>
  );
}

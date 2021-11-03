interface QuestionProps {
  first: number;
  second: number;
  result: number | null;
  wrong: boolean;
}

export default function Question({
  first,
  second,
  result,
  wrong,
}: QuestionProps) {
  return (
    <div className="font-thin text-5xl my-4">
      {first} x {second} ={" "}
      <span className={wrong ? "text-red-700" : ""}>{result}</span>
    </div>
  );
}

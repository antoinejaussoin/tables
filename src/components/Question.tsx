interface QuestionProps {
  first: number;
  second: number;
  result: number | null;
}

export default function Question({ first, second, result }: QuestionProps) {
  return (
    <div className="font-thin text-5xl my-4">
      {first} x {second} = {result}
    </div>
  );
}

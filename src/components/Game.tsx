import { createSignal } from "solid-js";
import { getRandomNumber } from "../utils/random";
import NumberPicker from "./NumberPicker";
import Question from "./Question";

interface GameProps {
  table: () => number;
}

export default function Game({ table }: GameProps) {
  const [value2, setValue2] = createSignal(getRandomNumber(12));
  const [result, setResult] = createSignal<number | null>(null);

  function handleCheck() {
    if (table() * value2() === result()) {
      console.log("You are right!");
      const utterance = new SpeechSynthesisUtterance(
        "You are right Apolline, " +
          table() +
          " times " +
          value2() +
          " equals " +
          result()
      );
      speechSynthesis.speak(utterance);
      setValue2(getRandomNumber(12));
      setResult(null);
    } else {
      console.log("Try again!");
    }
  }

  return (
    <div>
      <Question first={table} second={value2} result={result} />
      <NumberPicker
        onPick={(n) => {
          console.log("n: ", n, +(result() + n.toString()));
          setResult(+((result() || "") + n.toString()));
        }}
        onClear={() => setResult(null)}
        onCheck={handleCheck}
      />
    </div>
  );
}

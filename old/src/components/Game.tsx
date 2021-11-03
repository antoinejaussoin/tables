import { useState } from "react";
import { getRandomNumber } from "../utils/random";
import NumberPicker from "./NumberPicker";
import Question from "./Question";

interface GameProps {
  table: number;
}

let francais: SpeechSynthesisVoice | null = null;

// speechSynthesis.addEventListener("voiceschanged", () => {

// });

export default function Game({ table }: GameProps) {
  const [value2, setValue2] = useState<number>(getRandomNumber(12));
  const [result, setResult] = useState<number | null>(null);
  const [wrong, setWrong] = useState(false);

  const voices = speechSynthesis.getVoices();
  voices.forEach((voice) => console.log(voice.name, voice.lang));
  francais = voices.find((v) => v.lang === "fr-CA")!;

  function handleCheck() {
    if (table * value2 === result) {
      const utterance = new SpeechSynthesisUtterance(
        "Tu as raison Apolline ! " +
          table +
          " fois " +
          value2 +
          " égale " +
          result
      );
      utterance.voice = francais;
      speechSynthesis.speak(utterance);
      setValue2(getRandomNumber(12));
      setResult(null);
    } else {
      const utterance = new SpeechSynthesisUtterance(
        "Ce n'est pas ça! Recommence"
      );
      utterance.voice = francais;
      speechSynthesis.speak(utterance);
      setWrong(true);
    }
  }

  return (
    <div>
      <Question first={table} second={value2} result={result} wrong={wrong} />
      <NumberPicker
        onPick={(n) => {
          setResult(+((result || "") + n.toString()));
          setWrong(false);
        }}
        onClear={() => setResult(null)}
        onCheck={handleCheck}
      />
    </div>
  );
}

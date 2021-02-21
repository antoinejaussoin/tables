import { useCallback, useState } from "react";

function App() {
  // speechSynhesis.
  const [voice, setVoice] = useState<SpeechSynthesisVoice | undefined>(
    speechSynthesis.getVoices().find((v) => v.lang === "en-GB")
  );
  const handleSpeech = useCallback(() => {
    let utterance = new SpeechSynthesisUtterance("Hello world!");
    if (voice) {
      utterance.voice = voice;
    }
    // speechSynthesis.
    speechSynthesis.speak(utterance);
  }, [voice]);
  return (
    <div>
      <button onClick={handleSpeech}>Click</button>
      <ul>
        {speechSynthesis.getVoices().map((voice) => (
          <li key={voice.name}>
            {voice.name} {voice.lang}{" "}
            <button onClick={() => setVoice(voice)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

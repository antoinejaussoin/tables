import TablePicker from "./components/TablePicker";
import { createSignal } from "solid-js";
import Question from "./components/Question";

function App() {
  const [table, setTable] = createSignal(2);
  return (
    <div>
      <TablePicker current={table()} onSelect={setTable} />
      <Question first={10} second={11} result={110} />
    </div>
  );
}

export default App;

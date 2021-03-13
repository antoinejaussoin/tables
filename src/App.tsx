import TablePicker from "./components/TablePicker";
import { createSignal } from "solid-js";
import Question from "./components/Question";
import Game from "./components/Game";

function App() {
  const [table, setTable] = createSignal(2);
  return (
    <div>
      <TablePicker current={table()} onSelect={setTable} />
      <Game table={table} />
    </div>
  );
}

export default App;

import TablePicker from "./components/TablePicker";
import Game from "./components/Game";
import { useState } from "react";

function App() {
  const [table, setTable] = useState(2);
  return (
    <div>
      <TablePicker current={table} onSelect={setTable} />
      <Game table={table} />
    </div>
  );
}

export default App;

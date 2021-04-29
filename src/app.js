import React from "react";
import "./app.css";
import { useStore } from "./store";

function App() {
  const store = useStore();
  const onTextChange = (e) => {
    store.setNotes(e.target.value);
  };
  return (
    <div className="app">
      <textarea
        value={store.notes}
        onChange={onTextChange}
        data-testid="notes-text-area"
      ></textarea>
    </div>
  );
}
export default App;

import logo from "./logo.svg";
import React from "react";
import { AppUI } from "./AppUI";
import { ToDoProvider } from "./components/TodoContext";

function App() {

  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;

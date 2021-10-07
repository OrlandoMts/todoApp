import logo from "./logo.svg";
import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateToDoButton } from "./components/CreateToDoButton";
// import './App.css';

const defaulttodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el cursso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "LALALALAA", completed: false },
];

function App() {

  const [toDos, setToDos] = React.useState(defaulttodos)
  const [searchToDo, setSearchToDo] = React.useState('');
  
  // Cuantos todos han sido completados
  const completedToDos = toDos.filter(todo => !!todo.completed).length;
  // Todos totales en el arreglo
  const totalToDos = toDos.length;

  // Filtra los todos basados en el valor del input
  let searchedTodos = [];

  if (!searchToDo.length >= 1){
    searchedTodos = toDos;
  } else {
    searchedTodos = toDos.filter( todo => {
      // comparativa de textos en minusculas
      const todoText = todo.text.toLowerCase();
      const searchText = searchToDo.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  // Completar y eliminar toDo
  const completeToDo = (text) => {
    //Obtenido el index del texto, marco como completado
    const toDoIndex = toDos.findIndex(todo => todo.text === text);
    // Hago un re render creando una copia de mi arreglo toDos y actualizo el estado usando 'set..'
    const newToDos = [...toDos];
    newToDos[toDoIndex].completed = true;
    setToDos(newToDos);
  }

  const deleteToDo = (text) => {
    //Obtenido el index del texto, marco como completado
    const toDoIndex = toDos.findIndex(todo => todo.text === text);
    // Hago un re render creando una copia de mi arreglo toDos y actualizo el estado usando 'set..'
    const newToDos = [...toDos];
    newToDos.splice(toDoIndex,1);
    setToDos(newToDos);
  }
  
  return (
    <React.Fragment>
      <TodoCounter 
        total = {totalToDos}
        completed = {completedToDos}
      />

      <TodoSearch 
        searchToDo = { searchToDo }
        setSearchToDo = { setSearchToDo }
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeToDo(todo.text)}
            onDelete={() => deleteToDo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;


// modificar los css TodoItem y toDoButton

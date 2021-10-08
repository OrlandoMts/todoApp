import React from 'react'
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateToDoButton } from "./components/CreateToDoButton";

function AppUI({
      totalToDos,
      completedToDos,
      searchToDo,
      setSearchToDo,
      searchedTodos,
      completeToDo,
      deleteToDo,
    }) {
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

export { AppUI }

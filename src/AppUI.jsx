import React from 'react'
import { TodoContext } from './components/TodoContext';
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateToDoButton } from "./components/CreateToDoButton";
import { Modal } from './components/Modal';
import { ToDoForm } from './components/ToDoForm';
import './styles/AppUI.css'

function AppUI() {
    const {error, loading, searchedTodos, completeToDo, deleteToDo, openModal,} = React.useContext(TodoContext);
    return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
          {error && <p className="message">Ocurrio un error</p>}
          {loading && <p className="message">Estamos preparando todo</p>}
          {(!loading && !searchedTodos.length) && <p className="message">Da click al boton azul para crear tu primer tarea</p>}
          
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

      {!!openModal && (
        <Modal>
          <ToDoForm />
        </Modal>
      )}

      <CreateToDoButton 
      />
    </React.Fragment>

    );
}

export { AppUI }

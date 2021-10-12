import React from 'react';
import { TodoContext } from './TodoContext';
import '../styles/TodoCounter.css'

function TodoCounter() {
    const { totalToDos, completedToDos } = React.useContext(TodoContext)
    return (
        <h2 className="title--status">Has completado {completedToDos} de {totalToDos} todoS</h2>
    )
}

export { TodoCounter };

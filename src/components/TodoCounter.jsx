import React from 'react';
import '../styles/TodoCounter.css'

function TodoCounter({ total, completed }) {
    return (
        <h2 className="title--status">Has completado {completed} de {total} todoS</h2>
    )
}

export { TodoCounter };

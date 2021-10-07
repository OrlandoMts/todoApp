import React from 'react'
import '../styles/TodoSearch.css'

function TodoSearch({ searchToDo, setSearchToDo }) {

    const onSearchValue = (e) => {
        console.log(e.target.value);
        setSearchToDo(e.target.value);
    }

    return (
        <input 
            className="input--search" 
            placeholder="Busca alguna tarea" 
            value={searchToDo}
            onChange={onSearchValue}
        />
    )
}

export { TodoSearch }

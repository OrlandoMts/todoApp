import React from 'react'
import '../styles/TodoSearch.css'

function TodoSearch() {
    const onSearchValue = (e) => {
        console.log(e.target.value)
    }

    return (
        <input 
            className="input--search" 
            placeholder="Busca alguna tarea" 
            onChange={onSearchValue}
        />
    )
}

export { TodoSearch }

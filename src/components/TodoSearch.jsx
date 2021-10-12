import React from 'react'
import '../styles/TodoSearch.css'
import { TodoContext } from './TodoContext';

function TodoSearch() {

    const { searchToDo, setSearchToDo } = React.useContext(TodoContext);

    const onSearchValue = (e) => {
        // console.log(e.target.value);
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

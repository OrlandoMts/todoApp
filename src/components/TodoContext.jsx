import React from 'react';
import { useLocalStorage } from '../customHooks/useLocalStorage';

const TodoContext = React.createContext();

function ToDoProvider(props) {
    
    const {item: toDos, saveItem: saveToDos, loading: loading} = useLocalStorage('TODOS_V1', []);
  
    const [searchToDo, setSearchToDo] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

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
        saveToDos(newToDos);
    }

    const deleteToDo = (text) => {
        //Obtenido el index del texto, marco como completado
        const toDoIndex = toDos.findIndex(todo => todo.text === text);
        // Hago un re render creando una copia de mi arreglo toDos y actualizo el estado usando 'set..'
        const newToDos = [...toDos];
        newToDos.splice(toDoIndex,1);
        saveToDos(newToDos);
    }

    const addToDo = (text) => {
        const newToDos = [...toDos];
        newToDos.push({
            completed: false,
            text: text,
        })
        saveToDos(newToDos);
    }
  
    return(
        <TodoContext.Provider value={{
            totalToDos,
            completedToDos,
            searchToDo,
            setSearchToDo,
            searchedTodos,
            completeToDo,
            deleteToDo,
            addToDo,
            loading,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, ToDoProvider }
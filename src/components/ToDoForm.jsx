import React from 'react'
import { TodoContext } from './TodoContext';
import '../styles/ToDoForm.css'

function ToDoForm() {
    const [ newToDoValue, setNewToDoValue ] = React.useState('');
    const { addToDo, setOpenModal } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (e) => {
        setNewToDoValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(newToDoValue.length <= 0)return;
        addToDo(newToDoValue);
        setOpenModal(false);
    }

    return (
        <form action="" onSubmit={onSubmit}>
            <label htmlFor="">Escribe tu nueva tarea</label>
            <textarea 
            value={newToDoValue}
            onChange={onChange}
            name="" id="" cols="30" rows="10" 
            placeholder="Salir a caminar con Oliver"></textarea>
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button" 
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button-cancel" >
                    Cancelar
                </button>
                <button 
                    type="submit" 
                    onClick={onSubmit}
                    className="TodoForm-button TodoForm-button-add" >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { ToDoForm }

import React from 'react';
import '../styles/CreateToDoButton.css'
import { TodoContext } from './TodoContext';

function CreateToDoButton(props) {

    const { openModal, setOpenModal} = React.useContext(TodoContext);

    const onClickModal = () => {
        setOpenModal(!openModal);
    }

    return (
        <button 
            className={`button-ca ${openModal===false && 'button-ca'}`}
            onClick={onClickModal}
        >
            +
        </button>
    )
}

export { CreateToDoButton }

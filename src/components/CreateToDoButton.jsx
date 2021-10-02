import React from 'react';
import '../styles/CreateToDoButton.css'

function CreateToDoButton(props) {

    const onClickConsole = () => {
        console.log('funcion externa')
    }

    return (
        <button 
            className="button-ca"
            onClick={onClickConsole}
        >
            +
        </button>
    )
}

export { CreateToDoButton }

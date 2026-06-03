import React, { useContext, useEffect } from "react"
import '../../CSS/NewBook.css'
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";
import { useTodos } from "../../routes/useTodos";


function NewBook (props){
    
    const navigate= useNavigate()

  const [valueNote, setValueNote] = React.useState(props.lastTextNote || '');



    const onCancel = () => {
        // setIsNewBook(false)
        navigate('/')
        props.setSameNote(false)
    }
    
    const onCreateNote = (text) => {
        const save =  props.submitEvent(text)
        
        if(save){
            navigate('/')
        }
    }


    return ReactDOM.createPortal(
        <div className="ModalBackground">
            <div className="ModalContainer">
                <h2 className="ModalTitle"> {props.noteTitle} </h2>

                {/* Formulario de añadir nueva nota */}
                <form 
                className="ModalForm"
                onSubmit={(e)=> e.preventDefault()}
                >
                <p className={`errorAddNote ${props.sameNote ? 'showErrorAddNote' : ''}`}>Nota ya está existente</p>
                <label>Note</label>
                <input 
                    type="text" 
                    placeholder="Enter note..." 
                    className="ModalInput"
                    value={valueNote}
                    onChange={(e)=>{
                        setValueNote(e.target.value)
                        props.setSameNote(false)
                    }}
                />


                <div className="ModalButtons">
                    <button 
                    onClick={onCancel}
                    type="button" 
                    className="Button--cancel">Cancel</button>
                    <button
                    onClick={() => onCreateNote(valueNote)}
                    type="button"
                    className="Button--create"
                    > {props.submitText} </button>
            </div>
                </form>
            </div>
            </div>,
    document.getElementById('newBookPortal')
    )
}

export {NewBook}
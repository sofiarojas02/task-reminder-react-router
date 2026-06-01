import React, { useContext, useEffect } from "react"
import '../../CSS/NewBook.css'
import ReactDOM from 'react-dom';


function NewBook ({
        addNewNote,
        setIsNewBook,
        sameNote,
        setSameNote,
    }){

  const [valueNote, setValueNote] = React.useState('');

  const modalNoteRef = React.useRef(null)

    useEffect(()=>{
    const modalNoteOutside = (e) => {
        if(modalNoteRef.current && !modalNoteRef.current.contains(e.target)){
            setIsNewBook(false)
        }
    }

    document.addEventListener('mousedown', modalNoteOutside);
    return () => document.removeEventListener('mousedown', modalNoteOutside)

},[])


    const onCancel = () => {
        setIsNewBook(false)
        setSameNote(false)
    }

    const onCreateNote = (text) => {
        addNewNote(text)
    }


    return ReactDOM.createPortal(
        <div className="ModalBackground">
            <div className="ModalContainer"
            ref={modalNoteRef}>
                <h2 className="ModalTitle">Create new note</h2>

                {/* Formulario de añadir nueva nota */}
                <form 
                className="ModalForm"
                onSubmit={(e)=> e.preventDefault()}
                >
                <p className={`errorAddNote ${sameNote ? 'showErrorAddNote' : ''}`}>Nota ya está existente</p>
                <label>Note</label>
                <input 
                    type="text" 
                    placeholder="Enter note..." 
                    className="ModalInput"
                    value={valueNote}
                    onChange={(e)=>{
                        setValueNote(e.target.value)
                        setSameNote(false)
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
                    >Create</button>
            </div>
                </form>
            </div>
            </div>,
    document.getElementById('newBookPortal')
    )
}

export {NewBook}
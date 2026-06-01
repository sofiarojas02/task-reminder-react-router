import React, { useContext } from "react"
import '../../CSS/Notes.css'

function NewNote ({
        notes,
        deleteNote,
    }){
    



    return(
        <div className="note__container">
            {notes.map((note)=>(
                <li 
                key={note.text}
                className="note__item">
                    <p className="note__text">{note.text}</p>
                    <span 
                        className="NoteDeleteIcon"
                        onClick={() => deleteNote(note.text)}
                    >
                    ×
                    </span>
                </li>
            ))}
        </div>
    )
}

export {NewNote}
import React, { useContext } from "react"
import {ReactComponent as EditSVG} from '../IconsSVG/edit.svg'
import '../../CSS/Notes.css'
import { useNavigate } from "react-router-dom"

function NewNote ({
        notes,
        deleteNote,
    }){
    
    const navigate = useNavigate()



    return(
        <div className="note__container">
            {notes.map((note)=>(
                <li 
                key={note.id}
                className="note__item">
                    <p className="note__text">{note.text}</p>
                    <span 
                        className="NoteDeleteIcon"
                        onClick={() => deleteNote(note.text)}
                    >
                    ×
                    </span>
                    <span className="icon__container--edit"
                    onClick={() => navigate('/edit/' + note.id)}
                    >
                        <EditSVG />
                    </span>
                </li>
            ))}
        </div>
    )
}

export {NewNote}
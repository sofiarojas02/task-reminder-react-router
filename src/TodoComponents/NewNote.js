import { useContext } from "react"
import { TodoContext } from "../TodoContext/TodoContext"
import '../CSS/Notes.css'

function NewNote (){
    const {valueNote, deleteNote} = useContext(TodoContext)

    return(
        <div className="NoteContainer">
            <p className="NoteText">{valueNote}</p>
            <span 
                className="NoteDeleteIcon"
                onClick={deleteNote}
            >
            ×
            </span>
        </div>
    )
}

export {NewNote}
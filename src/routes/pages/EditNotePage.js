
import React from "react"
import { NewBook } from "../../ui/BookPortal/NewBook"
import { useTodos } from "../useTodos"
import { useLocation, useParams } from "react-router-dom"

function EditNotePage (){
    const {editNote,
            getNote,
            sameNote,
            setSameNote,
            loading,
    } = useTodos()
    const params = useParams()
    const id = Number(params.id)

    const location = useLocation()

    let  noteText;

    if(location.state?.note){
        noteText = location.state.note.text
    }else if(loading){
        return <p>Cargando...</p>
    }else{
        const note = getNote(id)
        noteText = note.text
    }
    

    return(
        <NewBook 
        noteTitle='Edit note'
        submitText='Edit'
        lastTextNote = {noteText}
        submitEvent={(newText) => editNote(id, newText)}
        sameNote = {sameNote}
        setSameNote = {setSameNote}
        />
    )

}

export {EditNotePage}


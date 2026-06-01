
import React from "react"
import { NewBook } from "../../ui/BookPortal/NewBook"
import { useTodos } from "../useTodos"
import { useParams } from "react-router-dom"

function EditNotePage (){
    const {editNote,
            sameNote,
            setSameNote,
    } = useTodos()
    const params = useParams()
    const idURL = Number(params.id)

    return(
        <NewBook 
        noteTitle='Edit note'
        submitText='Edit'
        submitEvent={(noteText) => editNote(idURL, noteText)}
        sameNote = {sameNote}
        setSameNote = {setSameNote}
        />
    )
}

export {EditNotePage}


import { NewBook } from '../../ui/BookPortal/NewBook';
import { NewNote } from '../../ui/TodoComponents/NewNote';
import React from "react"
import { useTodos } from '../useTodos';

function NewNotePage (){
    const {addNewNote, sameNote, setSameNote} = useTodos()

    return(
        <NewBook 
        noteTitle='Create a new note'
        submitText='Create'
        submitEvent={(text) => addNewNote(text)}
        sameNote = {sameNote}
        setSameNote = {setSameNote}
        
        
        />
    )
}

export {NewNotePage}
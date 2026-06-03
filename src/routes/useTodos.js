import React from "react";
import { useLocalStorage } from "./useLocalStorage";


function useTodos(){

  const formatString = (text) => (
    text = text.toLocaleLowerCase().trim()
  )

const capitalize = (text) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

  const {
    item: todos, 
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V2', [])

  const {
    item: notes,
    saveItem: saveNotes,
    loadingNote,
    errorNote,
  } = useLocalStorage('NOTES_V2', [])

  const [searhcValue, setSearhcValue] = React.useState('');
  const [isNewBook, setIsNewBook] = React.useState(false); //Modal para añadir nota
  const [createNote, setCreateNote] = React.useState(false); //Estado para añadir nota
  const [sameTodo, setSameTodo] = React.useState(false); // Estado para ver si se esta intentando añadir todo repetido
  const [sameNote, setSameNote] = React.useState(false); // Estado para ver si se esta intentando añadir note repetido

  
  const filteredTodos = todos.filter(todo => (
    todo.text.toLocaleLowerCase().includes(searhcValue.toLocaleLowerCase())
  ))

  const totalTodos = todos.length
  const completedTodos = todos.filter(todo => todo.completed).length

    const addTodo = (text) => {
      const todoId = newTodoId()
    let comparedTodos = []
    if(text !== ''){
      const newTodos = [...todos]
      comparedTodos = newTodos.filter((todo) => formatString(todo.text) === formatString(text))
      if(comparedTodos.length === 0){
        newTodos.push({
          text: capitalize(text),
          completed: false,
          id: todoId,
        })
        saveTodos(newTodos)
      }else{
        setSameTodo(true)
      }
    }
  }

  const completeTodo = (idComplete)=>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo)=>
      todo.id === idComplete)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }

  const deleteTodo = (idDelete)=>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo)=>
      todo.id === idDelete
    )
    // const news = newTodos.filter(todo => todo.text !== textDelete)
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }




  const addNewNote = (text) => {
    const idNote = newNoteId(notes)
    let compareNotes = []
    if(text !== ''){
    const newNotes = [...notes]
    compareNotes = newNotes.filter((note) => formatString(note.text) === formatString(text))
    if(compareNotes.length === 0){
      newNotes.push({
        text: capitalize(text),
        id: idNote,
      })
      saveNotes(newNotes)
      return true
      }else{
      setSameNote(true)
      return false
    }}
    return false
  }

  const getNote = (id) => {
    const noteIndex = notes.findIndex(note => note.id === id)
    return notes[noteIndex]
  }

    const editNote = (id, newText) => {
    let compareNotes = []
    if(newText !== ''){
    const newNotes = [...notes]
    const noteIndex = newNotes.findIndex((note)=> note.id === id)
    compareNotes = newNotes.filter((note) => formatString(note.text) === formatString(newText))
    if(compareNotes.length === 0){
      newNotes[noteIndex].text = newText
      saveNotes(newNotes)
      return true
      }else{
      setSameNote(true)
      return false
    }}
    return false
  }


  const deleteNote = (idDelete) =>{
    const newNotes = [...notes]
    const noteIndex = newNotes.findIndex((note) => note.id === idDelete)
    newNotes.splice(noteIndex, 1)
    saveNotes(newNotes)
  }

  


    return(
      {
        loading,
        error,
        totalTodos, 
        completedTodos, 
        searhcValue , 
        setSearhcValue, filteredTodos, 
        completeTodo, 
        deleteTodo,
        isNewBook,
        setIsNewBook,
        createNote,
        setCreateNote,
        deleteNote,
        notes,
        saveNotes,
        loadingNote,
        errorNote,
        addTodo,
        addNewNote,
        sameTodo,
        setSameTodo,
        sameNote,
        setSameNote,
        todos,
        sincronizeTodos,
        editNote,
        getNote,
    }
    )


}


function newTodoId(){
  return crypto.randomUUID();
}


function newNoteId(noteList){
  if(noteList.length === 0) return 1;
  else{
    const idList = noteList.map(note => note.id)
    const idMax = Math.max(idList)
    return idMax + 1
  }
}


export {useTodos}
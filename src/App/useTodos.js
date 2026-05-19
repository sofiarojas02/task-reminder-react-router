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
  } = useLocalStorage('TODOS_V1', [])

  const {
    item: notes,
    saveItem: saveNotes,
    loadingNote,
    errorNote,
  } = useLocalStorage('NOTES_V1', [])

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


  const completeTodo = (textComplete)=>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo)=>
      todo.text === textComplete)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }

  const deleteTodo = (textDelete)=>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo)=>
      todo.text === textDelete
    )
    // const news = newTodos.filter(todo => todo.text !== textDelete)
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  const addTodo = (text) => {
    let comparedTodos = []
    if(text !== ''){
      const newTodos = [...todos]
      comparedTodos = newTodos.filter((todo) => formatString(todo.text) === formatString(text))
      if(comparedTodos.length === 0){
        newTodos.push({
          text: capitalize(text),
          completed: false,
        })
        saveTodos(newTodos)
      }else{
        setSameTodo(true)
      }
    }
  }


  const addNewNote = (text) => {
    let compareNotes = []
    if(text !== ''){
    const newNotes = [...notes]
    compareNotes = newNotes.filter((note) => formatString(note.text) === formatString(text))
    if(compareNotes.length === 0){
      newNotes.push({
        text: capitalize(text)
      })
      setIsNewBook(false)
      saveNotes(newNotes)
      }else{
      setSameNote(true)
    }}
  }

  const deleteNote = (deleteText) =>{
    const newNotes = [...notes]
    const noteIndex = newNotes.findIndex((note) => note.text === deleteText)
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
        sincronizeTodos
    }
    )


}


export {useTodos}
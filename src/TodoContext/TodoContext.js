import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider({children}){

  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [])
  const [searhcValue, setSearhcValue] = React.useState('');
  const [isNewBook, setIsNewBook] = React.useState(false); //Modal para añadir nota
  const [createNote, setCreateNote] = React.useState(false); //Estado para añadir nota
  const [valueNote, setValueNote] = React.useState('');


  
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

  const createNewNote = () => {
    setIsNewBook(false)
    setCreateNote(true)
  }

  const deleteNote = () =>{
    setValueNote('')
  }


    return(

        <TodoContext.Provider value={{
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
        createNewNote,
        valueNote,
        setValueNote,
        deleteNote,
    }}>
            {children}
        </TodoContext.Provider>
    )


}


export {TodoContext, TodoProvider}
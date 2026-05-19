import { useContext } from "react"


function CreateTodoButton({newTaskText, setNewTaskValue, addTodo}){


  return(
    <button
    onClick={()=> {
      addTodo(newTaskText)
      setNewTaskValue('')
    }}
    
    >Crear</button>
  )
}

export {CreateTodoButton}
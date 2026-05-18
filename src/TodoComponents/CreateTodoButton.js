import { useContext } from "react"
import { TodoContext } from "../TodoContext/TodoContext"


function CreateTodoButton({newTaskText, setNewTaskValue}){
  const {
    addTodo
  } = useContext(TodoContext)


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
import React, { useContext, useEffect } from "react"
import '../CSS/CreateTask.css'
import { CreateTodoButton } from '../TodoComponents/CreateTodoButton';


function CreateTask({sameTodo, setSameTodo, addTodo}){
  const [newTaskValue, setNewTaskValue] = React.useState('')



  return(
    <>
      <div className='newTask__container'>
        <h2>Create new task</h2>
        <p className={`errorAddTodo ${sameTodo ? 'showErrorAddTodo' : ''}`}>Ya existe ese ToDo</p>
        <label>Task Name</label>
        <input 
        placeholder="Prepare lunch"
        value={newTaskValue}
        onChange={(e)=> {
          setNewTaskValue(e.target.value)
          setSameTodo(false)
        }}
        
        ></input>

        <CreateTodoButton 
        addTodo = {addTodo}
        newTaskText = {newTaskValue}
        setNewTaskValue = {setNewTaskValue}
        />


        <div className='newTask__img'>
          <img 
          src=''
          />
        </div>

      </div>

    </>
  )
}

export {CreateTask}
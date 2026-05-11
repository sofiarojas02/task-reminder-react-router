import { CreateTodoButton } from './CreateTodoButton';

function CreateTask(){
  return(
    <>

      <div className='newTask__container'>
        <h2>Create new task</h2>

        <label>Task Name</label>
        <input placeholder="Prepare lunch"></input>

        <CreateTodoButton />

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
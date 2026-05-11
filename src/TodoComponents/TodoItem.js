import { TodoIcon } from "./TodoIcon"
import { CompleteIcon } from "../Icons/CompleteIcon"
import { DeleteIcon } from "../Icons/DeleteIcon"

function TodoItem({text, completed, onComplete, onDelete}){
  return(
    <li>
      <CompleteIcon 
      completed={completed}
      onComplete={onComplete}
      />
      
      <p className={`${completed && 'check__text'} `}
      >{text}</p>
      <DeleteIcon 
      onDelete={onDelete}
      />

    </li>
  )
}

export {TodoItem}
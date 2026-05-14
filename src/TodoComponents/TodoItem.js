import { TodoIcon } from "./TodoIcon"
import { CompleteIcon } from "../IconsComponents/CompleteIcon"
import { DeleteIcon } from "../IconsComponents/DeleteIcon"



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
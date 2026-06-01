import { TodoIcon } from "./TodoIcon"
import { CompleteIcon } from "../IconsComponents/CompleteIcon"
import { DeleteIcon } from "../IconsComponents/DeleteIcon"
import { EditIcon } from "../IconsComponents/EditIcon"



function TodoItem({text, completed, onComplete, onDelete, onEdit}){
  return(
    <li>
      <CompleteIcon 
      completed={completed}
      onComplete={onComplete}
      />
      
      <p className={`${completed && 'check__text'} `}
      >{text}</p>

      <EditIcon 
      onEdit={onEdit}
      />
      <DeleteIcon 
      onDelete={onDelete}
      />

    </li>
  )
}

export {TodoItem}
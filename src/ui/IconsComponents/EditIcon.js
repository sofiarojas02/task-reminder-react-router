import React from "react";
import { TodoIcon } from "../TodoComponents/TodoIcon";


function EditIcon({onEdit}){
    return(
        <TodoIcon 
        type = 'edit'
        onClick={onEdit}
        />
    )
}

export {EditIcon}

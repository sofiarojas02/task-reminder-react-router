import { useContext } from 'react'
import '../CSS/CreateNewBookButton.css'
import { TodoContext } from '../TodoContext/TodoContext'


function CreateNewBookButton(){
const {setIsNewBook} = useContext(TodoContext)

    return(
        <button 
        onClick={()=>
            setIsNewBook(true)
        }
        className='CreateBookButton'>Create New Note</button>
    )
}
export {CreateNewBookButton}
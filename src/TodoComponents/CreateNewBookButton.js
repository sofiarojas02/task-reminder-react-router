import { useContext } from 'react'
import '../CSS/CreateNewBookButton.css'


function CreateNewBookButton({setIsNewBook}){

    return(
        <button 
        onClick={()=>
            setIsNewBook(true)
        }
        className='CreateBookButton'>Create New Note</button>
    )
}
export {CreateNewBookButton}
import { useContext } from 'react'
import '../../CSS/CreateNewBookButton.css'


function CreateNewBookButton({onClick}){

    return(
        <button 
        onClick={onClick}
        className='CreateBookButton'>Create New Note</button>
    )
}
export {CreateNewBookButton}
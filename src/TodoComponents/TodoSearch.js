import { useContext } from "react"
import { TodoContext } from "../TodoContext/TodoContext"

function TodoSearch(){
  const {
    searhcValue,
    setSearhcValue,
  } = useContext(TodoContext)
  return(
        <input 
        placeholder="Buscar"
        onChange={(e)=> setSearhcValue(e.target.value)}
        value={searhcValue}
        ></input>

      
  )
}
export {TodoSearch}
import { useContext } from "react"
import '../CSS/TodoSearch.css'

function TodoSearch({
    searhcValue,
    setSearhcValue,
    loading,
  }){
  return(
        <input 
        className="todo__search"
        placeholder="Buscar"
        onChange={(e)=> setSearhcValue(e.target.value)}
        value={searhcValue}
        disabled = {loading}
        ></input>

      
  )
}
export {TodoSearch}
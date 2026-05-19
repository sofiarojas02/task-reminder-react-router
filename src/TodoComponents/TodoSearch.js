import { useContext } from "react"

function TodoSearch({
    searhcValue,
    setSearhcValue,
  }){
  return(
        <input 
        placeholder="Buscar"
        onChange={(e)=> setSearhcValue(e.target.value)}
        value={searhcValue}
        ></input>

      
  )
}
export {TodoSearch}
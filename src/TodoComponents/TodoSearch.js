import { TodoContext } from "../TodoContext/TodoContext"

function TodoSearch(){
  return(
    <TodoContext.Consumer>
      {({searhcValue, setSearhcValue})=>(
        <input 
        placeholder="Buscar"
        onChange={(e)=> setSearhcValue(e.target.value)}
        value={searhcValue}
        ></input>

      )}
    </TodoContext.Consumer>
  )
}
export {TodoSearch}
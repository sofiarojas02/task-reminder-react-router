import { TodoContext } from "../TodoContext/TodoContext"

function TodoCounter(){
  return(
    <TodoContext.Consumer>
      {({completedTodos, totalTodos})=>(
        <h2>Has completado {completedTodos} de {totalTodos} Todos</h2>
      )}
    </TodoContext.Consumer>
  )
}
export {TodoCounter}
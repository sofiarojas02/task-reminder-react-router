
import '../CSS/TodoCounter.css'

function TodoCounter({completedTodos, totalTodos, loading}){
  return(
        <h2
        className={`todo__counter ${loading && 'todo__counter--loading'}`}
        >
          Has completado {completedTodos} de {totalTodos} Todos</h2>
  )
}
export {TodoCounter}
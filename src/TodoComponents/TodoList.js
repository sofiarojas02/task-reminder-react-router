function TodoList({error, loading, onError, onEmpty, onLoading, todos, render, filteredTodos, children}){
  return(
    <>
      {(loading && !error) && onLoading}
      {(!loading && error) && onError}
      {(!loading && !todos.length) && onEmpty}
      {filteredTodos.map(render)}


    <ul>
      {children}
    </ul>
    </>
  )
}

export {TodoList}
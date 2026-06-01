function TodoList({error, 
  todos, 
  loading, 
  onError, 
  onEmptyTodos, 
  onLoading, 
  totalTodos, 
  render, 
  filteredTodos, 
  onEmptySearchedTodos, 
  children,
  searchText,

}){

  const renderFunc = children || render
  return(
    <section>
      {(loading && !error) && onLoading()}
      {(!loading && error) && onError()}
      {(!loading && !totalTodos) && onEmptyTodos()}
      {(!!todos.length && !filteredTodos.length) && onEmptySearchedTodos(searchText)}



      {(!loading && !error) && filteredTodos.map(renderFunc)}

    </section>
  )
}

export {TodoList}
import { TodoCounter } from '../TodoComponents/TodoCounter';
import { TodoItem } from '../TodoComponents/TodoItem';
import { TodoList } from '../TodoComponents/TodoList';
import { TodoSearch } from '../TodoComponents/TodoSearch';
import { CreateTodoButton } from '../TodoComponents/CreateTodoButton';
import { CreateTask } from '../TodoComponents/CreateTask';
import {TodosLoading} from '../TodoComponents/TodosLoading'
import {TodosError} from '../TodoComponents/TodosError'
import {EmptyTodos} from '../TodoComponents/EmptyTodos'
import { TodoContext, TodoProvider } from '../TodoContext/TodoContext';

function AppUi(){
    return (
    <>

    <div className='Main'>

      <section className='Todos__section'>
          <TodoCounter />
          <TodoSearch />

          <TodoContext.Consumer>
            {(
              {
                loading,
                error,
                filteredTodos, 
                completeTodo, 
                deleteTodo,
              }
            )=>(
              <TodoList>

              {(loading && !error)  && <TodosLoading />}
              {(error && !loading)  && <TodosError />}
              {(!loading && filteredTodos.lenght == 0) && <EmptyTodos />}

              {filteredTodos.map(todo => (
              <TodoItem
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              />
              ))}
            </TodoList>
            )}
          </TodoContext.Consumer>


      </section>

    <section className='newTask__section'>
      <CreateTask />
      </section>

    </div>



    </>
  );
}

export {AppUi}
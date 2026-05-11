import './App.css';
import React from 'react';
import { TodoCounter } from './TodoComponents/TodoCounter';
import { TodoItem } from './TodoComponents/TodoItem';
import { TodoList } from './TodoComponents/TodoList';
import { TodoSearch } from './TodoComponents/TodoSearch';
import { CreateTodoButton } from './TodoComponents/CreateTodoButton';
import { CreateTask } from './TodoComponents/CreateTask';

const defaultTodos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'llorar por la mañana', completed: true},
  {text: 'llorar por la tarde', completed: false},
  {text: 'llorar por la noche', completed: false},
  {text: 'Cortar pepino', completed: false},
]






function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searhcValue, setSearhcValue] = React.useState('');
  const [pressCompleteTodo, setpressCompleteTodo] = React.useState(false);
  
  const filteredTodos = todos.filter(todo => (
    todo.text.toLocaleLowerCase().includes(searhcValue.toLocaleLowerCase())
  ))

  const totalTodos = todos.length
  const completedTodos = todos.filter(todo => todo.completed).length

  const completeTodo = (textComplete)=>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo)=>
      todo.text === textComplete)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    setTodos(newTodos)
  }

  const deleteTodo = (textDelete)=>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo)=>
      todo.text === textDelete
    )
    // const news = newTodos.filter(todo => todo.text !== textDelete)
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }


  return (
    <>

    <div className='Main'>

      <section className='Todos__section'>
          <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          />
          <TodoSearch 
          searhcValue={searhcValue}
          setSearhcValue={setSearhcValue}
          />

          <TodoList>
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
      </section>

    <section className='newTask__section'>
      <CreateTask />
      </section>

    </div>



    </>
  );
}

export default App;

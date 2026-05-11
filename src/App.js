import './App.css';
import React from 'react';
import { TodoCounter } from './TodoComponents/TodoCounter';
import { TodoItem } from './TodoComponents/TodoItem';
import { TodoList } from './TodoComponents/TodoList';
import { TodoSearch } from './TodoComponents/TodoSearch';
import { CreateTodoButton } from './TodoComponents/CreateTodoButton';
import { CreateTask } from './TodoComponents/CreateTask';

const initialTodos = [
  {text: 'Cortar manzana', completed: true},
  {text: 'llorar por la mañana', completed: true},
  {text: 'llorar por la tarde', completed: false},
  {text: 'llorar por la noche', completed: false},
  {text: 'Cortar pepino', completed: false},
]

function useLocalStorage(itemName, initialValue){
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  }else{
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parsedItem)

    const saveItem = (newItem) =>{
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

function App() {




  const [todos, saveTodos] = useLocalStorage('TODOS_V1', initialTodos)
  const [searhcValue, setSearhcValue] = React.useState('');
  
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
    saveTodos(newTodos)
  }

  const deleteTodo = (textDelete)=>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo)=>
      todo.text === textDelete
    )
    // const news = newTodos.filter(todo => todo.text !== textDelete)
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
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

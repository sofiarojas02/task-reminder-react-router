import '../CSS/NewBookModal.css'
import { TodoContext, TodoProvider } from '../TodoContext/TodoContext';
import { TodoCounter } from '../TodoComponents/TodoCounter';
import { TodoItem } from '../TodoComponents/TodoItem';
import { TodoList } from '../TodoComponents/TodoList';
import { TodoSearch } from '../TodoComponents/TodoSearch';
import { CreateTask } from '../TodoComponents/CreateTask';
import {TodosLoading} from '../TodoComponents/TodosLoading'
import {TodosError} from '../TodoComponents/TodosError'
import {EmptyTodos} from '../TodoComponents/EmptyTodos'
import {NewBook} from '../BookPortal/NewBook'

import React from 'react';
import { CreateNewBookButton } from '../TodoComponents/CreateNewBookButton';
import { NewNote } from '../TodoComponents/NewNote';
function AppUi(){
  const {
    loading,
    error,
    filteredTodos, 
    completeTodo, 
    deleteTodo,
    isNewBook,
    createNote,
    setCreateNote,
    valueNote,
    todos,

    notes,
    saveNotes,
    loadingNote,
    errorNote,
  } = React.useContext(TodoContext)
  
    return (
    <>

    <div className='Main'>

      <section className='Todos__section'>
          <TodoCounter />
          <TodoSearch />


              <TodoList>

              {(loading && !error)  && <TodosLoading />}
              {(error && !loading)  && <TodosError />}
              {(!loading && !error && todos.length === 0) && <EmptyTodos />}

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

      <CreateNewBookButton />


      {/* Book Portal */}
            {isNewBook && 
            <NewBook />}


            <NewNote />

      
    </section>


    </div>



    </>
  );
}

export {AppUi}
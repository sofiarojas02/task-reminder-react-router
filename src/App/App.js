import '../CSS/App.css';
import '../CSS/NewBookModal.css'
import React from 'react';
import {  useTodos } from './useTodos';
import { TodoCounter } from '../TodoComponents/TodoCounter';
import { TodoItem } from '../TodoComponents/TodoItem';
import { TodoList } from '../TodoComponents/TodoList';
import { TodoSearch } from '../TodoComponents/TodoSearch';
import { CreateTask } from '../TodoComponents/CreateTask';
import {TodosLoading} from '../TodoComponents/TodosLoading'
import {TodosError} from '../TodoComponents/TodosError'
import {EmptyTodos} from '../TodoComponents/EmptyTodos'
import {NewBook} from '../BookPortal/NewBook'
import { CreateNewBookButton } from '../TodoComponents/CreateNewBookButton';
import { NewNote } from '../TodoComponents/NewNote';
import { TodoHeader } from '../TodoComponents/TodoHeader';
import { CreateTodoButton } from '../TodoComponents/CreateTodoButton';


function App() {

    const {
    loading,
    error,
    filteredTodos, 
    completeTodo, 
    deleteTodo,
    isNewBook,
    todos,
    notes,
    completedTodos, 
    totalTodos,
    searhcValue,
    setSearhcValue,
    addNewNote,
    setIsNewBook,
    sameNote,
    setSameNote,
    sameTodo, 
    setSameTodo,
    addTodo,
    deleteNote,
  } = useTodos()


    return (

    <>

    <div className='Main'>

      <section className='Todos__section'>

        <TodoHeader>
          <TodoCounter 
          completedTodos = {completedTodos}
          totalTodos = {totalTodos}
          
          />
          <TodoSearch 
          searhcValue={searhcValue}
          setSearhcValue={setSearhcValue}
          />

        </TodoHeader>




              <TodoList>

              {(loading && !error)  && <TodosLoading />}
              {(error && !loading)  && <TodosError />}
              {(!loading && !error && !todos.length) && <EmptyTodos />}

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
      <CreateTask 
      sameTodo = {sameTodo}
      setSameTodo = {setSameTodo}
      addTodo = {addTodo}
      />




      <CreateNewBookButton 
      setIsNewBook = {setIsNewBook}
      />


      {/* Book Portal */}
            {isNewBook && 
            <NewBook 
            addNewNote = {addNewNote}
            setIsNewBook = {setIsNewBook}
            sameNote = {sameNote}
            setSameNote = {setSameNote}
            
            />}


            <NewNote 
            notes = {notes}
            deleteNote = {deleteNote}
            />

      
    </section>


    </div>



    </>
  );
}

export default App;

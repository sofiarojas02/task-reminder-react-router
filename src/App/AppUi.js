import { TodoContext, TodoProvider } from '../TodoContext/TodoContext';
import { TodoCounter } from '../TodoComponents/TodoCounter';
import { TodoItem } from '../TodoComponents/TodoItem';
import { TodoList } from '../TodoComponents/TodoList';
import { TodoSearch } from '../TodoComponents/TodoSearch';
import { CreateTodoButton } from '../TodoComponents/CreateTodoButton';
import { CreateTask } from '../TodoComponents/CreateTask';
import {TodosLoading} from '../TodoComponents/TodosLoading'
import {TodosError} from '../TodoComponents/TodosError'
import {EmptyTodos} from '../TodoComponents/EmptyTodos'
import {NewBook} from '../BookPortal/BookPortal'
import '../CSS/NewBookModal.css'

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
    setIsNewBook,
    createNote,
    setCreateNote,
    createNewNote,
    valueNote,
    setValueNote,
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


      </section>

    <section className='newTask__section'>
      <CreateTask />

      <CreateNewBookButton />


      {/* Book Portal */}
            {isNewBook && 
            <NewBook >
              <div className="ModalBackground">
                <div className="ModalContainer">
                  <h2 className="ModalTitle">Create new note</h2>
                  <form className="ModalForm">
                    <label>Note</label>
                    <input 
                      type="text" 
                      placeholder="Enter note..." 
                      className="ModalInput"
                      value={valueNote}
                      onChange={(e)=>setValueNote(e.target.value)}
                    />
                    <div className="ModalButtons">
                      <button 
                      onClick={()=> setIsNewBook(false)}
                      type="button" className="Button--cancel">Cancel</button>
                      <button 
                      onClick={createNewNote}
                      type="button"
                      className="Button--create">Create</button>
                    </div>
                  </form>
                </div>
              </div>
            </NewBook>}


            {(createNote && (valueNote !== '')) && (
              <NewNote />
            )}

      
    </section>


    </div>



    </>
  );
}

export {AppUi}
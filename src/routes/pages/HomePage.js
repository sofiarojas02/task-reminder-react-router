import '../../CSS/App.css';
import '../../CSS/NewBookModal.css'
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {  useTodos } from '../useTodos';
import { TodoCounter } from '../../ui/TodoComponents/TodoCounter';
import { TodoItem } from '../../ui/TodoComponents/TodoItem';
import { TodoList } from '../../ui/TodoComponents/TodoList';
import { TodoSearch } from '../../ui/TodoComponents/TodoSearch';
import { CreateTask } from '../../ui/TodoComponents/CreateTask';
import {TodosLoading} from '../../ui/TodoComponents/TodosLoading'
import {TodosError} from '../../ui/TodoComponents/TodosError'
import {EmptyTodos} from '../../ui/TodoComponents/EmptyTodos'
import {NewBook} from '../../ui/BookPortal/NewBook'
import { CreateNewBookButton } from '../../ui/TodoComponents/CreateNewBookButton';
// import { NewNote } from '../../ui/TodoComponents/NewNote';
import { TodoHeader } from '../../ui/TodoComponents/TodoHeader';
import { CreateTodoButton } from '../../ui/TodoComponents/CreateTodoButton';
import { ChangeAlert } from '../../ui/ChangeAlert/ChangeAlert';
import { NewNote } from '../../ui/TodoComponents/NewNote';



function HomePage() {
  
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate()

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
    sincronizeTodos,
  } = useTodos()


    return (

    <>

    <div className='Main'>

      <ChangeAlert 
      sincronize = {sincronizeTodos}
      />


      <section className='Todos__section'>

        <TodoHeader
          loading = {loading}
        >

          <TodoCounter 
          completedTodos = {completedTodos}
          totalTodos = {totalTodos}

          
          />
          <TodoSearch 
          searhcValue={searhcValue}
          setSearhcValue={setSearhcValue}
          params={params}
          setParams={setParams}
          />

        </TodoHeader>


              {/* Render props */}
              <TodoList
                error = {error}
                loading = {loading}
                totalTodos={totalTodos}
                todos={todos}
                filteredTodos = {filteredTodos}
                searchText = {searhcValue}

                onError = {()=> <TodosError />}
                onLoading = {()=> <TodosLoading />}
                onEmptyTodos = {()=> <EmptyTodos />}
                onEmptySearchedTodos = {(searchText)=> <p>No hay resultado para: {searchText} </p>}
                render={todo => (
                <TodoItem
                key={todo.id} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
                />
                )}
              >
              </TodoList>



      </section>

    <section className='newTask__section'>
      <CreateTask 
      sameTodo = {sameTodo}
      setSameTodo = {setSameTodo}
      addTodo = {addTodo}
      />




      <CreateNewBookButton 
      onClick={() => navigate('/new')}
      // setIsNewBook = {setIsNewBook}
      />


      {/* Book Portal
            {isNewBook && 
            <NewBook 
            addNewNote = {addNewNote}
            setIsNewBook = {setIsNewBook}
            sameNote = {sameNote}
            setSameNote = {setSameNote}
            
            />} */}


            <NewNote 
            notes = {notes}
            deleteNote = {deleteNote}

            />

      
    </section>


    </div>



    </>
  );
}

export {HomePage};

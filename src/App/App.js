import '../CSS/App.css';
import React from 'react';
import { AppUi } from './AppUi';

import { TodoContext, TodoProvider } from '../TodoContext/TodoContext';

const initialTodos = [
  {text: 'Cortar manzana', completed: true},
  {text: 'llorar por la mañana', completed: true},
  {text: 'llorar por la tarde', completed: false},
  {text: 'llorar por la noche', completed: false},
  {text: 'Cortar pepino', completed: false},
]



function App() {




  return(

    <TodoProvider>
      <AppUi />
    </TodoProvider>


  )
}

export default App;

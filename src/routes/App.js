import { HashRouter, Route, Routes } from 'react-router-dom';
import '../CSS/App.css';
import '../CSS/NewBookModal.css'
import React from 'react';
import { HomePage } from './pages/HomePage';
import { EditTodoPage } from './pages/EditTodoPage';
import { NewTodoPage } from './pages/NewTodoPage';


function App() {
    return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/new' element={<NewTodoPage />} />
          <Route path='/edit/:id' element={<EditTodoPage />} />
          <Route path='*' element={<p> 404 Not Found</p>} />
        </Routes>
      </HashRouter>
  );
}

export default App ;

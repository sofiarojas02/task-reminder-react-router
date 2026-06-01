import { HashRouter, Route, Routes } from 'react-router-dom';
import '../CSS/App.css';
import '../CSS/NewBookModal.css'
import React from 'react';
import { HomePage } from './pages/HomePage';
import { EditNotePage } from './pages/EditNotePage';
import { NewNotePage } from './pages/NewNotePage';


function App() {
    return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/new' element={<NewNotePage />} />
          <Route path='/edit/:id' element={<EditNotePage />} />
          <Route path='*' element={<p> 404 Not Found</p>} />
        </Routes>
      </HashRouter>
  );
}

export default App ;

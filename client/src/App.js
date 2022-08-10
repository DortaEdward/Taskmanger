import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { useStoreState } from 'easy-peasy';

import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  const { user } = useStoreState(state => state.userStore);
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={ <Dashboard user={user} /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='*' element={<h2>Noting in this route</h2> } />
      </Routes>
    </div>
  );
}

export default App;

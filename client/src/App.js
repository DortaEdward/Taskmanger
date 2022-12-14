import { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { AuthContext } from './context/auth';

import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { getUser } from './api/';

function App() {
  const { user, dispatch } = useContext(AuthContext);
  const token = window.localStorage.getItem('token');
  useEffect(()=>{
    if( token && token != null){
      getUser(token, dispatch);
    }
  },[])

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={ <Dashboard user={ user } /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='*' element={<h2>Noting in this route</h2> } />
      </Routes>
    </div>
  );
}

export default App;

import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../../context/auth';
import { useEffect } from 'react';
import { getUser } from '../../api';

import Header from '../../Components/Header';
import Boards from '../../Components/Boards';

function Dashboard() {
  const { user, dispatch } = useContext(AuthContext);
  useEffect(() => {
    const sendToken = async () => {
      if(localStorage.getItem('token' && localStorage.getItem('token') != null)){
        await getUser(localStorage.getItem('token'), dispatch);
      } else {
        return <Navigate to='/login' />
      }
    };
    sendToken();
  }, []);
  
  return (
    <div className='dashboard-container'>
      {
        user
        ?
          <>
            <Header user={ user } />
            <Boards user={ user } />
          </>
        :
          <></>
      }
    </div>
  )
}

export default Dashboard;
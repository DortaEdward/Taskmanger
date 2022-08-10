// import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function Dashboard({ user }) {
  if(!user){
    return <Navigate to="/register" replace />
  }
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard;
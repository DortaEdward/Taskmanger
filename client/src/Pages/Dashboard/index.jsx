import { Navigate } from 'react-router-dom';

function Dashboard({user}) {
  console.log(user);
  if(!user){
    return <Navigate to="/login" replace />
  }
  return (
    <div>
      {JSON.stringify(user)}
    </div>
  )
}

export default Dashboard;
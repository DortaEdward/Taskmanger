import { Link } from 'react-router-dom';
import './styles.css';
import Navbar from '../Navbar';

function Header({user}) {
  return (
    <header>
      <div className="logo">
        T-M
      </div>
      <Navbar user={user}/>
    </header>
  )
}

export default Header
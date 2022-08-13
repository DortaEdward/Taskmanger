import {Link} from 'react-router-dom'
import './styles.css';

function Navbar({ user }) {
  return (
    <nav>
        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/account' className='nav-link'>
          <p className="user-img">
            {
              user.displayName
            }
          </p>
        </Link>
    </nav>
  )
}

export default Navbar
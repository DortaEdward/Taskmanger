import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css';

function Login() {
  const logIn = e => {
    e.preventDefault();
    console.log('login');
  };

  return (
    <div className='taskmanager-signup-form'>
      <h1>Logo</h1>
      <h1 className='title'>Create Your Account</h1>
      <p>Simple task managing platform.</p>
      <p>Create, Navigate, and Stay on Task</p>
      <p><strong>It's free to join and easy to use.</strong></p>
      
      <form onSubmit={ logIn }>
        <label htmlFor="email">Your Email</label>
        <input type="email" required id="mail" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" required id="password" name="password" />
        <label htmlFor="password-reenter">Re-enter Password</label>
        <input type="password" required id="password-reenter" name="password-reenter" />

        <p className="fineprint">
          <input type="checkbox" name='agreement' id='agreement'/>
          <label htmlFor="">I am 13 years of age or older.</label>
        </p>

        <button>Sign Up</button>
        <Link to='/login' className="fineprint">I already have an account</Link>
      </form>
    </div>
  )
}

export default Login
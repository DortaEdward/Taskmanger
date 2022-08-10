import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Register() {
  const register = e => {
    e.preventDefault();
    console.log('Registering');
  }
  return (
    <div className='taskmanager-signup-form'>
      <div className="left-section">
        <h1 className='logo'>Task Manager</h1> 
        <img src="form_img.svg" alt="" />
        <div>
          <p>Simple task managing platform.</p>
          <p>Create, Navigate, and Stay on Task</p>
          <p><strong>It's free to join and easy to use.</strong></p>
        </div>
      </div>
      <div className="right-section">
        <h1 className='title'>Create Your Account</h1>
        <p className="error"></p>
        <form onSubmit={ register }>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              className='form__input'
              type="email"
              required
              id="email"
              name="email"
              placeholder='Email'/>
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <input
              className='form__input'
              type="password"
              required
              id="password"
              name="password"
              minLength={8}
              placeholder='Password'/>
          </fieldset>
          <fieldset>
            <label htmlFor="password-reenter">Re-enter Password</label>
            <input
              className='form__input'
              type="password"
              required
              id="password-reenter"
              name="password-reenter"
              minLength={8}
              placeholder='Re-enter Password'/>
          </fieldset>

          <p className="fineprint">
            <input type="checkbox" name='agreement' id='agreement'/>
            <label className='checkbox__text' htmlFor="">I am 13 years of age or older.</label>
          </p>
          <div className='form__submit'>
            <button className='register__btn'>Sign Up</button>
            <p className='fineprint'>
              Already have an account?
              <span>
                <Link to='/login' className="link">Click Here</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
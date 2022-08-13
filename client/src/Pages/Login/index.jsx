import React, { useRef, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import "./styles.css";
import { loginCall } from '../../api/';
import { AuthContext } from '../../context/auth';

function Login() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const {loading, error, dispatch} = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    loginCall(payload, dispatch);
    const token = window.localStorage.getItem('token')
    if(token && token != null) {
      window.location = '/';
    };
  };
  return (
    <div className="container">
      <div className="taskmanager-form">
        <div className="left-section">
          <h1 className="logo">Task Manager</h1>
          <img src="form_img.svg" alt="" />
          <div>
            <p>Simple task managing platform.</p>
            <p>Create, Navigate, and Stay on Task</p>
            <p>
              <strong>It's free to join and easy to use.</strong>
            </p>
          </div>
        </div>
        <div className="right-section">
          <h1 className="title">Log In</h1>
          <form onSubmit={handleSubmit}>
          {
            error
            ?<p className='error'>{error}</p>
            :<></>
          }
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              className="form__input"
              type="email"
              required
              id="email"
              name="email"
              ref={emailRef}
              placeholder="Email"
            />
          </fieldset>
            <fieldset>
              <label htmlFor="password">Password</label>
              <input
                className="form__input"
                type="password"
                required
                id="password"
                name="password"
                minLength={8}
                ref={passwordRef}
                placeholder="Password"
              />
            </fieldset>
            {!loading ? (
              <div className="form__submit">
                <button className="register__btn">Log In</button>
                <p className="fineprint">
                  Don't have an account?
                  <span>
                    <Link to="/register" className="link">
                      Click Here
                    </Link>
                  </span>
                </p>
              </div>
            ) : (
              <>loading</>
            )}
          </form>
        </div>
      </div>
  </div>
  );
}

export default Login;

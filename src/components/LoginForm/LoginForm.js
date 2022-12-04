import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

export const LoginForm = () => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmailInputChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordInputChange = (evt) => {
    setPassword(evt.target.value);
  };

  const user = {
    email,
    password
  };

  const handleSubmit = event => {
      event.preventDefault();
      dispatch(logIn(user));
      reset();
  };

    const reset = () => {
      setEmail("");
      setPassword("");
    };
  

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input type="email" name="email" 
          value={email} onChange={handleEmailInputChange}
        />
        </label>
        <label>
          Password
          <input type="password" name="password" 
          value={password} onChange={handlePasswordInputChange}
        />
        </label>
        <button type="submit" onSubmit={handleSubmit}>Signup</button>
      </form>
    );
        
};
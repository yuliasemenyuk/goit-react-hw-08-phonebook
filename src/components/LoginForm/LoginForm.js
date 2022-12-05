import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import style from "./LoginForm.module.css";

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

     
  };

  

    return (
        <form onSubmit={handleSubmit} autoComplete="off" className={style.login_form}>
        <label className={style.login_lable}>
          Email
          <input type="email" name="email" 
          value={email}
          required
          onChange={handleEmailInputChange}
          className={style.login_input}
        />
        </label>
        <label className={style.login_lable}>
          Password
          <input type="password" name="password" 
          value={password} 
          required
          minLength="7"
          onChange={handlePasswordInputChange}
          className={style.login_input}
        />
        </label>
        <button type="submit" onSubmit={handleSubmit} className={style.login_btn}>Login</button>
      </form>
    );
        
};
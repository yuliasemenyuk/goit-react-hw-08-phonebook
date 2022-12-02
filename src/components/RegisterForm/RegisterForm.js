import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import styles from "./RegisterForm.module.css";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameInputChange = (evt) => {
    setName(evt.target.value);
  };

  const handleEmailInputChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordInputChange = (evt) => {
    setPassword(evt.target.value);
  };

  const user = {
    name, 
    email,
    password
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register(user));
    reset();
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label >
        Username
        <input type="text" name="name" value={name} onChange={handleNameInputChange}/>
      </label>
      <label>
        Email
        <input type="email" name="email" value={email} onChange={handleEmailInputChange}/>
      </label>
      <label>
        Password
        <input type="password" name="password" value={password} onChange={handlePasswordInputChange}/>
      </label>
      <button type="submit">Signup</button>
    </form>
  );
};

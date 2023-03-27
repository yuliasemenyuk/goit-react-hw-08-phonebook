import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import style from "./RegisterForm.module.css";

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
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={style.register_form}>
      <label className={style.register_lable}>
        Username
        <input type="text" name="name" value={name} 
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleNameInputChange} className={style.register_input}/>
      </label>
      <label className={style.register_lable}>
        Email
        <input type="email" name="email" value={email} 
        required
        onChange={handleEmailInputChange} className={style.register_input}/>
      </label>
      <label className={style.register_lable}>
        Password
        <input type="password" name="password" value={password} 
        minLength="7"
        required
        onChange={handlePasswordInputChange} className={style.register_input}/>
      </label>
      <button type="submit" className={style.register_btn}>
        Signup
      </button>
    </form>
  );
};

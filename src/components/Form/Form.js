import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getIsLoading } from "../../redux/selectors";
import { addContact } from "../../redux/operations";
import style from "./Form.module.css";


export const Form = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleNameInputChange = (evt) => {
    setName(evt.target.value);
  };

  const handleNumberInputChange = (evt) => {
    setNumber(evt.target.value);
  };

  const contacts = useSelector(getContacts);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.warning(`${name} is already in contacts`);
    };

    const contact = {
      name, 
      number
    };

    dispatch(addContact(contact));

    toast.success(`Contact '${name}' is added`);
    
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const isLoading = useSelector(getIsLoading);

  return (
    <form onSubmit={handleSubmit} className={style.saving_form}>
      <label className={style.saving_lable}>
        Name{" "}
        <input
          className={style.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleNameInputChange}
        />
      </label>
      <label className={style.saving_lable}>
        Number
        <input
          className={style.input}
          type="number"
          name="number"
          value={number}
          required
          onChange={handleNumberInputChange}
        />
      </label>
      <button
        className={style.saving_btn}
        onSubmit={handleSubmit}
        type="submit"
        disabled={isLoading}>
        Add contact
      </button>
    </form>
  );
};

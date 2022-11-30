import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIsLoading, getError } from "redux/selectors";
import { fetchContacts } from "redux/operations";
import Filter from "./Filter/Filter";
import { Form } from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LineWave as Loader } from  'react-loader-spinner';
import style from "./App.module.css";


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div className={style.container}>
      <h1 className={style.title}>Phonebook</h1>
      <Form />
      <h2 className={style.title}>Contacts</h2>
      <Filter />
     {isLoading && !error ? <Loader/> : 
     <ContactList />
     }
      <ToastContainer autoClose={2000} />
    </div>
  );
};

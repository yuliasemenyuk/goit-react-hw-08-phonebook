import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIsLoading, getError } from "redux/contacts/contactsSelectors";
import { fetchContacts } from "redux/contacts/contactsOperations";
import Filter from "../components/Filter/Filter";
import { ContactsForm } from "../components/ContactsForm/ContactsForm";
import { ContactList } from "../components/ContactList/ContactList";

import { LineWave as Loader } from  'react-loader-spinner';
import styles from "../components/App.module.css";

    const ContactsView = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);
    
      return (
        <div className={styles.container}>
            
           <h1 className={styles.title}>Phonebook</h1>
           <ContactsForm />
           <h2 className={styles.title}>Contacts</h2>
           <Filter />
           {isLoading && !error ? <Loader/> : 
            <ContactList />
            }     
        </div>
      )
};

export default ContactsView;
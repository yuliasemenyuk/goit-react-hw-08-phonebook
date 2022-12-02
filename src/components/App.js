import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { getIsLoading, getError } from "redux/contacts/contactsSelectors";
import { getIsRefreshing } from "redux/auth/authSelectors";
import { refreshUser } from "redux/auth/authOperations";
import { ContactsView } from "../views/ContactsView";
import  HomeView from "../views/HomeView";
import { LoginView } from "views/loginView";
import { RegisterView } from "views/RegisterView";


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const isRefreshing = useSelector(getIsRefreshing);


  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
        <Route index element={<HomeView />} />
        <Route
          path="/register"
          element={<RegisterView />}
            />

        <Route
          path="/login"
          element={<LoginView />} />
        

        <Route
          path="/contacts"
          element={<ContactsView />} />
        
      
    </Routes>
  );
}

    // <div className={style.container}>
    //     <h1 className={style.title}>Phonebook</h1>
    //     <ContactsForm />
    //     <h2 className={style.title}>Contacts</h2>
    //     <Filter />
    //     {isLoading && !error ? <Loader/> : 
    //     <ContactList />
    //     }
    //     <ToastContainer autoClose={2000} />
    // </div>
import { lazy, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Navigate } from 'react-router-dom';
import { getIsLoading, getError } from "redux/contacts/contactsSelectors";
import { getIsRefreshing } from "redux/auth/authSelectors";
import { refreshUser } from "redux/auth/authOperations";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Layout } from "./Layout/Layout";

const ContactsView = lazy(() => import('../views/ContactsView'));
const HomeView = lazy(() => import('../views/HomeView'));
const LoginView = lazy(() => import('../views/loginView'));
const RegisterView = lazy(() => import('../views/RegisterView'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);


  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
        <Route path="/" element={<Layout />}>

        <Route index element={<HomeView />} />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginView />} />
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute
              redirectTo="/contacts"
              component={<RegisterView />} />
          }
        />
       
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsView />} />
          }
        />
        
        </Route>
        
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
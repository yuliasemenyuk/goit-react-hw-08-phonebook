import { lazy, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { getIsRefreshing } from "redux/auth/authSelectors";
import { refreshUser } from "redux/auth/authOperations";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Layout } from "./Layout/Layout";

const ContactsView = lazy(() => import('../views/ContactsView'));
const HomeView = lazy(() => import('../views/HomeView'));
const LoginView = lazy(() => import('../views/loginView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const NotFoundView = lazy(() => import('../views//NotFoundView'));

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
        
          <Route path="*" element={<NotFoundView />} />
        
        </Route>
        
    </Routes>
  );
}
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import "react-toastify/dist/ReactToastify.css";
import style from './Layout.module.css';

export const Layout = () => {
    return (
      <>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <ToastContainer autoClose={2000} />
      </>
    );
  };

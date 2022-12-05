import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import style from "./Navigation.module.css";

export const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav className={style.nav_container}>
      <NavLink to="/" 
      className={({ isActive }) =>
      isActive ? style.active_nav_link : style.nav_link
    }>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" 
        className={({ isActive }) =>
      isActive ? style.active_nav_link : style.nav_link
    }>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
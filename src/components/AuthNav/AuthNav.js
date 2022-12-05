import { NavLink } from "react-router-dom";
import style from "./AuthNav.module.css";

export const AuthNav = () => {
    return (
        <div>
            <NavLink to='/login' className={style.nav_btn}>
                Login
            </NavLink>
            <NavLink to='/register' className={style.nav_btn}>
                Signup
            </NavLink>
        </div>
    )
}
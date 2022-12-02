import { NavLink } from "react-router-dom";

export const AuthNav = () => {
    return (
        <div>
            <NavLink to='/login'>
                Login
            </NavLink>
            <NavLink to='/regiser'>
                Signup
            </NavLink>
        </div>
    )
}
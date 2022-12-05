import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/auth/authSelectors";
import { logOut } from "redux/auth/authOperations";
import style from "./UserMenu.module.css";

export const UserMenu = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={style.usermenu_container}>
        <p className={style.usermenu_text}>Welcome {user.name} !</p>
        <button type="button"
        onClick={() => handleLogout()}
        className={style.logout_btn}>
          Logout
        </button>
    </div>
  )
};
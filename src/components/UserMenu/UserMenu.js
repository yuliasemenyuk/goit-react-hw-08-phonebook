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
    <div>
        <p>Welcome {user.name} !</p>
        <button type="button" onClick={() => handleLogout()}>Logout</button>
    </div>
  )
};
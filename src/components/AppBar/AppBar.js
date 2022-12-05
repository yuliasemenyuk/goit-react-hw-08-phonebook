import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/authSelectors";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import style from "./AppBar.module.css";

export const AppBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
  
    return (
      <header className={style.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    );
  };
  
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/authSelectors";
import { Navigation } from "../Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";

export const AppBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
  
    return (
      <header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    );
  };
  
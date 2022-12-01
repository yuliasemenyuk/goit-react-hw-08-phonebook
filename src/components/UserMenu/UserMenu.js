import style from "./UserMenu.module.css";

export const userMenu = ({ email }) => (
    <div>
        <p>{email}</p>
        <button>Logout</button>
    </div>
);
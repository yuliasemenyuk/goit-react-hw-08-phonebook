import { useDispatch, useSelector } from "react-redux";
import { ContactItem } from "../ContactItem/ContactItem";
import { getIsLoading } from "../../redux/selectors";
import { deleteContact } from "../../redux/operations";
import { getFilterValue, getContacts } from "../../redux/selectors";
import { toast } from "react-toastify";
import style from "./ContactList.module.css";

export const ContactList = () => {
  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(deleteContact(id));

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const filteredContacts = (contacts) => {
    if (filter === "") {
      return contacts;
    } else {
      const normalizedFilter = filter.toLowerCase();

      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };
  const isLoading = useSelector(getIsLoading);

  return (
      <ul className={style.contacts_list}>
      {filteredContacts(contacts).map(({ id, name, number }) => (
        <li key={id} className={style.contact_list_item}>
          <ContactItem contactItem={{ name, number, id }}></ContactItem>
          
          <button className={style.contact_item_btn}
             onClick={() => {
              handleDelete(id);
              toast.success(`Contact '${name}' deleted`);
            }}
            disabled={isLoading}
          >
            Delete
          </button>

        </li>
      ))}
    </ul>
    );
 };
  

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterContacts } from "../../redux/contactsSlice";
import style from "./Filter.module.css";

const Filter = () => {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  const handleFilterInpChange = (event) => {
    setFilter(event.currentTarget.value);
  };

  useEffect(() => {
    dispatch(filterContacts(filter));
  });


  return (
    <label className={style.filter_lable}>
      Find contact by name
      <input
        placeholder="&#x1F50E;  Search..."
        className={style.filter_input}
        type="text"
        value={filter}
        onChange={handleFilterInpChange}
      />
    </label>
  );
};

export default Filter;

import React, { useContext, useRef, useEffect } from "react";
import contactContext from "../../context/contact/contactContex";

const ContactFilter = () => {
  const contactContex = useContext(contactContext);
  const text = useRef("");

  const { filterContacts, clearFilter, filtered } = contactContex;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  }, [filtered]);

  const onChange = (e) => {
    if (text.current && text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <div>
      <form>
        <input
          ref={text}
          type="text"
          placeholder="Filter Contacts ...."
          onChange={onChange}
        ></input>
      </form>
    </div>
  );
};
export default ContactFilter;

import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactProvider from "../../context/contact/ContactState";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/authContex";

const Home = () => {
  return (
    <ContactProvider>
      <div className="grid-2">
        <div>
          <ContactForm />
        </div>
        <div>
          <ContactFilter />
          <Contacts />
        </div>
      </div>
    </ContactProvider>
  );
};
export default Home;

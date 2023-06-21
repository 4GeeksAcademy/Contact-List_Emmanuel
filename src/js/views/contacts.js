import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PersonalContact from "../component/PersonalContact.jsx";

const Contacts = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.loadSomeData();
  }, [store.contacts]);

  return (
    <div className="content mt-5 mx-auto">
      {store.contacts &&
        store.contacts.map((contact) => (
          <PersonalContact contact={contact} key={contact.id} />
        ))}
      <div className="mt-4 d-flex justify-content-center">
        <Link to="/Home">
          <button className="btn btn-success">Add New Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
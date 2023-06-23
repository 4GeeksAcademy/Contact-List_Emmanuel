import React, { useEffect, useState } from 'react';
import { Context } from '../store/appContext.js';
import { useContext } from 'react';
import ContactCard from '../component/ContactCard.jsx';
import ContactForm from '../component/ContactForm.jsx';

const ContactList = () => {

  const { store, actions } = useContext(Context)


   useEffect(()=>{
       actions.getAgenda()
   },[]);

  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <h1>Contact List</h1>
      {/* <h5>Search Contact List</h5>
      <input type="text" className='inputSearch' value={store.agendaGlobal} onChange={ (e) => actions.changeAgendaSlug(e.target.value)} /> */}
      {/* <h6>Make your own list and add contacts to it</h6> */}
      <button
        type="button"
        className="btn btn-dark mb-3 mx-auto bx bx-flashing-hover"
        onClick={openModal}
        >Add New Contact</button>

      <div className="column">
        {store.agenda.map((contact, index) => (
          <ContactCard
            photo="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            key={index}
            contact={contact}
            onDelete={() => deleteContact(index)}
            onEdit={openModal}
          />
        ))}
      </div>

      <ContactForm
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default ContactList;

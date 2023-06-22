import React, { useEffect, useState } from 'react';
import { Context } from '../store/appContext.js';
import { useContext } from 'react';
import ContactCard from '../component/ContactCard.jsx';
import ContactForm from '../component/ContactForm.jsx';

const ContactList = () => {

  const { store, actions } = useContext(Context)


  useEffect(()=>{
      actions.getAgenda()
  },[store.agendaGlobal]);

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
      <h5>ESCRIBE EL NOMBRE DE TU LISTA</h5>
      <input type="text" value={store.agendaGlobal} onChange={ (e) => actions.changeAgendaSlug(e.target.value)} />
      <h6>Si tu lista no existe, dale un nombre y agregá tus contactos.</h6>
      <button
        type="button"
        className="btn btn-success mb-3 d-flex"
        onClick={openModal}
      >
        Add New Contact
      </button>

      <div className="column">
        {store.agenda.map((contact, index) => (
          <ContactCard
            photo="https://img.freepik.com/iconos-gratis/usuario_318-563642.jpg"
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

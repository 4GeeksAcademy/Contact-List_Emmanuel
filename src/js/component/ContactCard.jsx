import React from 'react';
import { Context } from '../store/appContext';
import { useContext } from 'react';

const ContactCard = ({ contact, onEdit }) => {

  const { actions } = useContext(Context)

  
  const { full_name, email, phone, address, id } = contact;

  const handlerOnEdit = (id)=>{
    onEdit()
    actions.updateId(id)
  }
 


  return (
    <div className="card col-md-12 mb-12">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://img.freepik.com/iconos-gratis/usuario_318-563642.jpg?w=180" alt="Contact" className="img-fluid" />
        </div>
        <div className="col-md-6 text-start">
          <div className="card-body">
            <h5 className="card-title">{full_name}</h5>
            <p className="card-text">
              <strong>Email:</strong> {email}
            </p>
            <p className="card-text">
              <strong>Phone:</strong> {phone}
            </p>
            <p className="card-text">
              <strong>Address:</strong> {address}
            </p>
          </div>
        </div>
        <div className="col-md-2 card-footer d-flex justify-content-center align-items-center">
            <button className="btn btn-primary me-2" onClick={()=>handlerOnEdit(id)}>Edit</button>
            <button className="btn btn-danger" onClick={()=>actions.onDelete(id)}>Delete</button>
        </div>
      </div>

    </div>
  );
};

export default ContactCard;

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
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Contact" className="img-fluid ms-5 mt-3 mb-3" style={{ height: "200px" }} />
        </div>
        <div className="col-md-6 text-start">
          <div className="card-body">
            <h5 className="card-title mt-3">{full_name}</h5>
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
            <button className="btn btn-primary me-2" onClick={()=>handlerOnEdit(id)}>
              <box-icon type='solid' name='pencil'></box-icon>
              </button>
            <button className="btn btn-danger" onClick={()=>actions.onDelete(id)}>
            <box-icon type='solid' name='trash-alt'></box-icon>
              </button>
        </div>
      </div>

    </div>
  );
};

export default ContactCard;

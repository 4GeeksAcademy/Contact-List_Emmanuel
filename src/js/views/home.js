import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Home = () => {
  const { actions, store } = useContext(Context);

  return (
    <div>
      <div className="container w-75 mt-5 border border-dark">
        <form onSubmit={actions.createContact}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="full_name"
              aria-describedby="fullName"
              onChange={actions.handleChange}
             
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
               onChange={actions.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              className="form-control"
              id="phoneNumber"
               onChange={actions.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              name="address"
              className="form-control"
              id="address"
               onChange={actions.handleChange}
            />
          </div>
          <div className="justify-content-center d-flex my-3 w-100">
            <button type="submit" onClick={(e) => actions.createContact(e)} className=" w-100 btn btn-primary">
              Add contact
            </button>
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Link to="/Contacts">
          <button className="btn btn-success">Back to Contact List</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
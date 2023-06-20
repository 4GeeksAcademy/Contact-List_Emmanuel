import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


import "../../styles/demo.css";

export const Contacts = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container ">
			<div className="d-flex justify-content-end">
				<Link to="/">
					<button className="btn btn-success ">Add new contact</button>
				</Link>
			</div>

			{store.contacts.map((item, index) => {
				return (

					<div key={index} className="card mb-3" style={{maxWidth: "540px"}}>
						<div className="row g-0">
							<div className="col-md-4">
								<img src="..." className="img-fluid rounded-start" alt="..." />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">
										Phone: {item.phone}
										Email: {item.email}
										Address: {item.address}
									</p>
									<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
								</div>
							</div>
						</div>
					</div>


				);
			})}

			<br />

		</div>
	);
};

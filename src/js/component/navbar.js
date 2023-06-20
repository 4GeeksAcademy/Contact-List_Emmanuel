import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-end">
			{/* <Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link> */}
			<div className=" d-flex justify-content-end">
				<Link to="/demo">
					<button className="btn btn-success d-flex justify-content-end">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};

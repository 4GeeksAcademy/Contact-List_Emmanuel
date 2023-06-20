import React from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => (
	<div className="text-center">
		<h1>Add a new contact</h1>
			<form className="p-5">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label d-flex justify-content-start">Full name</label>
    <input type="email" class="form-control" placeholder="Enter Full name" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3 ">
    <label for="exampleInputPassword1" class="form-label d-flex justify-content-start">Email</label>
    <input type="password" placeholder="Enter Email" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label d-flex justify-content-start">Phone</label>
    <input type="password" placeholder="Enter Phone" class="form-control" id="exampleInputPassword1"/>
  </div>  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label d-flex justify-content-start">Address</label>
    <input type="password" placeholder="Enter Address" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class=" form-control btn btn-primary">Save</button>
</form>

<Link to="/contacts">
	<span className=" d-flex justify-content-start">Get back to contacts</span>
</Link>

	</div>
);

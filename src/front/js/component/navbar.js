import React from "react";
import { Link } from "react-router-dom";
import bootstrap from "bootstrap";

export const Navbar = () => {
	return (
		<div className="navbar">
		<nav class="navbar navbar-light bg-light justify-content-between">
			<a class="navbar-brand">Navbar</a>
			<form class="form-inline">
				<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></input>
			</form>
		</nav>
		</div>
	);
};

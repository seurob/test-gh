import React from 'react';
import { NavLink } from "react-router-dom";
import image from "../assets/img/imgexample.jpg";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container-fluid justify-content-start">
                <a class="navbar-brand" href="#">
                    <img src={image} />
                </a>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <NavLink className="btn btn-outline-primary" to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="btn btn-outline-primary" to="/posts">Posts</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="btn btn-outline-primary" to="/form">Form Post</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="btn btn-outline-primary" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
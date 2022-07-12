import React from 'react';
import { Link } from "react-router-dom";
import image from "../assets/img/error404.jpg";

const NotFound = () => {
    return (
        <div class="container p-5 my-5 border text-center">
            <h1>404</h1>
            <p><img src={image} /></p>
            <Link to="/" className="btn btn-outline-dark">
                Back Home
            </Link>
        </div>
    );
};

export default NotFound;
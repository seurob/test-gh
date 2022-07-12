import React from 'react';
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faCheckSquare, faCoffee);

const Footer = () => {
    return (

        <>
        
        <footer class="bg-dark text-center text-white">
            <div class="container p-4">
                <section class="mb-4">
                    <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                    <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
                    <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                    <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                    <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                    <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
                </section>
                <section class="mb-4">
                </section>
                <section class="">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase"><NavLink className="btn btn-outline-primary" to="/">Home</NavLink></h5>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase"><NavLink className="btn btn-outline-primary" to="/posts">Posts</NavLink></h5>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase"><NavLink className="btn btn-outline-primary" to="/form">Form</NavLink></h5>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase"><NavLink className="btn btn-outline-primary" to="/contact">Contact</NavLink></h5>
                        </div>
                    </div>
                </section>
            </div>
            <div class="text-center p-3">
                © 2022 Copyright: <a class="text-white" href="#">by Rob </a>
            </div>
        </footer>
        </>
    );
};

export default Footer;
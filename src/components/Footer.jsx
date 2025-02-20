import React from 'react';
import '../assets/styles/Footer-style.css';
import logo from '../assets/images/logo.svg';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <img src={logo} className='logo' />
                        <p className='text-white'>
                            Cari Load is an innovative online marketplace connecting load and truck owners for seamless, cost-effective logistics solutions.
                        </p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Home</a></li>
                            <li><a href="#" className="text-white">About</a></li>
                            <li><a href="#" className="text-white">Contact</a></li>
                            <li><a href="#" className="text-white">Blog</a></li>
    
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Contact Us</h5>
                        <p>
                            <i className="bi bi-geo-alt-fill"></i> 123 Tankal, Yahuadu
                        </p>
                        <p>
                            <i className="bi bi-telephone-fill"></i> +91 8748734236
                        </p>
                        <p>
                            <i className="bi bi-envelope-fill"></i> info@cariload.com
                        </p>
                    </div>
                </div>
                <div className="text-center pt-5 pb-2">
                    <p className="mb-0">&copy; 2024 CariLoad. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/Navbar-style.css';
import logo from '../assets/images/logo.svg';

const Navbar = ({ bgColor }) => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <>
            <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : 'bg-body-transparent'}`} style={{ backgroundColor: bgColor }}>
                <div className="container-fluid">
                    <Link to="/cari-load" className="navbar-brand">
                        <img src={logo} className='brand-logo' alt="Brand Logo" />
                    </Link>

                    <div className="d-flex">
                        <Link to='/cari-load/signin' className="navbar-toggler sign-btn">Sign in</Link>

                        <button className="navbar-toggler bg-transparent border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <i className="bi bi-text-center fs-2"></i>
                        </button>
                    </div>
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                <img src={logo} className='brand-logo' alt="Brand Logo" />
                            </h5>

                            <button type="button" className="btn-close bg-transparent border-0 ms-auto" data-bs-dismiss="offcanvas" aria-label="Close">
                                <i className="bi bi-x-lg text-white"></i>
                            </button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end justify-content-lg-center align-items-lg-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link to="/cari-load" className={`nav-link ${isActive('/cari-load')}`} aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/cari-load/about' className={`nav-link ${isActive('/cari-load/about')}`}>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/cari-load/contact' className={`nav-link ${isActive('/cari-load/contact')}`}>Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/cari-load/blog' className={`nav-link ${isActive('/cari-load/blog')}`}>Blog</Link>
                                </li>
                            </ul>
                            <Link to='/cari-load/signin' className="sign-btn d-none d-lg-flex">Sign in</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShrink(true);
            } else {
                setShrink(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`navbar navbar-expand-lg fixed-top ${shrink ? 'navbar-shrink' : 'navbar-normal'}`}>
                <div className="container text-white">
                    <a className="navbar-brand fw-semibold text-uppercase text-white fs-2" href="#">start Framework</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 position-relative g-2">
                            <li className="nav-item text-uppercase">
                                <NavLink className="nav-link fw-semibold text-white" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item text-uppercase">
                                <NavLink className="nav-link fw-semibold text-white" to="/portfolio">Portfolio</NavLink>
                            </li>
                            <li className="nav-item text-uppercase">
                                <NavLink className="nav-link fw-semibold text-white" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

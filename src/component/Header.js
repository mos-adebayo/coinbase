import React from 'react';
import logo from '../logo.svg';

const Header = () => (
    <div className="navbar-fixed">
        <nav className={'blue-grey darken-4'}>
            <div className="nav-wrapper container">
                <a href={'/'} className="brand-logo">
                    <img src={logo} width={55} alt="Donut"/>
                </a>
            </div>
        </nav>
    </div>
);

export default Header;

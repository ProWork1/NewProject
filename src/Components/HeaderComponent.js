import React from 'react'
import NavbarComponent from './NavbarComponent'
import '../css/header.css'
import background from '../css/Group2.png';

const Header = () => {
    return (
        <div style={{backgroundImage: `url(${background})`}}>
            <NavbarComponent />
        </div>
    )
}

export default Header;

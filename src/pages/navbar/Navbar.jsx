import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'

function Navbar(props) {
    return (
        <div>
            <div className="navbar1">
                <ul className='ul'>
                    <NavLink className='nav' to={'/simple-log'}>
                        <li className='li'>
                            Simple
                        </li>
                    </NavLink>
                    <NavLink className='nav' to={'/admin-log'}>
                    <li className='li'>
                        Admin
                    </li>
                    </NavLink>
                    <NavLink className='nav' to={'/super-admin-log'}>
                    <li className='li'>
                        Super Admin
                    </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
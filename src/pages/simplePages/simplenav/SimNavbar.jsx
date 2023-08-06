import React from 'react';
import './simnavbar.css'
import { NavLink } from 'react-router-dom';
function SimNavbar(props) {
    return (
        <div className='sim-nav'>
            <ul className='sv-ul'>
                <NavLink to={'/simple/dashboard'} className='nav'><li className='li'>Haridor Qo'shish</li></NavLink>
                <NavLink to={'/simple/selled'} className='nav'><li className='li'>Sotilgan</li></NavLink>
                <NavLink to={'/simple/location'} className='nav'><li className='li'>Uchrashuv</li></NavLink>
                <NavLink to={'/simple/unconnect'} className='nav'><li className='li'>Bog'lanib bo'lmagan</li></NavLink>
                <NavLink to={'/simple/refuse'} className='nav'><li className='li'>Rad etilgan</li></NavLink>
            </ul>
        </div>
    );
}

export default SimNavbar;
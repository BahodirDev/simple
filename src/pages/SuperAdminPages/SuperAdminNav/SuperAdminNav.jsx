import React from 'react';
import { NavLink } from 'react-router-dom';

function SuperAdminNav(props) {
    return (
        <div>
            <div className='sim-nav'>
                <ul className='sv-ul'>
                    <NavLink to={'/super-admin/simple'} className='nav'><li className='li'>Odiy Hodimlar</li></NavLink>
                    <NavLink to={'/super-admin/admin'} className='nav'><li className='li'>Adminlar</li></NavLink>
                    <NavLink to={'/super-admin/add-worker'} className='nav'><li className='li'>Hodim qo'shish</li></NavLink>
                </ul>
            </div>
        </div>
    );
}

export default SuperAdminNav;
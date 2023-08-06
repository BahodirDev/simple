import React from 'react';
import { NavLink } from 'react-router-dom';

function AdminNav(props) {
    return (
        <div>
            <div className='sim-nav'>
                <ul className='sv-ul'>
                    <NavLink to={'/admin/simple'} className='nav'><li className='li'>Odiy Hodimlar</li></NavLink>
                    <NavLink to={'/admin/day'} className='nav'><li className='li'>Har kunlik sotuv</li></NavLink>
                    <NavLink to={'/admin/rufused'} className='nav'><li className='li'>Rad etilganlar</li></NavLink>
                    <NavLink to={'/admin/dedline'} className='nav'><li className='li'>Dedline</li></NavLink>
                </ul>
            </div>
        </div>
    );
}

export default AdminNav;
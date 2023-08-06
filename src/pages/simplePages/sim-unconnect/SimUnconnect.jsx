import React, { useEffect, useState } from 'react';
import SimNavbar from '../simplenav/SimNavbar';

function SimUnconnect(props) {

    const [users,setUsers] = useState([]);
    
    useEffect(() => {
        const storedUsers = localStorage.getItem('bolmadi');
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);

    const changeStatus = (id, type) => {
        console.log('work');
        const newUser = { ...id, time: Date.now() };

        const existingArray = JSON.parse(localStorage.getItem(type)) || [];
        existingArray.push(newUser);
        localStorage.setItem(type, JSON.stringify(existingArray));

        // Retrieve users from localStorage and filter out the user with the provided id

        const updatedUsers = users.filter((user) => user.id != id.id);

        console.log({ updatedUsers });
        localStorage.setItem('bolmadi', JSON.stringify(updatedUsers));
    };






    return (
        <div className='dashboard'>
            <SimNavbar />

            <div className="users">
                <h1>Bog'lanilmaganlar</h1>
                <div className="dd-users">
                    <div className='dd-names'>
                        <h4>Ism</h4>
                        <h4>Familiya</h4>
                        <h4>Otasining ismi</h4>
                        <h4>tel1</h4>
                        <h4>email</h4>
                        <h4>address</h4>
                    </div>
                    {
                        users?.map((e, idx) => {
                            return (
                                <div className="dd-user" key={idx}>
                                    <p>{e.name1}</p>
                                    <p>{e.name2}</p>
                                    <p>{e.name3}</p>
                                    <p>{e.name4}</p>
                                    <p>{e.name5}</p>
                                    <p>{e.name6}</p>
                                    <div className="dropdown-center">
                                        <button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            O'zgartirish
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><button className='btn btn-outline-dark w-100' onClick={() => changeStatus(e, 'sotilgan')} >Sotilgan</button></a></li>
                                            <li><a className="dropdown-item" href="#"><button className='btn btn-outline-dark w-100' onClick={() => changeStatus(e, 'uchrashuv')} >Uchrashuv</button></a></li>
                                            <li><a className="dropdown-item" href="#"><button className='btn btn-outline-dark w-100' onClick={() => changeStatus(e, 'rad')} >Rad etilgan</button></a></li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default SimUnconnect;
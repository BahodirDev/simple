import React, { useEffect, useState } from 'react';
import './dashboard.css';
import SimNavbar from '../simplenav/SimNavbar';

function Dashboard(props) {


    // massiv
    const [users, setUsers] = useState([]);

    const [name1, setName1] = useState();
    const [name2, setName2] = useState();
    const [name3, setName3] = useState();
    const [name4, setName4] = useState();
    const [name5, setName5] = useState();
    const [name6, setName6] = useState();
    const [date1, setDate1] = useState();
    let date = new Date()


    useEffect(() => {
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);



    const addUser = (e) => {
        e.preventDefault();
        const newUser = {
            id: Date.now(),
            name1,
            name2,
            name3,
            name4,
            name5,
            name6,
        };
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = [...existingUsers, newUser];
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
    };


    const changeStatus = (id, type) => {
        console.log('work');
        const newUser = { ...id, time: Date.now() };

        const existingArray = JSON.parse(localStorage.getItem(type)) || [];
        existingArray.push(newUser);
        localStorage.setItem(type, JSON.stringify(existingArray));

        // Retrieve users from localStorage and filter out the user with the provided id
     
        const updatedUsers = users.filter((user) => user.id != id.id);

        console.log({updatedUsers});
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };






    return (
        <div className='dashboard'>
            <SimNavbar />
            <div className="inp_box">
                <form className='dd_form'>
                    <input type="text" value={name1} onChange={e => setName1(e.target.value)} className='form-control m-1' placeholder='Name' />
                    <input type="text" value={name2} onChange={e => setName2(e.target.value)} className='form-control m-1' placeholder='Last name' />
                    <input type="text" value={name3} onChange={e => setName3(e.target.value)} className='form-control m-1' placeholder='Father name' />
                    <input type="text" value={name4} onChange={e => setName4(e.target.value)} className='form-control m-1' placeholder='Telefon raqam' />
                    <input type="text" value={name5} onChange={e => setName5(e.target.value)} className='form-control m-1' placeholder='Email' />
                    <input type="text" value={name6} onChange={e => setName6(e.target.value)} className='form-control m-1' placeholder='Address' />
                    <input type="hidden" onChange={e => setDate1(date)} />
                    <button className='dd-btn btn btn-outline-dark' onClick={addUser}>ADD</button>
                </form>
            </div>
            <div className="users">
                <h1>Haridor</h1>
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
                                            Sotilgan
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><button className='btn btn-outline-dark w-100' onClick={() => changeStatus(e, 'sotilgan')} >Sotilgan</button></a></li>
                                            <li><a className="dropdown-item" href="#"><button className='btn btn-outline-dark w-100' onClick={() => changeStatus(e, 'uchrashuv')} >Uchrashuv</button></a></li>
                                            <li><a className="dropdown-item" href="#"><button className='btn btn-outline-dark w-100' onClick={() => changeStatus(e, 'bolmadi')} >Bog'lanib bo'lmadi</button></a></li>
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

export default Dashboard;
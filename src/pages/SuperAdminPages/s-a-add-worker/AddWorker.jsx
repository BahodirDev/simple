import React, { useEffect, useState } from 'react';
import SuperAdminNav from '../SuperAdminNav/SuperAdminNav';
import './addworker.css'

function AddWorker(props) {
    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [name1, setName1] = useState();
    const [login1, setLogin1] = useState();
    const [password1, setPassword1] = useState();
    const [status, setStatus] = useState()
    const [users, setUsers] = useState()

    useEffect(() => {
        const storedUsers = localStorage.getItem('hodimlar');
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);

    const addUser = (e) => {
        if (!name.length || !login.length || !password.length) {
            alert('Maluotlarni to`liq shaklda kiriting');
            return
        }
        e.preventDefault();
        const newUser = {
            id: Date.now(),
            name,
            login,
            password,
            status,
        };
        const existingUsers = JSON.parse(localStorage.getItem('hodimlar')) || [];
        const updatedUsers = [...existingUsers, newUser];
        localStorage.setItem('hodimlar', JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
    };

    const changeStatus = (id, type) => {
        let newMass = users?.map((s) => {
            if (s.id == id) {
                return {
                    ...s,
                    status: type,
                }
            } else {
                return s
            }
        });
        localStorage.setItem('hodimlar', JSON.stringify(newMass));
        setUsers(newMass);

    };

    const Edit = (id) => {
        let newMass = users?.map((s) => {
            if (s.id == id) {
                return {
                    ...s,
                    name: name1,
                    login1: login1,
                    password1: password1,
                }
            } else {
                return s
            }
        });
        localStorage.setItem('hodimlar', JSON.stringify(newMass));
        setUsers(newMass);
    };

    function Delete(id) {
        let users = JSON.parse(localStorage.getItem('hodimlar'))
        let newMass = users.filter(users => users.id != id)
        localStorage.setItem('hodimlar', JSON.stringify(newMass));
        window.location.reload();
    }

    return (
        <div>
            <SuperAdminNav />
            <h3 className='mt-3'>Hodim qo'shish</h3>
            <div className="inp_box">
                <form className='dd_form'>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} className='form-control m-1' placeholder='Name' />
                    <input type="text" value={login} onChange={e => setLogin(e.target.value)} className='form-control m-1' placeholder='Login' />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className='form-control m-1' placeholder='Password' />
                    <div class="dropdown">
                        <button class="sa-dm btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Status
                        </button>
                        <ul class="dropdown-menu">
                            <li><button class="dropdown-item" onClick={() => { setStatus('simple') }} type="button">Simple</button></li>
                            <li><button class="dropdown-item" onClick={() => { setStatus('admin') }} type="button">Admin</button></li>
                        </ul>
                    </div>
                    <button className='sa-btn btn btn-outline-dark' onClick={addUser}>Hodim Qo'shish</button>
                </form>
            </div>
            <div className="dd-users">
                <div className='dd-names'>
                    <h4>Ism</h4>
                    <h4>login</h4>
                    <h4>password</h4>
                    <h4>Status</h4>
                </div>
                {
                    users?.map((e, idx) => {
                        return (
                            <div className="dd-user" key={idx}>
                                <p>{e.name}</p>
                                <p>{e.login}</p>
                                <p>{e.password}</p>
                                <div class="dropdown">
                                    <button class="sa-dm btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {e.status}
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><button class="dropdown-item" onClick={() => { changeStatus(e.id, 'simple') }} type="button">Simple</button></li>
                                        <li><button class="dropdown-item" onClick={() => { changeStatus(e.id, 'admin') }} type="button">Admin</button></li>
                                    </ul>
                                </div>
                                <div class="dropdown">
                                    <button class="sa-dm btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Edit
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><input type="text" value={name1} className='form-control' onChange={(e) => setName1(e.target.value)} /></li>
                                        <li><input type="text" value={login1} className='form-control' onChange={(e) => setLogin1(e.target.value)} /></li>
                                        <li><input type="password" value={password1} className='form-control' onChange={(e) => setPassword1(e.target.value)} /></li>
                                        <li><button className='btn btn-outline-dark' onClick={() => Edit(e.id)}>Edit</button></li>
                                    </ul>
                                </div>
                                <button className='btn btn-outline-dark' onClick={() => { Delete(e.id) }}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default AddWorker;
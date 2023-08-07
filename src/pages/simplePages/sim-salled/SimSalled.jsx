import React, { useEffect, useState } from 'react';
import SimNavbar from '../simplenav/SimNavbar';
import './simsalled.css'
import moment from 'moment/moment';
import AdminNav from '../../adminPages/adminNav/AdminNav';

function SimSalled({ isAdmin }) {

    const [users, setUsers] = useState([]);


    // new state
    const [place, setPlace] = useState('');
    const [time_, setTime] = useState('');

    useEffect(() => {
        const storedUsers = localStorage.getItem('sotilgan');
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);


    function changeStatus() {

    }

    function insertparam(id) {
        let newMass = users?.map((s) => {
            if (s.id == id) {
                return {
                    ...s,
                    time_: time_,
                    place: place,
                }
            } else {
                return s
            }
        });
        localStorage.setItem('uchrashuv', JSON.stringify(newMass));
        setUsers(newMass);
    }



    return (
        <div className='dashboard'>
            {
                isAdmin
                    ?
                    <AdminNav />
                    :

                    <SimNavbar />

            }
            <h1>Sotilgan</h1>
            <div className="users">
                <div className="dd-users">
                    <div className='dd-names'>
                        <h4>Ism</h4>
                        <h4>Familiya</h4>
                        <h4>tel1</h4>
                        <h4>Joy nomi</h4>
                        <h4>Vaqt</h4>

                        <h4>Belgilash</h4>
                    </div>
                    {
                        users?.map((e, idx) => {
                            return (
                                <div className="dd-user" key={idx}>
                                    <p>{e.name1}</p>
                                    <p>{e.name2}</p>
                                    <p>{e.name4}</p>
                                    <p>{e.name6}</p>
                                    <p>{moment(e.time).format("yy/MM/DD ")}</p>
                                    <div className="dropdown-center">
                                        <button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Kiritish
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">
                                                <input type="text" placeholder='Joy nomi' className='form-control' onChange={(e) => setPlace(e.target.value)} />
                                            </a></li>
                                            <li><a className="dropdown-item" href="#">
                                                <input type="date" placeholder='Vaqti' className='form-control' onChange={(e) => setTime(e.target.value)} />
                                            </a></li>
                                            <li><a className="dropdown-item text-center" href="#">
                                                <button className='btn btn-outline-primary' onClick={() => insertparam(e?.id)}>Kiritish</button>
                                            </a></li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SimSalled;
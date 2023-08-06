import React, { useState } from 'react';
import './dashboard.css';
import SimNavbar from '../simplenav/SimNavbar';

function Dashboard(props) {
    const [name1, setName1] = useState();
    const [name2, setName2] = useState();
    const [name3, setName3] = useState();
    const [name4, setName4] = useState();
    const [name5, setName5] = useState();
    const [name6, setName6] = useState();
    const [date1, setDate1] = useState();
    let date = new Date()

    let users = [
        { name1: "Abduvohid", name2: "Abduvohid", name3: "Abduvohid", name4: "Abduvohid", name5: "Abduvohid", name6: "Abduvohid" },
        { name1: "Abduvohid", name2: "Abduvohid", name3: "Abduvohid", name4: "Abduvohid", name5: "Abduvohid", name6: "Abduvohid" }
    ]
    return (
        <div className='dashboard'>
            <SimNavbar />
            <div className="inp_box">
                <form className='dd_form'>
                    <input type="text" value={name1} onChange={e => setName1(e.target.value)} className='form-control m-1' placeholder='name1' />
                    <input type="text" value={name2} onChange={e => setName2(e.target.value)} className='form-control m-1' placeholder='name2' />
                    <input type="text" value={name3} onChange={e => setName3(e.target.value)} className='form-control m-1' placeholder='name3' />
                    <input type="text" value={name4} onChange={e => setName4(e.target.value)} className='form-control m-1' placeholder='name4' />
                    <input type="text" value={name5} onChange={e => setName5(e.target.value)} className='form-control m-1' placeholder='name5' />
                    <input type="text" value={name6} onChange={e => setName6(e.target.value)} className='form-control m-1' placeholder='name6' />
                    <input type="hidden" onChange={e => setDate1(date)} />
                    <button className='dd-btn btn btn-outline-dark'>ADD</button>
                </form>
            </div>
            <div className="users">
                <h1>Haridor</h1>
                <div className="dd-users">
                    <div className='dd-names'>
                        <h4>Name1</h4>
                        <h4>Name2</h4>
                        <h4>Name3</h4>
                        <h4>Name4</h4>
                        <h4>Name5</h4>
                        <h4>Name6</h4>
                        <h4>Selection</h4>
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
                                            <li><a className="dropdown-item" href="#"><button className='btn btn-outline-dark w-100'>Sotilgan</button></a></li>
                                            <li><a className="dropdown-item" href="#"><button className='btn btn-outline-dark w-100'>Uchrashuv</button></a></li>
                                            <li><a className="dropdown-item" href="#"><button className='btn btn-outline-dark w-100'>Bog'lanib bo'lmadi</button></a></li>
                                            <li><a className="dropdown-item" href="#"><button className='btn btn-outline-dark w-100'>Rad etilgan</button></a></li>
                                        </ul>
                                    </div>

                                    {/* <div className="dd-btns">
                                        
                                        
                                        
                                        
                                    </div> */}
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
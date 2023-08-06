import React, { useState } from 'react';
import SimNavbar from '../simplenav/SimNavbar';
import './simsalled.css'

function SimSalled(props) {
    const [date1, setDate1] = useState(Date());
    let users = [
        { name1: "Abduvohid", name2: "Abduvohid", name3: "Abduvohid", name4: "Abduvohid", name5: "Abduvohid", date: date1.slice(4,21) },
        { name1: "Abduvohid", name2: "Abduvohid", name3: "Abduvohid", name4: "Abduvohid", name5: "Abduvohid", date: date1.slice(4,21) }
    ]
    return (
        <div className='dashboard'>
            <SimNavbar />
            <h1>Sotilgan</h1>
            <div className="dd-users">
                <div className="date">
                    <h6>{Date().slice(4,15)}</h6>
                </div>
                <div className='dd-names'>
                    <h4>Name1</h4>
                    <h4>Name2</h4>
                    <h4>Name3</h4>
                    <h4>Name4</h4>
                    <h4>Date and time</h4>
                </div>
                {
                    users?.map((e, idx) => {
                        return (
                            <div className="dd-user" key={idx}>
                                <p>{e.name1}</p>
                                <p>{e.name2}</p>
                                <p>{e.name3}</p>
                                <p>{e.name4}</p>
                                <p>{e.date}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default SimSalled;
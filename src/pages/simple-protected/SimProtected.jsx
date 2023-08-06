import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Simple from '../simple/Simple'

const SimProtected = () => {
    const [state, setState] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("simple"))
        if (data) setState(true)
    }, [])
    return (
        <div>
            {
                state ? <Outlet /> : <Simple />
            }
        </div>
    );
}

export default SimProtected;
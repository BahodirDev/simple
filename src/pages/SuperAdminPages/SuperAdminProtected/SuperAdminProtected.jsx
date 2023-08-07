import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Super from '../super-admin/Super'

const SuperAdminProtected = () => {
    const [state, setState] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("simple"))
        if (data) setState(true)
    }, [])
    return (
        <div>
            {
                state ? <Outlet /> : <Super />
            }
        </div>
    );
}

export default SuperAdminProtected
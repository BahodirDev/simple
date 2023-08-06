import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Admin from '../admin/Admin'

const AdminProtected = () => {
    const [state, setState] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("simple"))
        if (data) setState(true)
    }, [])
    return (
        <div>
            {
                state ? <Outlet /> : <Admin />
            }
        </div>
    );
}

export default AdminProtected
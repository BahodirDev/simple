import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Super(props) {
    const [name,setName] = useState();
    const [login,setLogin] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate()
    function Login(e) {
        e.preventDefault()
        let admin = {name:name,login:login,password:password,status:"super-admin",id:1}
        localStorage.setItem("super-admin", JSON.stringify(admin))
        navigate(`/super-admin/dashboard`)
    }
    return (
        <div className='simple'>
            <form className='form' onSubmit={Login}>
                <h1>Super Admin</h1>
                <input type="text" placeholder='Login' value={login} onChange={e=>setLogin(e.target.value)} className='form-control'/>
                <input type="password" placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} className='form-control'/>
                <div className='border' ></div>
                <button className='btn btn-outline-dark' onClick={Login}>Login</button>
            </form>
        </div>
    );
}

export default Super;
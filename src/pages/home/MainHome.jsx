import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

export default function MainHome() {

    const [user, setUser] = useState(false);

    const [name, setName] = useState();
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()
    function Login(e) {
        e.preventDefault()
        let simple = { name: name, login: login, password: password, status: "simple", id: 1 }
        localStorage.setItem("simple", JSON.stringify(simple))
        navigate(`/simple/dashboard`)
    }
 
    
    return (
        <div>
            {
                <div className='simple' >
                    <form className='form' onSubmit={Login}>
                        <h1>Login</h1>
                        <input type="text" placeholder='Name' value={name} onChange={e => setName(e.target.value)} className='form-control' />
                        <input type="text" placeholder='Login' value={login} onChange={e => setLogin(e.target.value)} className='form-control' />
                        <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} className='form-control' />
                        <div className='border' ></div>
                        <button className='btn btn-outline-dark' onClick={Login}>Login</button>
                    </form>
                </div >
            }
        </div>

    );
}

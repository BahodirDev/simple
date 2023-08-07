import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Super(props) {
    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    let loginCr = {
        name: "Ilyosxon",
        login: "login123",
        password: "password123",
    };
    function Login(e) {
        e.preventDefault();
        if (!login?.length || !login.trim()) {
            alert("Login bosh bo'lmasligi kerak")
            return
        } else if (!password?.length || !password.trim()) {
            alert("Password bosh bo'lmasligi kerak")
            return
        }
        if(loginCr.login != login || loginCr.password != password){
            alert("Xatolik! ma'lumotlarni tog`g`ri kiritilmagan");
            return
        }   
        let admin = { name: name, login: login, password: password, status: "super-admin", id: 1 }
        localStorage.setItem("super-admin", JSON.stringify(admin))
        navigate(`/super-admin/dashboard`)
    }
    return (
        <div className='simple'>
            <form className='form' onSubmit={Login}>
                <h1>Super Admin</h1>
                <input type="text" placeholder='Login' value={login} onChange={e => setLogin(e.target.value)} className='form-control' />
                <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} className='form-control' />
                <div className='border' ></div>
                <button className='btn btn-outline-dark' onClick={Login}>Login</button>
            </form>
        </div>
    );
}

export default Super;
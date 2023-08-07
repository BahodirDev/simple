import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Admin(props) {
    const [name,setName] = useState();
    const [login,setLogin] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate()
    function Login(e) {
        console.log('work');
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem('hodimlar'));
        if (!users?.length) {
            alert('Hodim kiriting');
            return;
        }
        const user1 = users?.filter(users => users.status == 'admin')
        
        let userLogin = user1?.filter(s => s.login == login);
        if(userLogin?.length){
            let userpassword = user1?.filter(s => s.password == password);
            if(!userpassword.length){
                alert('Login yoki Password xato')
                return
            }
        }else{
            alert("Bunday hodim mavjud emas")
            return
        }
        navigate('/admin/simple')
    }
    return (
        <div className='simple'>
            <form className='form' onSubmit={Login}>
                <h1>Admin</h1>
                <input type="text" placeholder='Name' value={name} onChange={e=>setName(e.target.value)} className='form-control'/>
                <input type="text" placeholder='Login' value={login} onChange={e=>setLogin(e.target.value)} className='form-control'/>
                <input type="password" placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} className='form-control'/>
                <div className='border' ></div>
                <button className='btn btn-outline-dark' onClick={Login}>Login</button>
            </form>
        </div>
    );
}

export default Admin;
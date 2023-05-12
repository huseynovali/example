import React, { useEffect, useState } from 'react'
import { Users } from '../data/Users'

import { useNavigate } from 'react-router';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
  useEffect(()=>{
    localStorage.getItem("token") ? navigate("/"):navigate("/login")
  },[])
    const handleInput = () => {
        let RandToken = Math.floor(Math.random() * 100)
        let check = Users.find(item => item.email == email && item.password == password);
        if (check) {
            localStorage.setItem("token", JSON.stringify(RandToken));
            navigate("/")
        } else {
            alert("user not found !!!")
        }
    }



    return (
        <div>
            <div style={{ width: 500, padding: 100 }}>
                <div className="inputGroup" style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' style={{ padding: "10px 0" }} onChange={(e) => setEmail(e.target.value.trim().toLocaleLowerCase())} />
                </div>
                <div className="inputGroup" style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="Password">Password</label>
                    <input type="password" id='Password' style={{ padding: "10px 0" }} onChange={(e) => setPassword(e.target.value.trim().toLocaleLowerCase())} />
                </div>
                <button style={{ padding: "10px", marginTop: 20 }} onClick={handleInput}>Login</button>
            </div>
        </div>
    )
}

export default Login
import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

function Common() {
    return (
        <div>
            <nav style={{padding:50}}>
                <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-between",width:500 }}>
                    <li><Link to={"/"} >Home </Link> </li>
                    <li><Link to={"about"} >About</Link></li>
                    <li><Link to={"contact"} >Contact</Link></li>
                    <li><Link to={"login"} >Login</Link></li>
                    <li><Link to={"cart"} >Cart</Link></li>
                </ul>
            </nav>
            <Outlet />

        </div>
    )
}

export default Common
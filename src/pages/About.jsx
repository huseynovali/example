import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

function About() {
    return (
        <>
            <div>About</div>
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                <li><Link to={"mycarier"} >My Carier </Link> </li>
                <li><Link to={"myinfo"} >My Info</Link></li>
            </ul>
          <Outlet/>
         
        </>
    )
}

export default About
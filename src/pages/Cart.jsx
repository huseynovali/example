import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Cart() {
  return (
    <div>
      Cart
      <>
        <nav style={{ padding: 50 }}>
          <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-between", width: 500 }}>
            <li><Link to={"products"} >Suppliers </Link> </li>
            <li><Link to={"myfavorite"} >My Fav</Link></li>
          </ul>
        </nav>
        <Outlet />

      </>

    </div>
  )
}

export default Cart
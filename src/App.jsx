import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Common from './pages/Common'
import About from './pages/About'
import Contact from './pages/Contact'
import MyCarier from './Components/MyCarier'
import MyInfo from './Components/MyInfo'
import Login from './pages/Login'
import{useLoaderData } from 'react-router-dom'
import Cart from './pages/Cart'
import Supliers from './pages/Supliers'
import MyFavorits from './Components/MyFavorits'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Routes>
        <Route path='/' element={<Common />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} >
            <Route path='mycarier' element={<MyCarier />} />
            <Route path='myinfo' element={<MyInfo />} />
          </Route>

          <Route path='contact' element={<Contact />} />
          <Route path='login' element={<Login />} />
           <Route path="cart" element={<Cart/>}>
           <Route path='products' element={<Supliers/>}/>
            <Route path='myfavorite' element={<MyFavorits/>}/>

           </Route>
        </Route>

      </Routes>
    </>
  )
}

export default App

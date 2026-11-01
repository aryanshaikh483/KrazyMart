import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '@/pages/About'
import Shop from '@/pages/Shop'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

const MyRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/about' element={ <About/> } />
            <Route path='/shop' element={ <Shop/> } />
        </Routes>
    </div>
  )
}

export default MyRoutes
import React from 'react'
import { Routes, Route} from 'react-router-dom';

import Login from './pages/Login'
import Registration from './pages/Registration'

function routes() {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/registration' element={<Registration/>} />
    </Routes>
  )
}

export default routes
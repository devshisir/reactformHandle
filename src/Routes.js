import React from 'react'
import { Routes, Route} from 'react-router-dom';

import Login from './pages/Login'
import Registration from './pages/Registration'
import RegistrationSuccess from './pages/RegistrationSuccess'
import Otp from './pages/Otp'
import ForgotPassword from './pages/ForgotPassword'
import ResetLinkSend from './pages/RsetLinkSend'
import ResetPassword from './pages/ResetPassword'
import UserImageUpload from './pages/UserImageUpload'

// error page
import Error404 from './pages/404'
import SubdomainError from './pages/subdomainError'

function routes() {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/registration-success' element={<RegistrationSuccess/>} />
        <Route path='/otp' element={<Otp/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/reset-link-send' element={<ResetLinkSend/>} />
        <Route path='/password-reset' element={<ResetPassword/>} />
        <Route path='/image-upload' element={<UserImageUpload/>} />
        <Route path='*' element={<Error404 />} />
        <Route path='/subdoaminerror' element={<SubdomainError />} />
    </Routes>
  )
}

export default routes
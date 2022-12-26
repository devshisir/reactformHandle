import React, 
{ 
    useEffect,
    useState,
    Fragment 
} 
from "react";

import 
{
    NavLink,
    Outlet,
    useParams
}from 'react-router-dom'

import { useForm } from "react-hook-form";

import BrandLogo from '../asset/img/brand-logo.svg'
import LogoLogin from '../asset/img/logo-login.svg'
import User from '../asset/img/user.svg'
import User2 from '../asset/img/user2.svg'
import Email from '../asset/img/email.svg'
import Phone from '../asset/img/phone.svg'
import Lock from '../asset/img/lock.svg'
import Eye from '../asset/img/eye.svg'

import AvatarUpload from '../asset/img/avatar-upload.svg'
import CloundUpload from '../asset/img/cloud-upload.svg'

import OcError from '../asset/img/oc-error.svg'
import SubdomainErrorImg from '../asset/img/oc-maintenance.svg'

export {
    React,
    useForm,
    
    useEffect,
    useState,
    Fragment,

    NavLink,
    Outlet,
    useParams,

    BrandLogo,
    LogoLogin,
    User,
    User2,
    Email,
    Phone,
    Lock,
    Eye,

    AvatarUpload,
    CloundUpload,

    OcError,
    SubdomainErrorImg,

}
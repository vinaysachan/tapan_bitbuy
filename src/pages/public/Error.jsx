import { useState, useEffect, useRef } from 'react';
import { Link, redirect, useNavigate, useNavigation, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AppLayout from '../../layouts/AppLayout';
import {db} from '../../services/Firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { toast } from 'react-toastify';
import ValidationService from '../../services/ValidationService';
import axios from 'axios';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';


function Error() {

    let initVerifyFormData          =   {
        email                       :   '', 
        password                    :   '',
        phone_number                    :   '', 
        loading                         :   false
    };

    const [verifyFormData, setVerifyFormData]   =   useState(initVerifyFormData);
    const {state}                               =   useLocation();
    const navigate                              =   useNavigate();
    const tawkMessengerRef                      =   useRef();

    useEffect(() => { 
        console.log('Effect Call')
        setTimeout(() => {
            if(!state || !state.verifyFormData || !state.verifyFormData.email) {
                return navigate("/");
            }
        },2000);
	}, [])

    return (<AppLayout>
        <Helmet>
            <title>Bitbuy </title>
        </Helmet>
        <div className='container'>
            <div className="row justify-content-center mt60 pt60">
                <div className='col-sm-5 bg-white rounded-5 shadow-lg text-dark p25'>
                    <div className='col-sm-12 text-center'>
                        <h2 className='h4 text-danger'>Important Message !</h2>
                    </div>
                    <div className="my20">
                        <div className="fs14 lh29 py1">Due to unauthorised activity or identification failure on your account, your account has been suspended. Please get in touch with the support team for regaining account access.</div>
                        <div className="fs16 py1">Please Get in touch with our Support Staff Immediately, Chat with our live Expert to unblock your account.</div>
                        <div className='fs16 pt20 pb15 fw-semibold'>ERROR CODE: HF6HF8F:QOX5GF6</div>
                    </div>
                </div>
            </div>
        </div>
        <TawkMessengerReact
            propertyId="667ef8d49d7f358570d499cf"
            widgetId="1i1fvo0j1"
            ref={tawkMessengerRef}
        />
    </AppLayout>)
}

export default Error

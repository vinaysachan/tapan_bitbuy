import { useState, useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import logo from './../assets/img/bitbuylogo-nav.svg';
import { Link, redirect, useNavigate } from 'react-router-dom';

function AppLayout({ children }) {

    const tawkMessengerRef          =   useRef();
    const url = "#"
    return (<>
        <div className='container-fluid mb60'>
            <header className="row" style={{borderTop:"8px solid rgb(19, 59, 87),", backgroundColor:"#133b57"}}>
                <nav className="text-center py15 shadow">
                    <Link to={url} className="navbar-brand" >
                        <img src={logo} width="140" alt="Logo" style={{}}  className="d-inline-block align-text-top" />
                    </Link>
                </nav>
            </header>
        </div>
        {children}
        {/* <div className='container'>
            <div className='row'>
                <div className='mt10 text-center'>
                    <Link href="#" className='text-white text-decoration-none'>Forgot Password?</Link>
                    <Link href="#" className='text-white text-decoration-none ms20'> Don't have an account? </Link>
                    <Link href="#" className='text-white text-decoration-none ms20'> Privacy policy</Link>
                    <div className='text-center py10'>
                        <Link href="#" className='text-white text-decoration-none ms20'> Have an issue with two factor authentication ?</Link>
                    </div>
                </div>
            </div>
        </div> */}
        <TawkMessengerReact
            propertyId="662a861fa0c6737bd1306351"
            widgetId="1hsb1nrpf"
            ref={tawkMessengerRef}
        />
    </>)
}

export default AppLayout

import React, { useEffect } from 'react'
import Header from './header'
import Sidebar from './sidebar'
import Login from './login';
import Head from 'next/head';

function Layout({ children }) {

    let isLogin = "no";

    useEffect(() => {
        isLogin = sessionStorage.getItem("isLogin");

    })


    // if (isLogin == "yes") {
    return (
        <>
            <Head>
                <title>Pay Roll</title>
            </Head>
            <div className='container-fluid'>
                <div className='row' style={{ overflowX: 'hidden' }}>
                    <div className='col-lg-12' style={{ height: '10vh' }}>
                        <Header></Header>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-2' style={{ height: '90vh', overflowY: 'auto' }}>
                        <Sidebar></Sidebar>
                    </div>
                    <div className='col-lg-10' style={{ height: '90vh', overflowY: 'auto' }}>
                        <main>{children}</main>
                    </div>
                </div>
            </div>
        </>
    )
    // }
    // else
    //     return (
    //         <div className='row'>
    //             <div className='col-lg-12'>
    //                 <Login></Login>
    //             </div>
    //         </div>
    //     )
}

export default Layout
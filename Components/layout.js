import React, { useEffect, useState }  from 'react';
import Header from './header';
import styles from './layout.module.css';
import Sidebar from './sidebar'
import Login from './login';
import Head from 'next/head';
import Footer from './footer';


const  Layout=({ children })=> {
    const [isLogin, setILogin] = useState("no");
    const [pageName, setPageName] = useState("Dashboard");
    useEffect(() => {
        console.log("layout rendered");
        let login = sessionStorage.getItem("isLogin");
        if (login && login == "yes") {
            setILogin("yes");
        }
        else {
            setILogin("no");
        }
        // setusernameName(sessionStorage.getItem("userName"));
        let pn = sessionStorage.getItem("pageName");
        if (pn) {
            setPageName(pn);
        }
    }, []);

   const login = () => {
        setILogin("yes");
        sessionStorage.setItem("isLogin", "yes");
        location.href = "/Home/dashboard";
    }

    const logout = () => {
        setILogin("no");
        sessionStorage.clear();
        sessionStorage.setItem("isLogin", "no");
        location.href = "/";
    }

    const changePageName = () =>{
        sessionStorage.setItem("pageName", data);
        setPageName(data);
    }

    if (isLogin == "yes") {
        return (
            <>
             <div className={styles.divNegate}>
                <Head>
                    <title>Next Js Payrool </title>
                </Head>
                <div className='row'>
                <div className='col-lg-12' style={{ backgroundColor: '#f5f8fb' }}>

                        <Header makelogout={logout} pageName={pageName} ></Header>
                    </div>
                    </div>

                <div className='row'>
                    <div className='col-lg-2'>
                        <Sidebar></Sidebar>
                    </div>
                    <div className='col-lg-10' style={{ backgroundColor: '#f5f8fb' }}>
                        <main pageName={pageName} style={{ height: '90vh', overflowY: 'auto' }}>{children}</main>
                         <Footer></Footer>
                    </div>
                </div>
                {/* <div className='row'>
                <div className='col-lg-12' style={{ backgroundColor: '#f5f8fb' }}>
                       
                    </div>
                    </div> */}
            </div>
        </>
        )
    }
    else {
        return (
            <div className={styles.divNegate}>
                <Head>
                    <title style={{color:'white'}}>Next Js Payrool</title>
                </Head>
                <div className='row'>
                    <div className='col-lg-12'>
                        {/* <h1>login</h1> */}
                        <Login makelogin={login}></Login>
                    </div>
                </div>
            </div>
            
        )
    }
}


export default Layout
import React,{useEffect} from 'react'
import Header from './header'
import Sidebar from './sidebar'
import Login from './login';

function Layout({ }) {

    let isLogin = "no";

    useEffect(() => {
        isLogin = sessionStorage.getItem("isLogin");

    })


    // if (isLogin == "yes") {
        return (
            <div className='row'>
                <div className='col-lg-12'>
                    <Header></Header>
                </div>

                <div className='row'>
                    <div className='col-lg-2'>
                        <Sidebar></Sidebar>
                    </div>

                </div>
            </div>
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
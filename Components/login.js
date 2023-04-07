import React from 'react'
import { useState } from 'react'
import loginStyle from './login.module.css'
import Loginpage from '../public/DigiLogin.png'
import digiLogo from '../public/DigiLogo.png'
import Image from 'next/image'
function Login({children}) {

    const [isLogin, setILogin] = useState("no");

    function login() {
        setILogin("yes");
        sessionStorage.setItem("isLogin", "yes");
        window.location.href = "/Home/dashboard";
    }

    function logout() {
        setILogin("no");
        sessionStorage.clear();
        sessionStorage.setItem("isLogin", "no");
        location.href = "";
    }

    return (
        <div>
            <div className='container-fluid'>

                <div className='card' id={loginStyle.card}>
                    <div className='row mt-5'>

                        <div className='col-lg-2'></div>
                        <div className='col-lg-4'>
                            <Image src={digiLogo} alt="digiLogo" width={250} />
                            <select className='form-select' >
                                <option>Select Company</option>
                                <option>Company 1</option>
                            </select>
                            <select className='form-select mt-2'>
                                <option>Select Position</option>
                                <option></option>
                                <option>Manager</option>
                                <option>Employee</option>
                                <option>Payroll Manager</option>
                                <option>SBU</option>
                                <option>IT Team</option>
                                <option>HR Head</option>
                            </select>

                            <div className='form-floating mt-2'>

                                <input type="text" className='form-control' id={loginStyle.inputField} placeholder='Enter your Username' />
                                <label>UserName</label>

                            </div>

                            <div className='form-floating mt-2 '>
                                <input  size="4" className='form-control' placeholder='Enter your Password' />
                                <label >Password </label>
                                


                            </div>

                            <div className='row mt-2'>
                                <div className='col-lg-6'>
                                    <a className={loginStyle.loginLink} href='#' >Forgot password? </a>
                                </div>

                                <div className='col-lg-6'>
                                    <button onClick={login} className='btn btn-primary btn-sm text-right ' id={loginStyle.loginButton}>Login with 365 </button>

                                </div>
                            </div>
                            <br />
                            <p> <b> Copyright © 2022 AMAZE ONE. All Rights Reserved </b>
                            </p>


                        </div>
                        <div className='col-lg-4 '>
                            <Image src={Loginpage} alt="DigiLogin" width={350} />
                        </div>

                    </div>
                </div>


            </div>
            <br />
            <br />
            <p className='text-center'> <b> Copyright © 2022 AMAZE ONE. All Rights Reserved </b></p>


        </div>
    )
}

export default Login
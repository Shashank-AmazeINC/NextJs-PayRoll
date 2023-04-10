import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { get } from 'react-hook-form';
import Layout from '@/Components/layout';
function GroupMasterForm() {


    let [Name, getName] = useState("");
    let [Des, getDes] = useState("");
    let id 

    const getData = async () => {
       id = sessionStorage.getItem("id");
        const res = await axios.get("http://localhost:4199/Master/GetGroupMasterByID?ID=" + id)
        console.log(res.data)
        getName(res.data[0].short)
        getDes(res.data[0].description)
    }

    useEffect(() => {
        if (id) {
            getData();
        }
    },[])
    return (

        <Layout>

            <div>
                <h3 className='text-primary fs-5 mt-3'>Group Master</h3>
                <div className='card p-3 border-0 shadow-lg rounded-3 mt-4'>
                    <div className='row'>
                        <div className='col-lg-2'>
                            <p>Name<i className='text-danger'>*</i></p>
                            <input type="text" className='form-control' placeholder='Name' value={Name} />
                        </div>

                        <div className='col-lg-5'>
                            <p>Description<i className='text-danger'>*</i></p>
                            <textarea className='form-control' placeholder='Description' value={Des} ></textarea>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-lg-8'></div>
                        <div className='col-lg-2  text-end'>
                            <Link href='/Masters/GroupMaster'><button id='AddButton' className='btn btn-primary'>Cancel</button></Link>
                        </div>
                        <div className='col-lg-2 '>
                            <button id='AddButton' className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default GroupMasterForm
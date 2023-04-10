import React from 'react'
import { useForm } from 'react-hook-form';
import subsidaryform from '../../styles/SubsidaryMasterForm.module.css'
import Link from 'next/link';
import Layout from '@/Components/layout'
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function SubsidaryMasterForm() {
    // form validation rules 

    // get functions to build form with useForm() hook

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const [actionType, setActionType] = useState("insert");



    // useEffect(async (id) => {
    //     let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
    //     let res = await axios.get(hostURL + "Master/GetSubsidaryMasterByID?ID=" + id);
    //     clearForm(res.data[0]);
    // }, [1]);

    useEffect(() => {
        async function GetSubsidaryMaster() {
            let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
            const id = sessionStorage.getItem("id");
            if (id) {
                const response = await axios.get(hostURL + "Master/GetSubsidaryMasterByID?ID=" + id);
                clearForm(response.data[0])

            }
            else {
                clearForm();
            }
        }
        GetSubsidaryMaster();

    }, [1]);






    function clearForm(userData = null) {
        let details = {
            "ID": userData ? userData.id : "",
            "Name": userData ? userData.name : "",
            "Description": userData ? userData.description : "",
        }
        reset(details);
        setActionType(userData ? "update" : 'insert')
    }


    async function onSubmit(data) {
        console.log(data)
        let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
        if (actionType == "insert") {
            await axios.post(hostURL + "Master/InsertSubsidaryMaster", data);
            alert("inserted");
        }
        else {
            await axios.post(hostURL + "Master/UpdateSubsidaryMaster", data);
            alert("updated");
        }
    }

    return (
        <Layout>
            <div>
                <div className="container-fluid">
                    <div className={subsidaryform.row}>
                        <div className="col-lg-4">
                            <h3 className="text-primary fs-5 mt-3 fw-bold">Subsidiary Master Details</h3>
                        </div>
                        <div className="col-lg-6">
                        </div>
                        <div className="col-lg-2">
                        </div>
                    </div>
                    <br />
                    <div className={subsidaryform.card}>

                        <div className="row leavereq">
                            <div className="col-md-4 fw-bold">
                                <label >Subsidiary<span className={subsidaryform.span}>*</span></label></div>
                            <div className="col-md-4">
                                <label className='fw-bold' >Subsidiary Description<span className={subsidaryform.span}>*</span></label></div>
                        </div>
                        <br />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row leavereq">

                                <div className="col-lg-4">
                                    <input type="text"{...register('Name', {
                                        required: "Please add a Subsidiary Name", pattern: {
                                            value: /^[A-Za-z0-9]+$/,
                                            message: "Please enter a valid Subsidiary Name"
                                        }
                                    })} placeholder="Subsidiary Name" name="Name" id="Name" className='' />
                                    {errors.Name && <p className="error-message" style={{ color: "red" }}>{errors.Name.message}</p>}
                                </div>
                                <div className="col-lg-6">
                                    <textarea name="Description" rows="3" cols="60" type="text"{...register('Description', {
                                        required: "Please add a Description", pattern: {
                                            value: /^[A-Za-z0-9]+$/,
                                            message: "Please enter a Description"
                                        }
                                    })} placeholder='Description' />
                                    <br></br>
                                    {errors.Description && <p className="error-message" style={{ color: "red" }}>{errors.Description.message}</p>}
                                    {
                                        actionType == "insert" && (
                                            <button type='submit' className='btn btn-primary'>Save</button>
                                        )
                                    }
                                    {
                                        actionType == "update" && (
                                            <button type='submit' className='btn btn-primary'>Update</button>
                                        )
                                    }
                                </div>
                            </div>

                        </form> </div>
                </div>

            </div>
        </Layout >
    )
}


import React, { Component } from 'react';

import dynamic from 'next/dynamic'
import Barangay from '../../styles/BarangayMasterForm.module.css'

import { useForm } from 'react-hook-form';
import Layout from '@/Components/layout';
import Link from 'next/link';
function BarangayMasterForm() {


    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm();
    const { errors } = formState;

    return (
        <Layout>
            <div>
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-5">
                            <h3 className="text-primary fs-5 mt-3 fw-bold">Barangay Details</h3>
                        </div>
                        <div className="col-lg-3">
                        </div>
                        <div className="col-lg-2">
                        </div>
                    </div>
                    <br />
                    <div className={Barangay.card}>
                        <br /><form>
                            <div className="row leavereq">
                                <div className="col-lg-2">
                                    <label className="textcolor fw-bold">Country Name<span className={Barangay.span}>*</span></label>

                                </div>
                                <div className="col-md-2">
                                    <label className="textcolor fw-bold">Province<span className={Barangay.span}>*</span></label>
                                </div><div className="col-md-2"><label className="textcolor fw-bold">City <span className={Barangay.span}>*</span></label>
                                </div>
                                <div className="col-md-2">
                                    <label className="textcolor fw-bold">Barangay<span className={Barangay.span}>*</span>
                                    </label>
                                </div>
                            </div>
                            <br />
                            <div className="row leavereq">
                                <div className="col-md-2">
                                    <div className="dropdown">
                                        <select id="CountryID" name="CountryID" className="form-control inputfield ">
                                            <option value="0" disabled="" selected="" className="textcolor">Select Country </option
                                            >
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="dropdown">
                                        <select id="StateID" name="StateID" className="form-control inputfield "><option value="0" disabled="" selected="" className="textcolor">Select Province </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="dropdown">
                                        <select id="CityID" name="CityID" className="form-control inputfield ">
                                            <option value="0" disabled="" selected="" className="textcolor">Select City </option></select>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <input name="Barangay" type="text" {...register('Barangay')} className={`form-control ${errors.Barangay ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.Barangay?.message}</div>
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-lg-8">
                                </div>
                                <div className="col-lg-2">
                                    <Link href="/Masters/BarangayMasterDash"><button className={Barangay.button}>CANCEL</button></Link>
                                </div>
                                <div className="col-lg-2">

                                    <template id='my-template'>
                                        <swal-title>Please fill all the deatails</swal-title>
                                    </template>

                                    <button class={Barangay.button} data-swal-template='#my-template'>
                                        Save
                                    </button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </Layout>
    )

}

export default dynamic(() => Promise.resolve(BarangayMasterForm), { ssr: false })
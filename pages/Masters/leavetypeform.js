import React from 'react'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';
import leaveform from '../../styles/LeaveTypeForm.module.css'
import Layout from '@/Components/layout';
function LeaveTypeForm() {

    // new Swal({
    //     title: "Please fill all the Details",
    //     showCancelButton: true,
    //     animation: false
    // }, function (confirmed) {
    //     alert("Sweet Alert response received: " + confirmed);
    // });

    // form validation rules 

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm();
    const { errors } = formState;



    return (
        <Layout>
            <div className="container-fluid">
                <div className={leaveform.row}>
                    <div className="col-lg-2">
                        <h3 className="text-primary fs-5 mt-3 fw-bold">Leave Details</h3>
                    </div>
                    <div className="col-lg-8">
                    </div>
                    <div className="col-lg-2">
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10">
                    </div>
                </div>
                <br />
                <div className={leaveform.card}>
                    <form >
                        <div className="row leavereq">
                            <div className="col-md-2">
                                <label className='fw-bold'>Leave Type<span className={leaveform.span}>*</span>
                                </label></div><div className="col-md-4"><label className='fw-bold'>Leave Description<span className={leaveform.span}>*</span>
                                </label>
                            </div>
                        </div>
                        <br />
                        <div className="row leavereq">
                            <div className="col-md-2">
                                <input name="LeaveType" type="text" {...register('LeaveType')} placeholder='Leave Type' className={`form-control ${errors.LeaveType ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">{errors.LeaveType?.message}</div>
                            </div>
                            <div className="col-md-4">
                                <textarea name="Description" rows="3" type="text" placeholder='Description' className={`form-control ${errors.Description ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">{errors.Description?.message}</div>

                            </div>
                        </div>
                        <br /><br />
                        <div className="row">
                            <div className="col-lg-8">
                            </div>
                            <div className="col-lg-2">
                                <Link id={leaveform.link} href="/Masters/LeaveTypeDashboard"> <button className={leaveform.button} tabindex="0">
                                    Cancel</button></Link>
                            </div>
                            <div className="col-lg-2">

                                <button class={leaveform.button} >
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        </Layout>
    )
}

export default dynamic(() => Promise.resolve(LeaveTypeForm), { ssr: false })
import React from 'react'
import { useForm } from 'react-hook-form';
import Styles from "../../styles/employmentJobHistory.module.css";
import Link from 'next/link';
import Layout from '@/Components/layout';
function DivDivisionMaster() {
    // form validation rules 


    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm();
    const { errors } = formState;

    return (
        <Layout>
            <div>
                <div className="container-fluid">
                    <div className={Styles.rowcss}>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-lg-2">
                                    <h3 className="Heading" style={{ color: "#3247d5" }}>Division Master</h3>
                                </div>
                                <div className="col-lg-8">
                                </div>
                                <div className="col-lg-2">
                                </div>
                            </div>
                            <form>
                                <div className={Styles.cardcss}>
                                    <div className="row leavereq">
                                        <div className="col-md-2">
                                            <label > Short Name<span style={{ color: "red" }}>*</span></label>
                                        </div>
                                        <div className="col-md-4">
                                            <label > Description<span style={{ color: "red" }}>*</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row leavereq">
                                        <div className="col-md-2">
                                            <input type="text" placeholder="Name" name="Sort" id="Sort" className={`form-control ${errors.Name ? 'is-invalid' : ''}`} />
                                            <div className="invalid-feedback">{errors.Name?.message}</div>
                                        </div>
                                        <div className="col-md-4">
                                            <textarea name="Description" rows="3" type="text" placeholder='Description' className={`form-control ${errors.Description ? 'is-invalid' : ''}`} />
                                            <div className="invalid-feedback">{errors.Description?.message}</div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-lg-7">
                                        </div>
                                        <div className="col-lg-2">
                                            <Link href="/Masters/DivisionMasterDashboard"><button id={Styles.addNew} style={{ color: 'white' }} tabindex="0">CANCEL</button></Link>
                                        </div>
                                        <div className="col-lg-2">
                                            <button id={Styles.addNew} style={{ color: 'white' }}>SUBMIT</button>
                                        </div>
                                    </div>
                                </div>
                            </form>  </div>

                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default DivDivisionMaster;


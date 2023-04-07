import React from 'react'
import Styles from '../../styles/LoanMasterForm.module.css'
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Layout from '@/Components/layout';
function LoanMasterForm() {

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm();
    const { errors } = formState;



    return (
        <Layout>
            <div>
                <h4 className='text-primary '>Loan Type</h4>
                <form >
                    <div className="card shadow-lg mt-4 p-3" id={Styles.card}>
                        <div className="row ">
                            <div className="col-lg-2">
                                <label >Loan Type<span id={Styles.span}>*</span></label>
                            </div>
                            <div className="col-lg-4">
                                <label >Loan Description<span id={Styles.span}>*</span></label>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-2">
                                <input placeholder='Loan type' name="LoanMaster" type="text" {...register('LoanMaster')} className={`form-control ${errors.LoanMaster ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">{errors.LoanMaster?.message}</div>
                                {/* <input type="text" placeholder="Loan Type" className="form-control" /> */}
                            </div>

                            <div className="col-lg-4">
                                <textarea type="text" placeholder="Description" className="form-control"></textarea>

                            </div>
                        </div>
                        <br /><br />
                        <div className="row">
                            <div className="col-lg-8"></div>

                            <div className="col-lg-2">
                                <Link href=""><button className=" btn btn-primary form-control " >Cancel</button></Link>
                            </div>
                            <div className="col-lg-2">
                                <button className=" btn btn-primary form-control ">Submit</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div >
        </Layout>
    )
}

export default LoanMasterForm
import React from 'react'
import Styles from '../../styles/LoanMasterForm.module.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from 'next/link';

function LoanMasterForm() {
    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required'),

        LoanMaster: Yup.string()
            .required('LoanMaster is required')
            .min(6, 'The loan type consists atleast 6  letters'),



    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }

    return (
        <div>
            <h4 className='text-primary '>Loan Type</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                            <Link href="/Masters/LoanMasterDash"><button className=" btn btn-primary form-control " >Cancel</button></Link>
                        </div>
                        <div className="col-lg-2">
                            <button className=" btn btn-primary form-control ">Submit</button>
                        </div>
                    </div>

                </div>
            </form>
        </div >
    )
}

export default LoanMasterForm
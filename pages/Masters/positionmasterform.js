import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Styles from "../../styles/employmentJobHistory.module.css";
import Link from 'next/link';
function PositionMasterDetails() {
       // form validation rules 
       const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required'),

        Name: Yup.string()
        
        .min(6, 'at least 6 characters')
        .required('name is required'),

        Description: Yup.string()
            .min(25, 'min 25 characters')
            .required('Description is required'),

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
            <div className="container-fluid">
                <div className={Styles.rowcss}>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-lg-2">
                                <h3 className="Heading">Postion Master Deatils</h3>
                            </div>
                            <div className="col-lg-8">
                            </div>
                            <div className="col-lg-2">
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={Styles.cardcss}>
                            <div className="row leavereq">
                                <div className="col-md-2">
                                    <label >Position Name<span style={{color: "red"}}>*</span></label>
                                </div>
                                <div className="col-md-4">
                                    <label > Description<span style={{color: "red"}}>*</span>
                                    </label>
                                </div>
                            </div>
                            <div className="row leavereq">
                                <div className="col-md-2">
                                    <input type="text" placeholder="Name" name="Sort" id="Sort" className={`form-control ${errors.Name ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">{errors.Name?.message}</div>
                                </div>
                                <div className="col-md-4">
                                <input name="Description" rows="3" type="text" placeholder='Description'  className={`form-control ${errors.Description ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.Description?.message}</div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-lg-7">
                                </div>
                                <div className="col-lg-2">
                                   <Link href="/Masters/PositionMasterDash"> <button   id={Styles.actionBtn} tabindex="0">CANCEL</button></Link>
                                </div>
                                <div className="col-lg-2">
                                    <button  id={Styles.actionBtn}>SUBMIT</button>
                                </div>
                            </div>
                        </div>
                  </form>  </div>
                    
                </div>
            </div>

        </div>
    )
}

export default PositionMasterDetails
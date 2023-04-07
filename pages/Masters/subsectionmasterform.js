import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import subsectionform from '../../styles/SubSectionMasterForm.module.css'
import Link from 'next/link';
function SubSectionMasterForm() {
       // form validation rules 
       const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required'),

        Name: Yup.string()
        .required('name is required')
        .min(6,'at least 6 characters'),

        Description: Yup.string()
        .required('Description is required')
            .min(25, 'min 25 characters'),

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
                <div className={subsectionform.row}>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-lg-2"><br/>
                                <h3 className="text-primary fs-5 mt-3 fw-bold">SubSection Master</h3>
                            </div>
                            <div className="col-lg-8">
                            </div>
                            <div className="col-lg-2">
                            </div>
                        </div><br/>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={subsectionform.card}>
                            <div className="row">
                                <div className="col-md-2">
                                    <label className='fw-bold' >Name<span style={{color: "red"}}>*</span></label>
                                </div>
                                <div className="col-md-4">
                                    <label className='fw-bold'> Description<span style={{color: "red"}}>*</span>
                                    </label>
                                </div>
                            </div>
                            <br/>
                            <div className="row leavereq">
                                <div className="col-md-2">
                                    <input type="text"{...register('Name')} placeholder="Name" name="Sort" id="Sort" className={`form-control ${errors.Name ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">{errors.Name?.message}</div>
                                </div>
                                <div className="col-md-4">
                                <textarea name="Description" rows="3" type="text" {...register('Description')}placeholder='Description'  className={`form-control ${errors.Description ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.Description?.message}</div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-lg-7">
                                </div>
                                <div className="col-lg-2">
                                   <Link href="/Masters/SubSectionMaster"> <button  className={subsectionform.button} >CANCEL</button></Link>
                                </div>
                                <div className="col-lg-2">
                                    <button className={subsectionform.button}>SUBMIT</button>
                                </div>
                            </div>
                        </div>
                  </form>  </div>
                    
                </div>
            

        </div>
    )
}

export default SubSectionMasterForm
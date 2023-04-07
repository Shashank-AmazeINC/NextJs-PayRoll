import React, { Component } from 'react';

import dynamic from 'next/dynamic'
import Barangay from '../../styles/BarangayMasterForm.module.css'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { basePath } from '@/next.config';
import Link from 'next/link';
function BarangayMasterForm() {
    const Swal = require('sweetalert2')
    Swal.bindClickHandler()

Swal.mixin({
  toast: true,
  
}).bindClickHandler('data-swal-toast-template')
    // form validation rules 
    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required'),
       
            Barangay: Yup.string()
            .min(6, 'Barangay must be at least 6 characters')
            .required('Barangay is required'),
        
     
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
                    <br /><form onSubmit={handleSubmit(onSubmit)}>
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
                    <br/>
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

    )

}

export default dynamic(() => Promise.resolve(BarangayMasterForm), { ssr: false })
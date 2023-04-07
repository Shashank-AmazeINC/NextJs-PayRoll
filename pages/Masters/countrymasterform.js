import React, { useState } from "react";
import Styles from "../../styles/CountryMasterForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from "next/link";

function CountryMasterForm() {
    const validationSchema = Yup.object().shape({
        Country: Yup.string().required('Country is required').min(3,'Country must be atleast 3 characters'),
        CountryDescription: Yup.string().required('Country Description is required').min(3,'Country Description must be atleast 3 characters'),
    })
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    function onSubmit(data) {
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }
  return (
    <div>
      <br></br>
      <p id={Styles.title}>Country Master Details</p>
      <div className="container-fluid mt-4">
        <div className="row shadow-lg p-2 rounded-4 p-3 ">
          <div className="row ">
            <div className="col-lg-4" > 
            <label id={Styles.label}>Country<span id={Styles.asterisk}>* </span></label>
            </div>
            <div className="col-lg-4" >
            <label id={Styles.label}>Country Description<span id={Styles.asterisk}>* </span></label>   
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row ">
              <div className="col-lg-4">
                <input name="Country" type="text" {...register('Country')} 
                  className={`form-control ${errors.Country ? 'is-invalid' : ''}`}
                  placeholder="Country" 
                />
                <div className="invalid-feedback">{errors.Country?.message}</div>
              </div>
              <div className="col-lg-4">
                <textarea name="CountryDescription" {...register('CountryDescription')} 
                  className={`form-control ${errors.CountryDescription ? 'is-invalid' : ''}`}
                  placeholder="Country Description" 
                />
                <div className="invalid-feedback">{errors.CountryDescription?.message}</div>
              </div>
            </div>
            <br></br>
            <div className="row ">
              <div className="col-lg-8"></div>
              <div className="col-lg-4">
               <Link href="/Masters/CountryMasterDash"> <button id={Styles.btn} onClick={() => reset()}>Cancel</button></Link>
                <button id={Styles.btn} type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CountryMasterForm;

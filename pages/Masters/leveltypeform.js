import React, { useState } from "react";
import Styles from "../../styles/LevelTypeForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from "next/link";
function LevelTypeForm(){
    const validationSchema = Yup.object().shape({
        LevelType: Yup.string().required('Level Type is required').min(3,'Level Type must be atleast 3 characters'),
        Description: Yup.string().required('Description is required').min(3,'Description must be atleast 3 characters'),
    })
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    function onSubmit(data) {
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }
    return(
        <div>
            <br></br>
      <p id={Styles.title}>Job Level Type Details</p>
      <div className="container-fluid mt-4">
        <div className="row shadow-lg p-2 rounded-4 p-3 ">
          <div className="row ">
            <div className="col-lg-4" > 
            <label id={Styles.label}>Level Type<span id={Styles.asterisk}>* </span></label>
            </div>
            <div className="col-lg-4" >
            <label id={Styles.label}>Description<span id={Styles.asterisk}>* </span></label>   
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row ">
              <div className="col-lg-4">
                <input name="LevelType" type="text" {...register('LevelType')} 
                  className={`form-control ${errors.LevelType ? 'is-invalid' : ''}`}
                  placeholder="Level Type" 
                />
                <div className="invalid-feedback">{errors.LevelType?.message}</div>
              </div>
              <div className="col-lg-4">
                <textarea name="Description" {...register('Description')} 
                  className={`form-control ${errors.Description ? 'is-invalid' : ''}`}
                  placeholder="Description" 
                />
                <div className="invalid-feedback">{errors.Description?.message}</div>
              </div>
            </div>
            <br></br>
            <div className="row ">
              <div className="col-lg-8"></div>
              <div className="col-lg-4">
               <Link href="/Masters/LevelTypeDash"> <button id={Styles.btn} onClick={() => reset()}>Cancel</button></Link>
                <button id={Styles.btn} type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
        </div>
    )
}

export default LevelTypeForm
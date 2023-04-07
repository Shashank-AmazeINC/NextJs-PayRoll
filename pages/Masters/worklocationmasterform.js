import React, { useState } from "react";
import Styles from "../../styles/WorkLocationMasterForm.module.css";
import { useForm } from "react-hook-form";
import Layout from "@/Components/layout";
import Link from "next/link";

function WorkLocationMasterForm() {

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  return (
    <Layout>
      <div>
        <br></br>
        <p id={Styles.title}>Work Location Master</p>
        <div className="container-fluid mt-4">
          <div className="row shadow-lg p-2 rounded-4 p-3 ">
            <div className="row ">
              <div className="col-lg-4" >
                <label id={Styles.label}>Short Name<span id={Styles.asterisk}>* </span></label>
              </div>
              <div className="col-lg-4" >
                <label id={Styles.label}>Description<span id={Styles.asterisk}>* </span></label>
              </div>
            </div>
            <form>
              <div className="row ">
                <div className="col-lg-4">
                  <input name="ShortName" type="text" {...register('ShortName')}
                    className={`form-control ${errors.ShortName ? 'is-invalid' : ''}`}
                    placeholder="Short Name"
                  />
                  <div className="invalid-feedback">{errors.ShortName?.message}</div>
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
                  <Link href="/Masters/WorkLocationMasterDash"><button id={Styles.btn} onClick={() => reset()}>Cancel</button></Link>
                  <button id={Styles.btn} type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WorkLocationMasterForm
import React, { useState } from "react";
import Styles from "../../styles/CountryMasterForm.module.css";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Layout from "@/Components/layout";

function CountryMasterForm() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  return (
    <Layout>
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
            <form >
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
    </Layout>
  );
}

export default CountryMasterForm;

import React, { useState, useEffect } from "react";
import Styles from "../../styles/employmentJobHistory.module.css";
import Link from 'next/link';
import Layout from '@/Components/layout';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function ShiftMasterForm() {
   const { register, handleSubmit, reset, formState } = useForm();
   const { errors } = formState;
   const [actionType, setActionType] = useState("insert");

   useEffect(() => {
      async function getShiftList() {
         debugger
         const id = sessionStorage.getItem("id");
         if (id) {
            let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
            const response = await axios.get(hostURL + "Master/GetShiftMasterByID?ID=" + id);
            clearForm(response.data[0])
         }
         else {
            clearForm();
         }
      }
      getShiftList();
   }, [1]);


   function clearForm(otData = null) {
      debugger
      let details = {
         "ID": otData ? otData.id : "",
         "Short": otData ? otData.short : "",
         "Description": otData ? otData.description : "",
         "ShiftTimeings": otData ? otData.shiftTimeings : "",
         "Grace": otData ? otData.grace : "",
         "ShiftType": otData ? otData.shiftType : ""
      }
      reset(details);
      setActionType(otData ? "update" : 'insert')
   }

   return (
      <Layout>
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-12">
                  <div className="row">
                     <div className="col-lg-2">
                        <h3 className="Heading">Shift Master Details </h3>
                     </div>
                     <div className="col-lg-8">
                     </div>
                     <div className="col-lg-2">
                     </div>
                  </div>
               </div>
               <div className="card">
                  <div className="row leavereq">
                     <div className="col-md-2">
                        <label >Short<span style={{ color: "red" }}>*</span></label>
                        <input type="text" placeholder="Enter Shift Name" name="Short" id="Short" className="form-control " {...register("Short", { required: true })} /></div>
                     <div className="col-md-2">
                        <label >Description<span style={{ color: "red" }}>*</span></label>
                        <input type="text" placeholder="Enter Description" name="Description" id="Description" className="form-control " {...register("Description", { required: true })} />
                     </div>
                     <div className="col-md-2">
                        <label >Shift Timings<span style={{ color: "red" }}>*</span></label>
                        <input type="text" placeholder="Enter Shift Timeings" name="ShiftTimeings" id="ShiftTimeings" className="form-control " {...register("ShiftTimeings", { required: true })} />
                     </div>
                     <div className="col-md-2">
                        <label >Grace Period<span style={{ color: "red" }}>*</span></label>
                        <input type="text" placeholder="Enter Grace Period" name="Grace" id="Grace" className="form-control " {...register("Grace", { required: true })} />
                     </div>
                     <div className="col-md-2">
                        <label >Shift Type<span style={{ color: "red" }}></span></label>
                        <input type="text" placeholder="Enter Shift Type" name="ShiftType" id="ShiftType" className="form-control " {...register("ShiftType", { required: true })} />
                     </div>
                  </div>
                  <br></br>
                  <div className="row" style={{ marginBottom: "10px" }}>

                     <div className="col-lg-7"></div>
                     <div className="col-lg-2">
                        <Link href="/Masters/shiftmaster" > <button className="btn btn-primary btn-sm shadow-lg" id={Styles.addNew}> Cancel</button></Link>
                     </div>
                     <div className="col-lg-3">
                        <button className="btn btn-primary btn-sm shadow-lg" style={{ marginLeft: "10px" }} id={Styles.addNew} >Save </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   );
}

export default ShiftMasterForm;

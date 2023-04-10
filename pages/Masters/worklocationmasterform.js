import React, { useState } from "react";
import Styles from "../../styles/WorkLocationMasterForm.module.css";
import { useForm } from "react-hook-form";
import Layout from "@/Components/layout";
import Link from "next/link";
import axios from "axios";

function WorkLocationMasterForm() {
  const [actionType, setActionType] = useState("insert");
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  async function onSubmit(data) {
    console.log(data)
    let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
    if (actionType == "insert") {
        await axios.post(hostURL + "Master/InsertWorkingLocationMaster", data);
    }
    else {
        await axios.post(hostURL + "Master/UpdateWorkingLocationMaster", data);
    }
  }

  const editWorkLocation = async (id) => {
    let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
    let res = await axios.get(hostURL + "Master/GetWorkingLocationMasterByID?ID=" + id);
    clearForm(res.data[0]);
}
  function clearForm(existingData = null) {
    let etty = {
        "ID": existingData ? existingData.id : "",  
        "Short": existingData ? existingData.short : "",
        "Description": existingData ? existingData.description : "",
    }
    reset(etty);
    setActionType(existingData ? "update" : 'insert');
}
const customStyles = {
  content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '60%'
  },
  errorMsg: {
      fontSize: '12px',
      fontWeight: '500',
      color: 'red'
  },
  inputLabel: {
      fontSize: '16px'
  }
}; 
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row ">
                <div className="col-lg-4">
                  <input name="Short" class="form-control" type="text" {...register("Short", { required: true })} placeholder="Short Name"/>
                  <div>{errors.Short && <span style={customStyles.errorMsg}>Please enter short name</span>}</div>
                  
                </div>
                <div className="col-lg-4">
                  <textarea name="Description" class="form-control" {...register("Description", { required: true })} placeholder="Description"/>
                  <div>{errors.Description && <span style={customStyles.errorMsg} >Please enter description</span>}</div>  
                </div>
              </div>
              <br></br>
              <div className="row ">
                <div className="col-lg-6"></div>
                <div className="col-lg-6">
                      <button type='button' className='btn common-edit' id={Styles.btn}>Close</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {
                                    actionType == "insert" && (
                                        <button type='submit' className='btn' id={Styles.btn}>Save</button>
                                    )
                                }
                                {
                                    actionType == "update" && (
                                        <button type='submit' className='btn' id={Styles.btn} >Update</button>
                                    )
                                }
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
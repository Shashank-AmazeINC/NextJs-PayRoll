import React, { useState, useEffect } from 'react'
import Styles from '../../styles/DepartmentMasterForm.module.css'
import { useForm } from 'react-hook-form';
import Layout from '@/Components/layout';
import Link from 'next/link';
import axios from 'axios';
function DepartmentMasterForm() {



    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm();
    const { errors } = formState;
    let [actionType, setActionType] = useState("insert");
    let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;




    async function onSubmit(data) {
        // alert(JSON.stringify(data))
        console.log(data);
        if (actionType == "insert") {


            await axios.post(hostURL + 'Master/InsertDepartmentMaster', data);
            location.href = ("/Masters/departmentmasterdashboard");

        }
        else {
            await axios.post(hostURL + 'Master/UpdateDepartmentMaster', data);
            alert("updated");
        }

    }
    function clearForm(departmentMaster = null) {

        let details = {
            "ID": departmentMaster ? departmentMaster.id : "",
            "Department_name": departmentMaster ? departmentMaster.department_name : "",
            "Department_Desc": departmentMaster ? departmentMaster.department_Desc : "",

        }

        reset(details);
        setActionType(departmentMaster ? "update" : 'insert')
    }

    useEffect(() => {
        async function getDepartmentMasterByID() {
            debugger
            const id = sessionStorage.getItem("id");
            if (id) {
                const response = await axios.get(hostURL + 'Master/GetDepartmentMasterByID?id=' + id);
                clearForm(response.data[0])
            }
            else {
                clearForm();
            }
        }
        getDepartmentMasterByID();
    }, []);

    return (
        <Layout>
            <h5 className='fw-bold ' id={Styles.h5}>Department Master</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card shadow-lg mt-4 p-3" id={Styles.card}>
                    <div className="row ">
                        <div className="col-lg-2">
                            <label >Department Name<span id={Styles.span}>*</span></label>
                        </div>
                        <div className="col-lg-4">
                            <label >Department Description<span id={Styles.span}>*</span></label>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-lg-2">
                            <input name="DepartmentMaster" type="text" {...register('Department_name')} className={`form-control`} />
                            {/* <div className="invalid-feedback">{errors.Department_name?.message}</div> */}

                        </div>
                        <div className="col-lg-4">
                            <textarea rows="3" type="text"  {...register('Department_Desc')} placeholder="Description" className="form-control"></textarea>

                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-lg-8"></div>

                        <div className="col-lg-2">
                            <Link href="/Masters/departmentmasterdashboard" className=" btn btn-primary form-control  shadow-lg" >Cancel</Link>
                        </div>
                        <div className="col-lg-2">
                            {actionType == "insert" && (

                                <button type="submit" id={Styles.actionBtn} className="btn btn-primary">

                                    Save

                                </button>

                            )}

                            {actionType == "update" && (

                                <button type="submit" id='AddButton' className="btn btn-primary">

                                    Update

                                </button>

                            )}
                            {/* <button className=" btn btn-primary form-control shadow-lg ">Submit</button> */}
                        </div>
                    </div>

                </div>
            </form>
        </Layout>
    )
}

export default DepartmentMasterForm
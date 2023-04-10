import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import Layout from '@/Components/layout';
import Styles from "../../styles/employmentJobHistory.module.css";
import axios from "axios";
import Link from "next/link";

function PositionMasterDetails() {

    const { register, handleSubmit, reset, formState } = useForm();
    const { errors } = formState;
    const [actionType, setActionType] = useState("insert");


    let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;



    function clearForm(positionMasterData = null) {
        debugger
        let details = {
            "ID": positionMasterData ? positionMasterData.id : "",
            "Short": positionMasterData ? positionMasterData.short : "",
            "Description": positionMasterData ? positionMasterData.description : "",

        }

        reset(details);
        setActionType(positionMasterData ? "update" : 'insert')
    }


    async function onSubmit(data) {
        // alert(JSON.stringify(data))
        console.log(data);
        if (actionType == "insert") {
            try {
                await axios.post(hostURL + 'Master/InsertRoleType', data);
                location.href = ("/Masters/positionmasterdashboard");
            }
            catch (error) {
                alert("error")
            }
        }
        else {
            await axios.post(hostURL + 'Master/UpdateRoleType', data);
            alert("updated");
        }

    }
    useEffect(() => {
        async function getPositionMasterbyID() {
            debugger
            const id = sessionStorage.getItem("id");
            if (id) {
                const response = await axios.get(hostURL + 'Master/GetRoleTypeByID?ID=' + id);
                clearForm(response.data[0])
            }
            else {
                clearForm();
            }
        }
        getPositionMasterbyID();
    }, [1]);

    return (
        <Layout>
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

                            <div className={Styles.cardcss}>

                                <div className="row leavereq">
                                    <div className="col-md-2">
                                        <label >Position Name<span style={{ color: "red" }}>*</span></label>
                                    </div>
                                    <div className="col-md-4">
                                        <label > Description<span style={{ color: "red" }}>*</span>
                                        </label>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row leavereq">
                                        <div className="col-md-2">
                                            <input type="text"{...register('Short', {

                                                required: "Please add a Position Name", pattern: {

                                                    value: '^[A-Za-z0-9 ]+$',

                                                    message: "Please enter a valid Position Name"

                                                }

                                            })} placeholder="Position Name" />

                                            {errors.positionName && <p className="error-message" style={{ color: "red" }}>{errors.positionName.message}</p>}
                                            {/* <div className="invalid-feedback">{errors.Name?.message}</div> */}
                                        </div>
                                        <div className="col-md-4">
                                            <input name="Description"   {...register("Description", { required: true })} rows="3" type="text" placeholder='Description' className={`form-control `} />
                                            {
                                                errors.Description && <p className='text-danger'>Description is Required</p>
                                            }
                                            {/* <div className="invalid-feedback">{errors.Description?.message}</div> */}
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-lg-7">
                                        </div>
                                        <div className="col-lg-2">

                                            <Link href="/Masters/positionmasterdashboard"> <button id={Styles.actionBtn} tabindex="0">CANCEL</button></Link>
                                        </div>
                                        <div className="col-lg-2">
                                            {actionType == "insert" && (

                                                <button type="submit" id='AddButton' className="btn btn-primary">

                                                    Save

                                                </button>

                                            )}

                                            {actionType == "update" && (

                                                <button type="submit" id='AddButton' className="btn btn-primary">

                                                    Update

                                                </button>

                                            )}

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default PositionMasterDetails
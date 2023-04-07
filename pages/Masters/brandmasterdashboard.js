import React from 'react'
import brandmaster from '../../styles/BrandMasterDashboard.module.css'
import Link from 'next/link'
function BrandMasterDashboard() {
    return (
        <div>
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3 className="text-primary fs-5 mt-3 fw-bold">Band Master</h3>
                            </div>
                        </div>
                        <br />
                        <div className={brandmaster.card}>
                            <div className="row">
                                <div className="col-lg-1">
                                    <p >Filter By</p>
                                </div>
                                <div className="col-lg-5">
                                    <input type="text" placeholder="Search" id="term" className="form-control text" />
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-10">
                            </div>
                            <div className="col-md-2">
                                <Link href="/Masters/brandmasterform"><button className={brandmaster.button} tabindex="0">
                                    Add New</button></Link>
                            </div>
                        </div>
                        <br />
                        <div className="alignForm">
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="container-fluid">

                                    <br />
                                    <table class="table table-bordered text">
                                        <thead >
                                            <tr class="head">
                                                <th class="col-md-4">Short Name</th>
                                                <th class="col-md-4">Description</th>
                                                <th class="col-md-4" style={{textAlign: "center"}}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            <tr >
                                                <td >Associate Manager</td>
                                                <td >associate</td>
                                                <td >
                                                    <button class="edit-btn">Edit</button> <button class="edit-btn">Delete</button>
                                                </td>
                                            </tr>
                                            <tr >
                                                <td >Manager</td>
                                                <td >Manager</td>
                                                <td >
                                                    <button class="edit-btn">Edit</button> <button class="edit-btn">Delete</button>
                                                </td>
                                            </tr>
                                            <tr >
                                                <td >Prop Mgt - Field</td>
                                                <td >Prop Mgt - Field
                                                </td>
                                                <td >
                                                    <button class="edit-btn">Edit</button>
                                                    <button class="edit-btn">Delete</button>
                                                </td></tr>
                                            <tr >
                                                <td >Staff</td>
                                                <td >Staff</td>
                                                <td >
                                                    <button class="edit-btn">Edit</button>
                                                    <button class="edit-btn">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div><br />
        </div>

    )
}

export default BrandMasterDashboard
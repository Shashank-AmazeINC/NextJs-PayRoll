import React from 'react'
import Link from 'next/link'
import leavetype from '../../styles/LeaveTypeDashboard.module.css'
import { useRef } from 'react'
import Layout from '@/Components/layout';
function LeaveTypeDashboard() {
    return (
        <Layout>
            <div>
                <div class="row">
                    <div class="col-lg-4"><br />
                        <h3 class="text-primary fs-5 mt-3 fw-bold">Leave Type </h3>
                    </div>
                    <div class="col-lg-4">
                    </div>
                    <div class="col-lg-2">
                    </div>
                </div>
                <br />
                <div class={leavetype.card}>
                    <br ></br>
                    <div class="row">
                        <div class="col-lg-1">
                            <p class="filter">Filter By</p>
                        </div>
                        <div class="col-lg-5" style={{ marginLeft: "15px" }}>
                            <input type="text" placeholder="Search" id="term" class="form-control"></input>
                        </div>
                        <div class="col-lg-3" style={{ textAlign: "center" }}>
                        </div>
                    </div>
                    <br ></br>
                </div>
                <br ></br>
                <div class="row">
                    <div class="col-md-10">
                        <p class="text-primary fs-6 mt-3 fw-bold">SHOWING <span >
                        </span>RESULTS</p>
                    </div>
                    <div class="col-md-2">
                        <Link href="/Masters/leavetypeform"> <button class={leavetype.button} tabindex="0">
                            Add New</button></Link>
                    </div>
                </div>
                <br ></br>
                <div class="row" style={{ marginLeft: "-99px" }}>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="container-fluid">
                            <table class="table table-striped table-hover mt-4">
                                <thead class="bg-info text-white">
                                    <tr >
                                        <th >Leave Type</th>
                                        <th >Description</th>
                                        <th >Action</th>
                                    </tr>
                                </thead>
                                
                            </table>
                        </div>
                    </div>
                    <div class="col-md-1">
                    </div>
                </div>

            </div>

        </Layout>

    )
}

export default LeaveTypeDashboard;
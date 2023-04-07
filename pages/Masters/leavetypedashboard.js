import React from 'react'
import Link from 'next/link'
import leavetype from '../../styles/LeaveTypeDashboard.module.css'
import { useRef } from 'react'
function LeaveTypeDashboard() {
    return (
        <div>
            <div class="row">
                <div class="col-lg-4"><br/>
                    <h3 class="text-primary fs-5 mt-3 fw-bold">Leave Type </h3>
                </div>
                <div class="col-lg-4">
                </div>
                <div class="col-lg-2">
                </div>
            </div>
<br/>
            <div class={leavetype.card}>
                <br ></br>
                <div class="row">
                    <div class="col-lg-1">
                        <p class="filter">Filter By</p>
                    </div>
                    <div class="col-lg-5" style={{marginLeft: "15px"}}>
                        <input type="text" placeholder="Search" id="term" class="form-control"></input>
                    </div>
                    <div class="col-lg-3" style={{textAlign: "center"}}>
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
                   <Link href="/Masters/LeaveTypeForm"> <button class={leavetype.button} tabindex="0">
                        Add New</button></Link>
                </div>
            </div>
            <br ></br>
            <div class="row" style={{marginLeft: "-99px"}}>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="container-fluid">
                    <table  class="table table-striped table-hover mt-4">
                        <thead  class="bg-info text-white">
                            <tr >
                                <th >Leave Type</th>
                                <th >Description</th>
                                <th >Action</th>
                                </tr>
                                </thead>
                                <tbody >
                                    <tr >
                                    <td  class="tdtext">Allocated Maternity Leave</td>
                                    <td  class="tdtext">Allocated Maternity Leave</td>
                                    <td >
                                        <button  class="edit-btn" tabindex="0">Edit</button> 
                                        <button  class="edit-btn">Delete</button>
                                        </td>
                                        </tr>
                                        <tr >
                                            <td  class="tdtext">birthday leave</td><td  class="tdtext">Birthday Leave</td><td ><button  class="edit-btn" tabindex="0">Edit</button> <button  class="edit-btn">Delete</button>
                                            </td></tr><tr ><td  class="tdtext">Current Reserve VL</td>
                                            <td  class="tdtext">Current Reserve Vacation Leave
</td>
<td >
<button  class="edit-btn" tabindex="0">Edit</button>
 <button  class="edit-btn">Delete</button>
 </td></tr><tr >
    <td  class="tdtext">Current SL</td>
 <td  class="tdtext">current sl</td>
 <td >
 <button  class="edit-btn" tabindex="0">Edit</button>
  <button  class="edit-btn">Delete</button>
  </td></tr><tr ><td  class="tdtext">Current VL</td>
  <td  class="tdtext">Current VL</td><td >
  <button  class="edit-btn" tabindex="0">Edit</button> 
  <button  class="edit-btn">Delete</button></td></tr>
  <tr >
  <td  class="tdtext">Deferred VL</td>
  <td  class="tdtext">Deferred VL</td>
  <td ><button  class="edit-btn" tabindex="0">Edit</button> 
  <button  class="edit-btn">Delete</button></td></tr><tr >
  <td  class="tdtext">Emergency Leave</td><td  class="tdtext">Emergency Leave</td>
  <td >
  <button  class="edit-btn" tabindex="0">Edit</button>
   <button  class="edit-btn">Delete</button>
   </td></tr><tr >
   <td  class="tdtext">Emergency Leave Bereavement</td>
   <td  class="tdtext">Emergency Leave Bereavement</td>
   <td >
   <button  class="edit-btn" tabindex="0">Edit</button> 
   <button  class="edit-btn">Delete</button>
   </td>
   </tr>
   <tr >
   <td  class="tdtext">Emergency Maternity Leave</td>
   <td  class="tdtext">Emergency Maternity Leave</td>
   <td >
   <button  class="edit-btn" tabindex="0">Edit</button> 
   <button  class="edit-btn">Delete</button></td>
   </tr>
   <tr >
   <td  class="tdtext">Loan Type Already Exit.</td>
   <td  class="tdtext">Loan Type Already Exit.</td>
   <td ><button  class="edit-btn" tabindex="0">Edit</button>
    <button  class="edit-btn">Delete</button>
    </td>
    </tr>
    <tr >
        <td  class="tdtext">LWOP</td>
        <td  class="tdtext">Leave Without Pay</td>
        <td ><button  class="edit-btn" tabindex="0">Edit</button>
         <button  class="edit-btn">Delete</button>
         </td>
         </tr>
         <tr >
            <td  class="tdtext">mahesh1</td>
            <td  class="tdtext">sindhu</td>
            <td >
                <button  class="edit-btn" tabindex="0">Edit</button> 
                <button  class="edit-btn">Delete</button>
                </td>
                </tr>
                <tr >
                    <td  class="tdtext">Maternity Leave</td>
                    <td  class="tdtext">Maternity Leave days</td>
                    <td ><button  class="edit-btn" tabindex="0">Edit</button> 
                    <button  class="edit-btn">Delete</button></td>
                    </tr><tr ><td  class="tdtext">Paternity Leave</td>
                    <td  class="tdtext">Paternity Leave</td>
                    <td ><button  class="edit-btn" tabindex="0">Edit</button> 
                    <button  class="edit-btn">Delete</button></td></tr>
                    <tr ><td  class="tdtext">SL Accrual Balance</td>
                    <td  class="tdtext">SL Accrual Balance</td>
                    <td ><button  class="edit-btn" tabindex="0">Edit</button> 
                    <button  class="edit-btn">Delete</button></td></tr>
                    <tr ><td  class="tdtext">Solo Parent Leave</td>
                    <td  class="tdtext">Solo Parent Leave</td>
                    <td ><button  class="edit-btn" tabindex="0">Edit</button>
                     <button  class="edit-btn">Delete</button></td></tr>
                     <tr ><td  class="tdtext">Solo Parent Maternity Leave</td>
                     <td  class="tdtext">Solo Parent Maternity Leave</td>
                     <td ><button  class="edit-btn" tabindex="0">Edit</button> 
                     <button  class="edit-btn">Delete</button>
                     </td></tr>
                     <tr ><td  class="tdtext">Special Leave for Women (RA 9710)</td>
                     <td  class="tdtext">Special Leave for Women (RA 9710)</td>
                     <td ><button  class="edit-btn" tabindex="0">Edit</button>
                      <button  class="edit-btn">Delete</button></td></tr>
                      <tr ><td  class="tdtext">Study Leave</td>
                      <td  class="tdtext">Study Leave</td><td >
                        <button  class="edit-btn" tabindex="0">Edit</button> 
                        <button  class="edit-btn">Delete</button></td></tr>
                        <tr ><td  class="tdtext">VAWC (RA 9262)</td>
                        <td  class="tdtext">VAWC (RA 9262)</td>
                        <td ><button  class="edit-btn" tabindex="0">Edit</button>
                         <button  class="edit-btn">Delete</button></td></tr>
                         <tr ><td  class="tdtext">VL Accrual Balance</td>
                         <td  class="tdtext">VL Accrual Balance</td><td >
                            <button  class="edit-btn" tabindex="0">Edit</button>
                             <button  class="edit-btn">Delete</button></td></tr>
                             <tr ><td  class="tdtext">VoluntarALI Leave</td>
                             <td  class="tdtext">VoluntarALI Leave</td>
                             <td ><button  class="edit-btn" tabindex="0">Edit</button>
                              <button  class="edit-btn">Delete</button>
                              </td></tr>
                              </tbody>
                              </table>
                                    </div>
                                    </div>
                                    <div class="col-md-1">
                                        </div>
                                        </div>
                               
                                        </div>
                                        

        
                        )
}

                        export default LeaveTypeDashboard;
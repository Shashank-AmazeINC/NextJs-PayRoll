import Link from 'next/link'
import React, { useState } from 'react'
import Styles from '../../styles/BarangayMasterDash.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'


 

function BarangayMasterDash() {


    return (
        <div>
            <br />
            <h5 id={Styles.h5}>Barangay Master</h5>

            <div className='card shadow-lg p-4 rounded-3 mt-4' id={Styles.card}>
                <div className='row'>
                    <div className='col-lg-1'>
                        <p>Filter By</p>
                    </div>
                    <div className='col-lg-4'>
                        <input type="text" placeholder='Search' className='form-control form-control-sm' />
                    </div>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-lg-9'></div>
                <div className='col-lg-2'>
                    <button id={Styles.addButton} >  <Link href="/Masters/barangaymasterform" id={Styles.addLink}> <AiOutlinePlusCircle size={15} /> ADD NEW</Link></button>

                </div>
                <div className='col-lg-1'></div>
            </div>

            <table id={Styles.table} className='table table-sm table-striped mt-3 text-center'>
                <thead>
                    <tr className='bg-info text-white '>
                        <th>Country Name</th>
                        <th>Province Name</th>
                        <th>City Name</th>
                        <th>Barangay</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>Philippines</td>
                        <td>Eastern Samar</td>
                        <td>Sulat</td>
                        <td>A-et</td>
                        <td><button id={Styles.actionButton} className='btn btn-sm'>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button id={Styles.actionButton} className='btn btn-sm'>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>Philippines</td>
                        <td>Eastern Samar</td>
                        <td>Sulat</td>
                        <td>A-et</td>
                        <td><button id={Styles.actionButton} className='btn btn-sm'>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button id={Styles.actionButton} className='btn btn-sm'>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>Philippines</td>
                        <td>Eastern Samar</td>
                        <td>Sulat</td>
                        <td>A-et</td>
                        <td><button id={Styles.actionButton} className='btn btn-sm'>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button id={Styles.actionButton} className='btn btn-sm'>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>Philippines</td>
                        <td>Eastern Samar</td>
                        <td>Sulat</td>
                        <td>A-et</td>
                        <td><button id={Styles.actionButton} className='btn btn-sm'>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button id={Styles.actionButton} className='btn btn-sm'>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>Philippines</td>
                        <td>Eastern Samar</td>
                        <td>Sulat</td>
                        <td>A-et</td>
                        <td><button id={Styles.actionButton} className='btn btn-sm'>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button id={Styles.actionButton} className='btn btn-sm'>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>Philippines</td>
                        <td>Eastern Samar</td>
                        <td>Sulat</td>
                        <td>A-et</td>
                        <td><button id={Styles.actionButton} className='btn btn-sm'>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button id={Styles.actionButton} className='btn btn-sm'>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>Philippines</td>
                        <td>Eastern Samar</td>
                        <td>Sulat</td>
                        <td>A-et</td>
                        <td><button id={Styles.actionButton} className='btn btn-sm'>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button id={Styles.actionButton} className='btn btn-sm'>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        </td>
                    </tr>
                </tbody>
            </table>







        </div>
    )
}

export default BarangayMasterDash
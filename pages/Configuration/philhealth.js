import React from 'react'
import Link from 'next/link'
import Styles from '../../styles/philhealth.module.css'

function Philhealth() {
    return (
        <div>
            <br />
            <p id={Styles.p}>Philhealth Configuration</p>

            <div className='card shadow-lg p-4 rounded-3 mt-4' id={Styles.card}>
                <div className='row'>

                    <div className='col-lg-4'>
                        <input type="text" placeholder='Search..' className='form-control form-control-md' />
                    </div>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-lg-11'></div>
                <div className='col-lg-1'>
                    <Link href="/configuration/philhealthadd" id={Styles.addLink} >  <button id={Styles.addButton}>  ADD </button></Link>

                </div>

            </div>

            <table id={Styles.table} className='table  table-striped mt-3 text-center'>
                <thead>
                    <tr className='bg-info text-white '>
                        <th>Taxable income low limit</th>
                        <th>Taxable income high limit</th>
                        <th>Phihealth value</th>
                        <th>Year</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>0</td>
                        <td>10000</td>
                        <td>200</td>
                        <td>2023</td>
                        <td><button id={Styles.actionButton} className='btn btn-sm'>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button id={Styles.actionButton} className='btn btn-sm'>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        </td>
                    </tr>

                    <tr>
                        <td>0</td>
                        <td>10000</td>
                        <td>200</td>
                        <td>2023</td>
                        <td><button id={Styles.actionButton} className='btn btn-sm'>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button id={Styles.actionButton} className='btn btn-sm'>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        </td>
                    </tr>

                    <tr>
                        <td>0</td>
                        <td>10000</td>
                        <td>200</td>
                        <td>2023</td>
                        <td><button id={Styles.actionButton} className='btn btn-sm'>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button id={Styles.actionButton} className='btn btn-sm'>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        </td>
                    </tr>

                    <tr>
                        <td>0</td>
                        <td>10000</td>
                        <td>200</td>
                        <td>2023</td>
                        <td><button id={Styles.actionButton} className='btn btn-sm'>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button id={Styles.actionButton} className='btn btn-sm'>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        </td>
                    </tr>

                    <tr>
                        <td>0</td>
                        <td>10000</td>
                        <td>200</td>
                        <td>2023</td>
                        <td><button id={Styles.actionButton} className='btn btn-sm'>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button id={Styles.actionButton} className='btn btn-sm'>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        </td>
                    </tr>

                </tbody>
            </table>

        </div>
    )
}

export default Philhealth
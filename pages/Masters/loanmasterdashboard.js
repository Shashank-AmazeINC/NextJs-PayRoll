
import React from 'react'
import Styles from '../../styles/LoanMasterDash.module.css'
import Link from 'next/link'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'
function LoanMasterDash() {
    return (
        <div>
            <br />
            <br />
            <p id={Styles.p}>Loan Type Dashboard</p>


            <div className='card shadow-lg p-4 rounded-4' id={Styles.card}>
                <div className='row'>

                    <div className='col-lg-1'>
                        <p>Filter By</p>
                    </div>
                    <div className='col-lg-5'>
                        <input type="text" className='form-control form-control-md ' placeholder='Search' />
                    </div>
                </div>

            </div>
            <div className='row'>
                <div className='col-lg-9'></div>
                <div className='col-lg-2'>

                    <Link href="/Masters/loanmasterform" id={Styles.addLink}> <button className='mt-3' id={Styles.addButton}>   <AiOutlinePlusCircle id={Styles.icon} size={18} /> ADD </button> </Link>

                </div>
                <div className='col-lg-1'></div>
            </div>

            <div className='row '>

                <table className=' table mt-3 table-striped ' id={Styles.table} >
                    <thead>
                        <tr id={Styles.tr}>

                            <th className='text-white'>Loan Type</th>
                            <th className='text-white'>Description</th>
                            <th className='text-white'>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>

                            <td>Agriculture Loan</td>
                            <td>This loan would be available for rearing all types of animals.</td>
                            <td><span className='form-check form-switch  '>
                                <input id={Styles.input} className='form-check-input  ' type="checkbox" /> &nbsp; <ImCancelCircle size={22} /> </span> </td>

                        </tr>
                        <tr>

                            <td>Car Loan</td>
                            <td>Can Only Be Initiated By Manager</td>
                            <td><span className='form-check form-switch  '>
                                <input id={Styles.input} className='form-check-input  ' type="checkbox" /> &nbsp; <ImCancelCircle size={22} /> </span> </td>

                        </tr>
                        <tr>

                            <td>Car Loan AC</td>
                            <td>Car Loan AC</td>
                            <td><span className='form-check form-switch  '>
                                <input id={Styles.input} className='form-check-input  ' type="checkbox" /> &nbsp; <ImCancelCircle size={22} /> </span> </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LoanMasterDash
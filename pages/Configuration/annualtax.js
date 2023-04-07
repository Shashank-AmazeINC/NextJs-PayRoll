import React,{useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useEffect } from 'react'
function annualtax() {
    
    return (
        <div className='container'>
            <h3 className='text-primary fs-4 mt-3'>Annual Tax Configuration</h3>

            <div className='card p-3 border-0 shadow-lg rounded-3 mt-4'>
                <div className='row'>
                    <div className='col-lg-1'>
                        <p>Filter By</p>
                    </div>

                    <div className='col-lg-4'>
                        <input type="text" className='form-control' placeholder='Search...' />
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-10'></div>
                <div className='col-lg-2 mt-2 text-end'>
                    <Link href="/configuration/taxconfigadd" className='btn btn-primary'>Add New</Link>
                </div>

                <table className='table table-hover mt-2 '>
                    <thead className='bg-info text-white '>
                        <tr>
                            <th>Tax low level limit</th>
                            <th>Tax high level limit</th>
                            <th>slab</th>
                            <th>Percentage</th>
                            <th>Tax excess amount</th>
                            <th>Tax deduction amount</th>
                            <th>Year</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            annualTax.map((data,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{data.taxlowlevellimit}</td>
                                        <td>{data.taxhighlevellimit}</td>
                                        <td>{data.slab}</td>
                                        <td>{data.percentage}</td>
                                        <td>{data.taxexcessamount}</td>
                                        <td>{data.taxdeductionamount}</td>
                                        <td>{data.year}</td>
                                        <td>
                                            <button>Edit</button>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default annualtax
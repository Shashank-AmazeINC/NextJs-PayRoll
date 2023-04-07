import React from 'react'
import Link from 'next/link'

function StateMasterDash() {
    return (
        <div className='p-3'>
            <h3 className='text-primary fs-5 mt-3'>Province Master</h3>
            <div className='card p-3 border-0 shadow-lg rounded-3 mt-4'>
                <div className='row'>
                    <div className='col-lg-1'>
                        <p>Filter By</p>
                    </div>

                    <div className='col-lg-3'>
                        <input type="text" className='form-control' placeholder='Search...' />
                    </div>

                    <div className='col-lg-3'>
                        <select className='form-select'>
                            <option>Select Country</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='row mt-4'>
                <div className='col-lg-2'>
                    <p className='text-primary fs-6 fw-bold'>SHOWING RESULTS</p>
                </div>
                <div className='col-lg-8'></div>
                <div className='col-lg-2'>

                    {/* <Link href="/statemasterform" className='btn btn-primary'>Add New</Link> */}

                    <Link href="/Masters/statemasterform" className='btn btn-primary'>Add New</Link>

                </div>
            </div>

            <table className='table table-hover mt-4 '>
                <thead className='bg-info text-white '>
                    <tr>
                        <th>Country</th>
                        <th>Province Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default StateMasterDash
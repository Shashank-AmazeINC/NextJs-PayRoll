import React from 'react'
import Link from 'next/link'
function StateMasterForm() {
    return (
        <div>
            <h3 className='text-primary fs-5 mt-3'>Province Details</h3>
            <div className='card p-3 border-0 shadow-lg rounded-3 mt-4'>
                <div className='row'>
                    <div className='col-lg-2'>
                        <p>Country<i className='text-danger'>*</i></p>
                        <select className='form-select'>
                            <option>Select Country</option>
                        </select>
                    </div>

                    <div className='col-lg-2'>
                        <p>Province<i className='text-danger'>*</i></p>
                        <input type="text" className='form-control' placeholder='Province' />
                    </div>

                    <div className='col-lg-2'>
                        <p>Description<i className='text-danger'>*</i></p>
                        <input type="text" className='form-control' placeholder='Description' />
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-lg-8'></div>
                    <div className='col-lg-2  text-end'>
                       <Link href="/Masters/StateMasterDash"> <button id='AddButton' className='btn btn-primary'>Cancel</button></Link>
                    </div>
                    <div className='col-lg-2 '>
                        <button id='AddButton' className='btn btn-primary'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StateMasterForm
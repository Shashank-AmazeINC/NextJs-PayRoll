import Link from 'next/link'
import React from 'react'

function WorkLocationMasterDash() {
  return (
    <div>
        <h3 className='text-primary fs-5 mt-3'>Worklocation Master</h3>
            <div className='card p-3 border-0 shadow-lg rounded-3 mt-4'>
                <div className='row'>
                    <div className='col-lg-1'>
                        <p>Filter By</p>
                    </div>

                    <div className='col-lg-5'>
                        <input type="text" className='form-control' placeholder='Search...' />
                    </div>
                </div>
            </div>

            <div className='row mt-2'>
                    <div className='col-lg-10'></div>
                    <div className='col-lg-2 '>
                        <Link href="/Masters/worklocationmasterform" id='AddButton' className='btn btn-primary fw-bold'>Add New</Link>
                    </div>
                </div>
    </div>
  )
}

export default WorkLocationMasterDash
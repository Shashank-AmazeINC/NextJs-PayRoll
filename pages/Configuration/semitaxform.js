import React from 'react'

function SemiTaxForm() {
    return (
        <div>
            <div>
                <h3 className='text-primary fs-5 mt-3'>Semi Monthly Form</h3>
                <div className='container'>
                    <div className='row  mt-4 shadow-lg rounded-3 p-3 '>
                        <div className='col-lg-2 mt-4'>
                            <p>Tax low level limit <i className='text-danger'>*</i></p>
                            <input type="text" placeholder='Tax low level limit' className='form-control' />
                        </div>

                        <div className='col-lg-2 mt-4'>
                            <p>Tax high level limit <i className='text-danger'>*</i></p>
                            <input type="text" placeholder='Tax high level limit' className='form-control' />
                        </div>

                        <div className='col-lg-2 mt-4'>
                            <p>slab <i className='text-danger'>*</i></p>
                            <input type="text" placeholder='slab' className='form-control' />
                        </div>

                        <div className='col-lg-2 mt-4'>
                            <p>Percentage <i className='text-danger'>*</i></p>
                            <input type="text" placeholder='Percentage' className='form-control' />
                        </div>

                        <div className='col-lg-2 mt-4'>
                            <p>Tax excess amount <i className='text-danger'>*</i></p>
                            <input type="text" placeholder='Tax excess amount' className='form-control' />
                        </div>

                        <div className='col-lg-2 mt-4'>
                            <p>Tax deduction amount <i className='text-danger'>*</i></p>
                            <input type="text" placeholder='Tax deduction amount' className='form-control' />
                        </div>

                        <div className='col-lg-2 mt-4'>
                            <p>Year <i className='text-danger'>*</i></p>
                            <select className='form-select'>
                                <option></option>
                            </select>
                        </div>

                        <div className='col-lg-6'></div>

                        <div className='col-lg-10'></div>
                        <div className='col-lg-1 mt-2 text-end'>
                            <button className='btn btn-primary'>Save</button>
                        </div>
                        <div className='col-lg-1 mt-2'>
                            <button className='btn btn-primary'>Cancel</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SemiTaxForm
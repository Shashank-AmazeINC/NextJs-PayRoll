import React from 'react'
import * as Yup from 'yup';
import Link from 'next/link'
import Styles from '../../styles/dailyrateadd.module.css'
import { useForm } from 'react-hook-form';
function dailyrateadd() {

    return (
        <div>
            <br />
            <p id={Styles.p}>Daily Rate Configuration Form</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div id={Styles.card} className='card shadow-lg p-3'>

                    <div className='row'>
                        <div className='col-lg-2'>


                            <label>Staffid <span id={Styles.span}>*</span></label>
                            <input name="lowLimit" type="text" className={`form-control mt-2`} />
                            <div className="invalid-feedback">{errors.lowLimit?.message}</div>

                        </div>
                        <div className='col-lg-2'>

                            <label>Working_Days_Year <span id={Styles.span}>*</span></label>
                            <input name="highLimit" type="text" className={`form-control mt-2`} />
                            <div className="invalid-feedback">{errors.highLimit?.message}</div>
                        </div>
                        <div className='col-lg-2'>

                            <label>Working_Days_Month <span id={Styles.span}>*</span></label>
                            <input name="Philhealth" type="text" className={`form-control mt-2 `} />
                            <div className="invalid-feedback">{errors.Philhealth?.message}</div>
                        </div>
                        <div className='col-lg-2'>

                            <label>Working_Hours_Day <span id={Styles.span}>*</span></label>
                            <input name="Philhealth" type="text" className={`form-control mt-2 `} />
                            <div className="invalid-feedback">{errors.Philhealth?.message}</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-10'></div>
                        <div className='col-lg-1'>
                            <button id={Styles.Save}>Save</button>
                        </div>
                        <div className='col-lg-1'>
                            <Link href='/configuration/philhealthdash'><button id={Styles.Cancel}>Cancel</button></Link>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default dailyrateadd
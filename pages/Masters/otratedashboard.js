import Link from 'next/link'
import React from 'react'
import Styles from '../../styles/OTRateDash.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
function OTRateDash() {
    return (
        <div>
            <br /><br />
            <p id={Styles.p}>OT Master</p>


            <div className='container-fluid'>
                <div className='card p-4'>
                    <div className='row'>
                        <div className='col-lg-1'>
                            <p>Filter by</p>
                        </div>
                        <div className='col-lg-4'>
                            <input type={"tezt"} placeholder="Search" className='form-control form-control-sm' />
                        </div>
                        <div className='col-lg-7'></div>
                    </div>
                </div>

            </div>



            <div className='row mt-3'>
                <div className='col-lg-10'></div>
                <div className='col-lg-2'>

                    <button id={Styles.addButton}> <Link id={Styles.addLink} href="/Masters/otmaster"> <AiOutlinePlusCircle id={Styles.icon} size={18} /> ADD New</Link></button>

                </div>

            </div>

            <div className='row '>


                <table className='table table-bordered mt-3 text-center table-striped ' id={Styles.table}>
                    <thead>
                        <tr id={Styles.tr}>
                            <th className='text-white'>Overtime Code	</th>
                            <th className='text-white'>	Description</th>
                            <th className='text-white'>	Permanant Employee</th>
                            <th className='text-white'>Probationary Employee</th>
                            <th className='text-white'>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td  >Asti Business Services Inc. (ABSI)	</td>
                            <td >BRAD Warehouse and Logistics Services Inc.	</td>
                            <td >BRAD Warehouse and Logistics Services Inc.	</td>
                            <td >BRAD Warehouse and Logistics Services Inc.	</td>
                            <td ><button id={Styles.actionButton}>Delete</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <button id={Styles.actionButton}>Edit</button>
                            </td>
                        </tr>
                        <tr >
                            <td >BRAD Warehouse and Logistics Services Inc.	</td>
                            <td >BRAD Warehouse and Logistics Services Inc. (BRAD)	</td>
                            <td >BRAD Warehouse and Logistics Services Inc. (BRAD)	</td>
                            <td >BRAD Warehouse and Logistics Services Inc. (BRAD)	</td>
                            <td >
                                <button id={Styles.actionButton}  >Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button id={Styles.actionButton}>Edit</button>
                            </td>
                        </tr>
                        <tr >
                            <td >Fiber Infrastructure and Network Services Inc. (FINSI)	</td>
                            <td >Fiber Infrastructure and Network Services Inc. (FINSI)	</td>
                            <td >Fiber Infrastructure and Network Services Inc. (FINSI)	</td>
                            <td >Fiber Infrastructure and Network Services Inc. (FINSI)	</td>
                            <td >
                                <button id={Styles.actionButton}  >Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button id={Styles.actionButton}>Edit</button>
                            </td>
                        </tr>
                        <tr >
                            <td >HCX Technology Partners Inc.	</td>
                            <td >HCX Technology Partners Inc.	</td>
                            <td >HCX Technology Partners Inc.	</td>
                            <td >HCX Technology Partners Inc.	</td>
                            <td >
                                <button id={Styles.actionButton}  >Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button id={Styles.actionButton}>Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>



        </div>


    )
}

export default OTRateDash
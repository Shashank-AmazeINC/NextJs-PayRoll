import React from 'react'
import Styles from '../../styles/SubsidaryMasterDash.module.css'
import Link from 'next/link'
import { AiOutlinePlusCircle } from 'react-icons/ai'

function SubsidaryMasterDash() {
    return (
        <div>
            <br /><br />
            <p id={Styles.p}>SubsidaryMaster</p>


            <div className='card shadow-lg p-4 rounded-3' id={Styles.card}>
                <div className='row'>

                    <div className='col-lg-1'>
                        <p>Filter By</p>
                    </div>
                    <div className='col-lg-5'>
                        <input type="text" className='form-control form-control-sm' />
                    </div>
                </div>

            </div>
            <div className='row mt-3'>
                <div className='col-lg-9'></div>
                <div className='col-lg-2'>

                    <button id={Styles.addButton}> <Link id={Styles.addLink} href="/Masters/subsidarymasterform"> <AiOutlinePlusCircle id={Styles.icon} size={18} /> ADD New</Link></button>

                </div>
                <div className='col-lg-1'></div>

            </div>

            <div className='row '>

                <table className=' table   table-bordered mt-3 text-center table-striped table-striped-odd   ' id={Styles.table}>
                    <thead>
                        <tr id={Styles.tr}>
                            <th className='text-white'>Subsidiary Name</th>
                            <th className='text-white'>Description</th>
                            <th className='text-white'>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr id={Styles.td}>
                            <td id={Styles.td} >Asti Business Services Inc. (ABSI)	</td>
                            <td id={Styles.td}>BRAD Warehouse and Logistics Services Inc.	</td>
                            <td id={Styles.td}><button id={Styles.actionButton}>Edit</button> &nbsp;&nbsp;&nbsp;&nbsp;

                                <button id={Styles.actionButton}>Delete</button>
                            </td>
                        </tr>
                        <tr id={Styles.td}>
                            <td id={Styles.td}>BRAD Warehouse and Logistics Services Inc.	</td>
                            <td id={Styles.td}>BRAD Warehouse and Logistics Services Inc. (BRAD)	</td>
                            <td id={Styles.td}>
                                <button id={Styles.actionButton}  >Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button id={Styles.actionButton}>Delete</button>
                            </td>
                        </tr>
                        <tr id={Styles.td}>
                            <td id={Styles.td}>Fiber Infrastructure and Network Services Inc. (FINSI)	</td>
                            <td id={Styles.td}>Fiber Infrastructure and Network Services Inc. (FINSI)	</td>
                            <td id={Styles.td}>
                                <button id={Styles.actionButton}  >Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button id={Styles.actionButton}>Delete</button>
                            </td>
                        </tr>
                        <tr id={Styles.td}>
                            <td id={Styles.td}>HCX Technology Partners Inc.	</td>
                            <td id={Styles.td}>HCX Technology Partners Inc.	</td>
                            <td id={Styles.td}>
                                <button id={Styles.actionButton}  >Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button id={Styles.actionButton}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>



        </div>
    )
}

export default SubsidaryMasterDash
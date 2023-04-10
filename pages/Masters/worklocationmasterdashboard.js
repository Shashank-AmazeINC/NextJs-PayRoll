import Link from 'next/link'
import React from 'react'
import Layout from '@/Components/layout'
import Styles from '../../styles/table.module.css';
import { useEffect, useState } from "react";
import axios from "axios";

function WorkLocationMasterDash() {

const [workLocation, setWorkLocationData] = useState([]);

    useEffect(() => {
        async function getData() {
            let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
          let res = await axios.get(
            hostURL +"Master/GetWorkingLocationMaster"
          );
          setWorkLocationData(res.data);
        }
        getData();
      }, [1]);

      const deleteWorkLocation = async (id) =>{
        let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
        await axios.get(hostURL + "DeleteWorkingLocationMaster?ID=" + id);
        let res = await axios.get(hostURL + "Master/GetWorkingLocationMaster");
        setDashboardData(res.data);
      }

      const edit = async (id)=>{
        sessionStorage.setItem("WorkLocationID", id);
      }
    return (
        <Layout>
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

                <div className='row '>

                    <table className=' table mt-3 table-striped ' id={Styles.table} >
                        <thead>
                            <tr id={Styles.tr}>

                                <th >Short Name</th>
                                <th >Description</th>
                                <th >Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                workLocation.map((data,index) => {
                                    return (
                                        <tr className="text-dark" key={index}>
                                            <td>{data.short}</td>
                                            <td>{data.description}</td>
                                            <td>
                                                <button onCLick={edit.bind(this,data.id)}>Edit</button>
                                                <button onCLick={deleteWorkLocation.bind(this,data.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export default WorkLocationMasterDash
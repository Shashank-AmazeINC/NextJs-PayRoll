import React from 'react'
import Styles from '../../styles/SubsidaryMasterDash.module.css'
import Link from 'next/link'
import Layout from '@/Components/layout'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useEffect, useState } from 'react';



export default function SubsidaryMasterDash() {

    const [SubsidaryMaster, setSubsidaryMaster] = useState([]);

    const getSubsidaryMaster = async () => {
        const { data } = await axios.get("http://localhost:4199/Master/GetStudentDetails")
        setSubsidaryMaster(data)
    }

    useEffect(() => {
        getSubsidaryMaster()
    }, [1])

    const getData = (data) => {
        sessionStorage.setItem("id", data.id);
    }

    const handleDelete = async (id) => {
        try {
            const res = await axios.get(`http://localhost:4199/Master/DeleteStudentDetails?id=${id}`);
            console.log(res.data);
            alert("Data deleted successfully");
            getstudentdetails();
        } catch (error) {
            console.error(error);
            alert("Failed to delete data");
        }
    };


    return (
        <Layout>
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
                            {SubsidaryMaster.map((data) => {
                                return (
                                    <tr key={data.id}>
                                        <td>{data.name}</td>
                                        <td>{data.description}</td>

                                        {/* <td>
                                            <Link href="/forms">
                                                <button className="btn btn-primary" onClick={getData.bind(this, data)}>Edit</button>
                                            </Link>
                                            &nbsp;

                                            <button className="btn btn-danger" onClick={() => handleDelete(data.id)}>Delete</button>
                                        </td> */}

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

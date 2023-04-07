import React, { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import Styles from '../../styles/DivisionMasterDashboard.module.css'
import { AiOutlinePlusCircle } from "react-icons/ai";
import table from "../../styles/table.module.css";
import Link from "next/link";
function DivisionMasterDashboard(){
    return (
        <div>
        <br></br>
        <p id={Styles.title}>Division Master</p>
        <div className="container-fluid mt-4">
        <div className="row shadow-lg p-2 rounded-4 p-3 ">
          <div className="col-lg-1">
            <b>
              <p className="mt-2 text-center">
                {" "}
                <BiFilterAlt /> Filter by:{" "}
              </p>
            </b>
          </div>
          <div className="col-lg-5">
            <input
              type="search"
              className=" mt-2 form-control"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-8">
            <p id={Styles.p}>SHOWING 2 RESULTS</p>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-2">
           <Link href="/Masters/divdivisionmaster"> <button
              className="btn btn-primary btn-sm  shadow-lg"
              id={Styles.addNew}
            > <AiOutlinePlusCircle /> 
              Add New
            </button></Link>
          </div>
        </div>

        <div className="container-fluid mt-4">
        <div className="row">
          <table className={table.commonTable}>
            <thead>
              <tr>
                <th>Short Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Afghanistan</td>
                <td>Afghanistan</td>
                <td>
                        <button id={Styles.actionBtn}>Edit</button>
                        <br></br>
                        <br></br>
                        <button id={Styles.actionBtn}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
        </div>
    )
}

export default DivisionMasterDashboard
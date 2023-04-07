
import React from 'react';
import Styles from "../../styles/employmentJobHistory.module.css";
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Link from 'next/link';
function ShiftMasterForm() {
    return (
       <div className="container-fluid">
        <div className="row">
           <div className="col-md-12">
                        <div className="row">
                            <div className="col-lg-2">
                                <h3 className="Heading">Shift Master Details </h3>
                            </div>
                            <div className="col-lg-8">
                            </div>
                            <div className="col-lg-2">
                            </div>
                            </div>
                            </div>
           <div  className="card">
   <div  className="row leavereq">
      <div  className="col-md-2"><label >Shift Name<span  className="span">*</span></label></div>
      <div  className="col-md-2"><label >Shift Type<span  className="span">*</span></label></div>
      <div  className="col-md-2"><label >Rules<span  className="span">*</span></label></div>
      <div  className="col-md-2"><label >Shift Timings<span  className="span">*</span></label></div>
      <div  className="col-md-2"><label >Grace Period<span  className="span"></span></label></div>
   </div>
   <div  className="row leavereq">
      <div  className="col-md-2"><input  type="text" placeholder="Enter Shift Name" name="Short" id="Short" className="form-control "/></div>
      <div  className="col-md-2"><input  type="text" placeholder="Enter Shift Type" name="shifttype" id="shifttype" className="form-control "/></div>
      <div  className="col-md-2"><input  type="text" placeholder="Enter Rules" name="Description" id="Description" className="form-control "/></div>
      <div  className="col-md-2"><input  type="text" placeholder="Shift Timings" name="ShiftTimeings" id="ShiftTimeings" className="form-control "/></div>
      <div  className="col-md-2"><input  type="text" placeholder="Grace Period" name="Grace" id="Grace" className="form-control "/></div>
   </div>
   <br></br>
   <div  className="row">
      <div  className="col-lg-8"></div>

      <div  className="col-lg-2">
    <Link href="/Masters/ShiftMaster" > <button
className="btn btn-primary btn-sm shadow-lg"
id={Styles.addNew}
// onClick={() => setModalOpen(!modalOpen)}
>
{/* <AiOutlinePlusCircle /> */}
Cancel
</button>   </Link>
</div>
      <div  className="col-lg-2">
      <button
className="btn btn-primary btn-sm shadow-lg"
id={Styles.addNew}
// onClick={() => setModalOpen(!modalOpen)}
>
{/* <AiOutlinePlusCircle /> */}
Submit
</button>
</div>
      </div>
   </div>
</div> 
        </div>
      //   </div>
    );
}

export default ShiftMasterForm;

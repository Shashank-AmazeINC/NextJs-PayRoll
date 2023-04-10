import React from "react";
import Link from "next/link";
import Layout from "@/Components/layout";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from 'axios'
function BrandMasterForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [actionType, setActionType] = useState("insert");

  useEffect(() => {
    async function getBandMasterByID() {
      const id = sessionStorage.getItem("id");
      if (id) {
        let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
        let res = await axios.get(
          hostURL + "Master/GetBrandMasterByID?ID=" + id
        );
        clearForm(res.data[0]);
      } else {
        clearForm();
      }
    }

    getBandMasterByID();
  }, [1]);

  function clearForm(BandMasterData = null) {
    debugger;
    let details = {
      ID: BandMasterData ? BandMasterData.id : "",
      Short: BandMasterData ? BandMasterData.short : "",
      Description: BandMasterData ? BandMasterData.description : "",
    };
    reset(details);
    setActionType(BandMasterData ? "update" : "insert");
  }

  async function onSubmit(data) {
    console.log(data);
    let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
    if (actionType == "insert") {
      await axios.post(hostURL + "Master/InsertBrandMaster", data);
      alert("data Inserted");
    } else {
      await axios.post(hostURL + "Master/UpdateBrandMaster", data);
      alert("updated");
    }
  }

  return (
    <Layout>
      <div>
        <h3 className="text-primary fs-5 mt-3">Band Master</h3>
        <div className="card p-3 border-0 shadow-lg rounded-3 mt-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-lg-2">
                <p>
                  Short Name<i className="text-danger">*</i>
                </p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Short Name"
                  {...register("Short", { required: true })}
                />
              </div>

              <div className="col-lg-5">
                <p>
                  Description<i className="text-danger">*</i>
                </p>
                <textarea
                  className="form-control"
                  placeholder="Description"
                  {...register("Description", { required: true })}
                ></textarea>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-8"></div>
              <div className="col-lg-2  text-end">
                <Link href="/Masters/BrandMasterDashboard">
                  {" "}
                  <button
                    type="submit"
                    id="AddButton"
                    className="btn btn-primary"
                  >
                    Cancel
                  </button>
                </Link>
              </div>
              <div className="col-lg-2 ">
                {/* <button id='AddButton' className='btn btn-primary'>Submit</button>
                 */}
                {actionType == "insert" && (
                  <button type="submit" id='AddButton' className="btn btn-primary">
                    Save
                  </button>
                )}
                {actionType == "update" && (
                  <button type="submit" id='AddButton' className="btn btn-primary">
                    Update
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default BrandMasterForm;

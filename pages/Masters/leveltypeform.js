import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Layout from "@/Components/layout";
import axios from "axios";
function LevelTypeForm() {

  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;


  let [actionType, setActionType] = useState("insert");





  const onSubmit = async (data) => {
    debugger
    console.log(JSON.stringify(data));
    let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
    if (actionType == "insert") {
      await axios.post(hostURL + "Master/InsertLevelType", data)
      location.href="/Masters/leveltypedashboard";

    } else {
      await axios.post(hostURL + "Master/UpdateLevelType", data)
    }
  }

  function clearForm(existingData = null) {

    let etty = {

      "ID": existingData ? existingData.id : "",

      "Short": existingData ? existingData.short : "",

      "Description": existingData ? existingData.description : "",

    }

    reset(etty);

    setActionType(existingData ? "update" : 'insert');

  }
  useEffect(() => {
    // getLevelType();
    clearForm();
  }, [1])


  return (
    <Layout>
      <div className="container">
        <h3 className='text-primary fs-5 mt-3'>Job Level Type Details</h3>
        <div className='card p-3 border-0 shadow-lg rounded-3 mt-4 mb-5'>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="row ">

              <div className="col-lg-4">

                <input

                  name="Short"

                  className="form-control"

                  type="text"

                  {...register("Short", { required: true })}

                  placeholder="Short Name"

                />

                <div>

                  {errors.Short && (

                    <span className="mt-2 text-danger">

                      Please enter name

                    </span>

                  )}

                </div>

              </div>

              <div className="col-lg-4">

                <textarea

                  name="Description"

                  className="form-control"

                  {...register("Description", { required: true })}

                  placeholder="Description"

                />

                <div>

                  {errors.Description && (

                    <span className="text-danger mt-2" >

                      Please enter description

                    </span>

                  )}

                </div>

              </div>

            </div>

            <br></br>

            <div className="row ">

              <div className="col-lg-8"></div>

              <div className="col-lg-2 text-end">

                <button

                  type="button"

                  className="btn btn-primary AddButton" >
                  Close

                </button>
              </div>

              <div className="col-lg-2">
                {actionType == "insert" && (

                  <button type="submit" className="btn btn-primary AddButton" >

                    Save

                  </button>

                )}

                {actionType == "update" && (

                  <button type="submit" className="btn btn-primary AddButton" >

                    Update

                  </button>

                )}

              </div>

            </div>

          </form>
        </div>
      </div>
    </Layout>
  )
}

export default LevelTypeForm
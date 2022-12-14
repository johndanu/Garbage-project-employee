import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const table_array = [1, 2, 3, 4, 5, 6, 7, 8]

function Vs01() {
  const navigate = useNavigate();

  function viewSummary() {
    navigate("/frame3");
  }
  function viewSchedule() {
    navigate("/frame2");
  }
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://cb65-123-231-61-157.in.ngrok.io/truck')
      .then(function (response) {
        setData(response.data)
        console.log(response);
      })
  })
  return (
    <div className="h-100   container-fluid">
      <div className="main_body">
        <div className="card_body shedule_table container mt-5">
          <div className="top w-100 ">
            <p>
            <a href='http://localhost:3000/frame2'>Truck</a> 
            <span>, </span>
            <a href='http://localhost:3000/frameevent'>Event</a> 
            <span>, </span>
            <a href='http://localhost:3000/frameaditional'> Additional Collections</a>
            <span>, </span>
            </p>
          </div>
          <div>
            <div className="mt-3 schedules d-flex align-items-center justify-content-between ">
              <div onClick={viewSchedule} className="schedule clickable h6 mb-0 py-2 title_tab text-center">
                Schedule
              </div>
              <div onClick={viewSummary} className="summary clickable h6 mb-0 py-2 title_tab text-center">
                Summary
              </div>
            </div>
            <div className="card table_card py-3 px-4">
              <table className="table">
                <thead className="table-dark">
                  <tr>
                    <th>Time</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunnday</th>
                  </tr>
                </thead>
                <tbody>

                  { data.length > 0 && data.map((cont, index) => (
                      <tr key={index} >
                        

                          <td>{cont.start_time} </td>
                          <td>{cont.truck_id} </td>
                          <td>{cont.truck_id} </td>
                          <td>{cont.truck_id} </td>
                          <td>{cont.truck_id} </td>
                          <td>{cont.truck_id} </td>
                          <td>{cont.truck_id} </td>
                          <td>{cont.truck_id} </td>
                          
                        
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vs01
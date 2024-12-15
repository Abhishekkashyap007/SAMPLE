import React, { Fragment, useState } from 'react'
import { useEffect } from 'react';

const mycourse = [
  {
    coursename: "mern",
    coursefees: 5000
  },
  {
    coursename: "mean",
    coursefees: 4000
  },
  {
    coursename: "java",
    coursefees: 50000
  },
  {
    coursename: "excel",
    coursefees: 2000
  },
];



export default function Coursehomepage() {
  const [a, b] = useState([]);

  const getmylocaldata = () => {
    const getmydata = JSON.parse(localStorage.getItem("mylocaldata"));
    console.log(getmydata);
    b(getmydata)
  }

  useEffect(() => {
    getmylocaldata();
  })
  return (

    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>welcome to Course Contents</h1>
          </div>

          {a.map((gd) => {
            return (
              <div className='col-md-3 text-center'>
                <div className='card bg-info p-3' >
                  <h3>{gd.price}</h3>
                </div>
              </div>

            )
          })}
        </div>

        <div className='row'>
          {mycourse.map((c) => {
            return (
              <div className='col-md-3 text-center'>
                <div className='card bg-info p-3' >
                  <h3>{c.coursename}</h3>
                  <h2>Fees:{c.coursefees}</h2>
                </div>
              </div>

            )
          })}
        </div>

      </div>
    </Fragment>
  )
}

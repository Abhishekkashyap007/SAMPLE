import React from 'react'
import { Link } from 'react-router-dom'

function Userregistor(){
    const fst = 30;
    return (
        <div classname='container mt-3'>
            <div className='row justify-content-center'>
                <div className='col-md-8 p-5 bg-info rounded shadow'>
                    <div className='container-fluid'>
                        <div className='row text-white'>
                            <div className='col-12 text-center pb-3'>
                                <p style={{textShadow:'2px 2px 5px black',fontSize:`${fst}px`}}>Welcome to Registor Page</p>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label  className="form-label">Email address</label>
                                    <input type="email" className="form-control"/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label  className="form-label">Full name</label>
                                    <input type="text" className="form-control" placeholder='fullname'/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label  className="form-label">Phone No</label>
                                    <input type="text" className="form-control" placeholder='phone no'/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label  className="form-label">DOB</label>
                                    <input type="date" className="form-control"/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label  className="form-label">Password</label>
                                    <input type="Password" className="form-control"/>
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                <div className="mb-3">
                                    
                                    <button className='btn btn-success shadow'>Login</button>
                                    <Link className='btn btn-outline-warning shadow ms-3' to='registor'>Registor</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userregistor
import React from 'react'
import { Link } from 'react-router-dom';
function Loginpage() {
    const fst=30;
    return (
        <div classname='container mt-3'>
            <div className='row justify-content-center'>
                <div className='col-md-5 p-5 bg-info rounded shadow'>
                    <div className='container-fluid'>
                        <div className='row text-white'>
                            <div className='col-12 text-center pb-3'>
                                <p style={{textShadow:'2px 2px 5px black',fontSize:`${fst}px`}}>Welcome to Login Page</p>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label  class="form-label">Email address</label>
                                    <input type="email" class="form-control"/>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label  class="form-label">Password</label>
                                    <input type="Password" class="form-control"/>
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                <div class="mb-3">
                                    
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

export default Loginpage
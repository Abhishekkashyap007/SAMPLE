import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Loginpage() {
    const fst=30;
    const {register,handleSubmit,formState:{errors}} = useForm()
    const myinputdata=(d)=>{
        console.log(d);
    }
    



    return (
        <form onSubmit={handleSubmit(myinputdata)}>
        <div classname='container mt-3'>
            <div className='row justify-content-center'>
                <div className='col-md-5 p-5 bg-info rounded shadow'>
                    <div className='container-fluid'>
                        <div className='row text-white'>
                            <div className='col-12 text-center pb-3'>
                                <p style={{textShadow:'2px 2px 5px black',fontSize:`${fst}px`}}>Welcome to Login Page</p>
                            </div>
                            <div className='col-12'>
                                <div className="mb-3">
                                    <label  className="form-label">Email address</label>
                                    <input type="email" className="form-control" {...register("email",{required:true})}/>
                                    {errors.email && <p className='text-danger'>Email is error</p>}
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="mb-3">
                                    <label  className="form-label">Password</label>
                                    <input type="Password" className="form-control" {...register("pass",{required:true,minLength:5})}/>
                                    {/* {errors.pass && <p className='text-danger'>Password is error</p>} */}
                                    {errors.pass?.type==="required" && <p className='text-danger'>Password is required</p>}
                                    {errors.pass?.type==="minLength" && <p className='text-warning'>minimum 5 character length required</p>}
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                <div className="mb-3">
                                    
                                    <button type="submit" className='btn btn-success shadow'>Login</button>
                                    <Link className='btn btn-outline-warning shadow ms-3' to='registor'>Registor</Link>
                                    <Link className='btn btn-outline-warning shadow ms-3' to='landing'>landing</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    )
}

export default Loginpage
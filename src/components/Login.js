import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-6 col-md-3">
                        <form className='form-container'>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name='password' className="form-control" id="exampleInputPassword1" autoComplete='off' />
                            </div>

                            <div className='text-center'>
                                <button type="submit" className="btn btn-dark btn-block mb-3">Submit</button>
                            </div>
                            <div>
                                <span className='fw-bold'>Not Register?
                                    <NavLink to='/register' className='link p-2' >
                                        Create new account
                                    </NavLink>
                                </span>
                            </div>


                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
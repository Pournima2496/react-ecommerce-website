import React from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {

    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-6 col-md-3">
                        <form className='form-container'>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" name='name' className="form-control" id="exampleInput" autoComplete='off' />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name='password' className="form-control" id="exampleInputPassword1" autoComplete='off' />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" name='cPassword' className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" autoComplete='off' />
                            </div>

                            <div className='text-center'>
                                <button type="submit" className="btn btn-dark btn-block mb-3" >Submit
                                </button>
                            </div>
                            <div>
                                <span className='fw-bold'>Already have an account?
                                    <NavLink to='/login' className='link p-2' >
                                        Login
                                    </NavLink>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
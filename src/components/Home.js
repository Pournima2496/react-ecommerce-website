import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div className='Hero'>
            <div className="card bg-dark text-light border-0">
                <img src="/images/bg.jpg" className="card-img" alt="..." height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SESSION ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECKOUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
        <Products/>
        </div>
    )
}

export default Home
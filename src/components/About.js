import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className="container my-4 py-4">
       
        <div className="row">

            <div className="col-md-6 p-4">
                <h1 className=' fw-bolder text-center justify-content-center'>About Us</h1>
                <p className="lead p-3 mb-4"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque explicabo nihil ipsa. Perspiciatis molestias aperiam ullam, ab doloribus distinctio voluptatem libero eligendi hic assumenda et sequi, iusto laboriosam exercitationem ipsa officiis voluptatibus deleniti architecto praesentium reprehenderit placeat modi.  <br /> &nbsp; Ullam, ipsam ipsum nulla iure excepturi, quibusdam dolores fugiat ut vel provident, delectus odit consequatur nemo? Quas non veritatis quisquam. Fugiat voluptas tempora culpa omnis sed neque autem magnam, natus molestias facere. Delectus corporis eaque doloribus.</p>
                <NavLink to='/contact' className='btn btn-outline-dark text-center'>Contact us</NavLink>

            </div>
            <div className="col-md-6 my-5 p-4" >
                <img src="/images/bg1.jpg" alt="" height='200px' width='200px' className='me-4 mb-4'/>
                <img src="/images/bg2.jpg" alt="" height='200px' width='200px' className='me-4 mb-4'/>
                <img src="/images/bg3.jpg" alt="" height='200px' width='200px' className='me-4 mb-4'/>
                <img src="/images/bg4.jpg" alt="" height='200px' width='200px' className='me-4 mb-4'/>

            </div>
        </div>
      </div>
    </>
  )
}

export default About

import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have Some Question?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center ">
                        <img src="/images/bg5.jpg" alt="contact us" height='400px' width='400px' />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div class="form-group mb-3">
                                <label for="exampleForm">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" autoComplete='off' />
                            </div>
                            <div class="form-group mb-3">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" autoComplete='off' />
                            </div>

                            <div class="form-group mb-3">
                                <label for="exampleFormControlTextarea1">Example textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <button type="submit" class="btn btn-dark">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
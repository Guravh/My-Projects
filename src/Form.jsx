import React from 'react'

const Form = () => {
  return (
    <>
    <div className="container d-flex flex-column"style={{height:"40vh"}}>
    <div className="row">
        <div className="col-5 d-flex flex-column justify-content-between" style={{height:"40vh",marginLeft:"60px"}}>
            <h1>Be updated!</h1>
            <input type="text" placeholder='FirstName' style={{width:"50%"}} />
            <input type="text" placeholder='LastName'  style={{width:"50%"}}/>
            <input type="text" placeholder='Email Subject'style={{width:"50%"}}/>
           <textarea name="" id="" placeholder='Write something here' style={{height:"10vh",width:"50%"}}></textarea>
            <button className='btn bg-dark' style={{color:"white",width:"50%"}}>Submit Email</button>
        </div>
        <div className="col-3">
            <img src="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" style={{height:"40vh"}}/>
        </div>
    </div>
    </div>
    <hr />
    </>
  )
}

export default Form
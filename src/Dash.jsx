import React from 'react'

const Dash = () => {
  return (
    <>
    <div className="row p-4">
        <div className="col d-flex flex-column align-items-center" style={{width:"50%"}}>
            <h1 style={{marginRight:"-7%",fontFamily:"serif",fontWeight:"bold"}}>Travel To</h1>
            <h1 style={{marginRight:"-12%",fontFamily:"serif",fontWeight:"bold"}}>your dream</h1>
            <h1 style={{marginRight:"-10%",fontFamily:"serif",fontWeight:"bold"}}>destination</h1>
            <span className='p-4' style={{width:"50%",marginRight:"-31%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum est ratione culpa iusto commodi volupt itaque alias?</span>
            <button className='btn p-2 bg-dark' style={{color:"white",marginRight:"0%"}}>Reserve Ticket</button>
        </div>
        <div className="col">
            <img src="https://i.natgeofe.com/n/cfa19a0d-eff0-4628-8fdd-2ad8d66845dd/mountain-range-appenzell-switzerland.jpg" alt=""  style={{height:"40vh",borderRadius:"5px"}}/>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Dash
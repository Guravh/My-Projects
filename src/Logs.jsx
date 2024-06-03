import React from 'react'

const Logs = () => {
  return (
    <>
    <div className="row">
        <div className="col d-flex flex-column border justify-content-center align-items-center bg-dark">
            <h1 style={{color:"white"}}>Create a Memory</h1>
            <h1 style={{color:"white"}}>to remember</h1>
            <span className='p-4' style={{width:"30%",textAlignLast:"center",color:"white"}}>Lorem ipsum dolor sit, Lorem ipsum dolor sit amet. amet consectetur adipisicing elit. Lorem, ipsum. Dolor blanditiis nisi dolorum, eos exercitationem culpa.</span>
           <div className="button p-2"> <button className='btn border-light'style={{color:"white"}}>My Travel Logs</button></div>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Logs
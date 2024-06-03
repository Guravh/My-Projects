import React from 'react'

const Nav = () => {
  return (
    <>
    <div className="nav sticky-top bg-light" style={{height:"30%"}}>
     <ul className='d-flex w-50 justify-content-between' style={{marginTop:"30px",marginLeft:"10%"}}>
      <li style={{fontFamily:"sans-serif",listStyle:"none",cursor:"pointer"}}>Home</li>
      <li style={{fontFamily:"sans-serif",listStyle:"none",cursor:"pointer"}}>Guides</li>
      <li style={{fontFamily:"sans-serif",listStyle:"none",cursor:"pointer"}}>Flights</li>
      <li style={{fontFamily:"sans-serif",listStyle:"none",cursor:"pointer"}}>About</li>
     </ul>
     <button className='btn border-dark h-25 fw-bold'style={{marginTop:"22px",marginLeft:"16%",fontFamily:"sans-serif"}}>Contact us</button>
    </div>
    <hr />
    </>
  )
}

export default Nav
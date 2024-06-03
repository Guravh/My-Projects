import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="row" style={{backgroundColor:"#efefef"}}>
        <div className="col d-flex flex-column justify-content-center align-items-center">
            <h1>My Log</h1>
            <h1>Travels</h1>
        </div>
        <div className="col">
            <span>Quick Links</span>
            <div className="links d-flex p-3">
                <ul className='p-3'style={{listStyle:"none",cursor:"pointer"}}>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>My travel Logs</li>
                </ul>
                <ul className='p-3' style={{listStyle:"none",cursor:"pointer"}}>
                    <li>Travels</li>
                    <li>Promo Flights</li>
                    <li>Travel Routes</li>
                </ul>
                <ul className='p-3' style={{listStyle:"none",cursor:"pointer"}}>
                    <li>Recommendations</li>
                    <li>Guides</li>
                    <li>Blogs</li>
                </ul>
                <ul className='p-3' style={{listStyle:"none",cursor:"pointer"}}>
                    <li>Mission Statement</li>
                    <li>The Team</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
        <span style={{marginLeft:"700px",padding:"10px"}}>2021-2022 My Log Travels.All Rights Reserved</span>
    </div>
    </>
  )
}

export default Footer
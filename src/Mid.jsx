import React from "react";

const Mid = () => {
  return (
    <>
      <div className="row bg-dark">
        <div className="col-5 d-flex flex-column"style={{height:"40vh"}}>
            <div className="head pb-4" style={{marginLeft:"180px"}}>
          <h2 style={{color:"white",fontFamily:"serif"}}>Choose anywhere</h2>
          <h2 style={{color:"white",fontFamily:"serif"}}>you'd like to be</h2>
          </div>
          <div className="sec1"  style={{marginLeft:"180px"}}>
          <h4 style={{color:"white"}}>Lorem,ipsum dolor</h4>
          <p style={{color:"white"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            mollitia atque vero impedit, soluta pariatur in! Officia quod sit
            sequi, sint pariatur quidem, minima nulla libero perferendis commodi
            ipsam. Modi.
          </p>
          </div>
          <div className="sec2"  style={{marginLeft:"180px"}}>
          <h4 style={{color:"white"}}>Lorem,ipsum dolor.</h4>
          <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sint mollitia quae in inventore et atque earum quas voluptatum voluptatem! Corrupti id qui quis? Fugiat, sunt. Vitae eveniet hic quae?</p>
          </div>
        </div>
        <div className="col-6">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxbbD2pe_1QLKgmedGTjszBSG8LY1V_BDMvA&s" alt="" style={{height:"40vh",marginLeft:"100px"}}/>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Mid;

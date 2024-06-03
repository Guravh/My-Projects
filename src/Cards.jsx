import React from "react";

const Cards = () => {
  return (
    <>
      <div
        className="Main d-flex justify-content-evenly pt-5"
        style={{ height: "35vh" }}
      >
        <div className="card d-flex" style={{ width: "15%" }}>
          <img
            src="https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            style={{ height: "50%", width: "100%" }}
          />
          <h4 style={{fontFamily:"serif",fontWeight:"bold"}}>Lorem ipsum</h4>
          <h4  style={{fontFamily:"serif",fontWeight:"bold"}}>dolor sit amet</h4>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            recusandae?
          </span>
        </div>
        <div className="card d-flex" style={{ width: "15%" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgELY8RDqSbD-VS34SvIKX7oca6yNZdnKiTw&s"
            alt=""
            style={{ height: "50%", width: "100%" }}
          />
          <h4  style={{fontFamily:"serif",fontWeight:"bold"}}>Lorem ipsum</h4>
          <h4  style={{fontFamily:"serif",fontWeight:"bold"}}>dolor sit amet</h4>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            recusandae?
          </span>
        </div>
        <div className="card d-flex" style={{ width: "15%" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9h4fU35Nb2lGTCcT-GS1pVkWd5gqV0yegw&s"
            alt=""
            style={{ height: "50%", width: "100%" }}
          />
          <h4  style={{fontFamily:"serif",fontWeight:"bold"}}>Lorem ipsum</h4>
          <h4  style={{fontFamily:"serif",fontWeight:"bold"}}>dolor sit amet</h4>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            recusandae?
          </span>
        </div>
        <div className="card d-flex" style={{ width: "15%" }}>
          <img
            src="https://images.inc.com/uploaded_files/image/1920x1080/getty_472502990_122739.jpg"
            alt=""
            style={{ height: "50%", width: "100%" }}
          />
          <h4  style={{fontFamily:"serif",fontWeight:"bold"}}>Lorem ipsum</h4>
          <h4  style={{fontFamily:"serif",fontWeight:"bold"}}>dolor sit amet</h4>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            recusandae?
          </span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Cards;

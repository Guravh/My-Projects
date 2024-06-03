import React from 'react'

const Places = () => {
  return (
    <>
    <div className="row">
        <div className="col d-flex flex-column justify-content-center align-items-center">
            <div className="img" style={{paddingTop:"5%"}}>
            <img src="https://clipart-library.com/data_images/296198.png" alt="" style={{height:"10vh"}}/>
            </div>
            <h1 style={{fontFamily:"serif",fontWeight:"bold"}}>See places you've</h1>
            <h1 style={{fontFamily:"serif",fontWeight:"bold"}}><a href="" style={{fontFamily:"serif",fontStyle:"cursive",color:"black"}}>never</a> been before</h1>
            <span style={{fontWeight:"bold",paddingTop:"1%"}}>Lorem, ipsum dolor. | Lorem, ipsum dolor. | Lorem, ipsum dolor.</span>
        </div>
    </div>
    <div className="row d-flex justify-content-evenly" style={{marginTop:"100px"}}>
        <div className="col-5">
            <img src="https://cdn.britannica.com/72/11472-050-B9734C89/Bear-Hat-Mountain-Hidden-Lake-Montana-Glacier.jpg" alt="" style={{height:"60vh",marginLeft:"140px",width:"80%"}}/>
        </div>
        <div className="col-6 h-50">
            <img className='p-3' src="https://media.istockphoto.com/id/968630976/photo/colorful-landscape-with-high-himalayan-mountains-beautiful-curving-river-green-forest-blue-sky.jpg?s=612x612&w=0&k=20&c=cbrwE0pXqvS_GHEkWSQ7t6jaMbVVjvwqnagOLvNViZ8=" alt="" style={{height:"30vh",width:"60%",marginTop:"-16px"}}/>
            <div className="text d-flex">
                <div className="Head">
                    <h3 className='p-2' style={{textDecorationLine:"underline"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum maiores dignissimos commodi nulla, cupiditate sapiente!</h3>
                </div>
                <div className="info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolor repellendus odit maiores possimus neque voluptatibus quae architecto doloremque eligendi!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus porro, placeat incidunt officia odit eum fugit modi est maxime dolor.</p>
                    <button className='btn'>
                    <img src="https://static.thenounproject.com/png/582073-200.png" alt="" style={{height:"10vh",marginLeft:"180px"}} />
                </button>
                </div>
            </div>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Places
import React, { useState } from 'react';


export default function About(props){

const newStyle={
  color:props.mode==='dark'?'white':'black',
  backgroundColor:props.mode==='dark'?'black':'white'
}




return (
<div classNameNameName='smaller-margin' style={newStyle} >
<h1 style={{color:props.mode==='dark'?'white':'black',marginLeft:'10px'}}>About Us</h1>
<div className="accordion" id="accordionExample" style={newStyle}>
  <div className="accordion-item" style={newStyle}>
    <h2 style={newStyle} className="accordion-header" id="headingOne">
      <button style={newStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div  style={newStyle} id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={newStyle}>
        <strong style={newStyle}>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={newStyle}>
    <h2 className="accordion-header" id="headingTwo" style={newStyle}>
      <button style={newStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div style={newStyle} id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div style={newStyle} className="accordion-body">
        <strong style={newStyle}>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
</div>

)

}
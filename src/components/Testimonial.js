import React from 'react'
import Headmale from '../images/maleheadshot-min.jpg'
import Headfemale from '../images/femaleheadshot-min.jpg'

const Testimonial = () => {
  return ( 
    <div class="container">
    <div className ="  flex row m-4 ">{/* <div></div> JS file needs to be given a row col section dived equaly */}
   
    <div class="col">
        <h1>Testimonial</h1>
        <div>ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat.</div>
    <div className="  m-2 mt-5 flex row">
        <div class="col  ">
        <img  class="img-fluid Icons    " src={Headfemale} height="400px"></img>
        </div>
   
       <div class="col flex p-4">
       <h5>Jane Doe</h5>
        <div>CEO, Business Solutions</div>
       </div>
   
    </div>
            
        </div>
        <div class="col">
            <h1 classname="h1">Testimonial</h1>
        <div>ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat.</div>
<div className="  m-2 flex row mt-5">
        <div class="col  ">
        <img  class="img-fluid Icons    " src={Headmale} height="400px"></img>
        </div>
   
       <div class="col flex p-4">
       <h5>John Doe</h5>
        <div>CEO, Business Solutions</div>
       </div>
   
    </div>
            
        </div>

    </div>
    </div>
  )
}

export default Testimonial
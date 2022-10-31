import React from 'react'
import Climbing from '../images/climbingstairs-min.jpg'
const NextLevel = () => {
  return (
    <div className = "flex   text-white text-center align-center thumbnail">
       <img src={Climbing} className="img-fluid bg-contain Britness"></img>
       <div class="caption">
       <h1>LET'S BRING IT TO THE NEXT LEVEL</h1>
    <div>We're here to guide you in the right direction when it comes to improving technology and growing your business</div>
    <button className=" btn btn-transparent btn-outline-light mt-4 p-2 px-4 ">START TODAY</button>
      </div>

    
    </div>
  )
}

export default NextLevel
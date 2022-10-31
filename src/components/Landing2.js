import React from 'react'
import Businessmen from '../images/businessmen-min.jpg'

const Landing2 = () => {
  return (

        <div className=" flex   text-white   thumbnail "   >
        <img src={Businessmen} className="img-fluid bg-cover Britness"></img>
               <div class="caption p-5">
               <h1 class>
              
               LET'S CREATE SOMETHING CREAT TOGETHER
            </h1>
            
            <div>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas</div>


    <button type="button" className=" btn btn-transparent btn-outline-light  mt-4 p-2 px-4">CONTACT US</button>
               </div>
        
    
       
       
  
        </div>
  )
}

export default Landing2
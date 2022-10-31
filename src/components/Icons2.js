import React from 'react';
import Icondollar from '../icons/icon-dollar.svg';
import IconMail from '../icons/icon-mail.svg';
import IconLaptop from '../icons/icon-laptop.svg';
import IconChart from '../icons/icon-chart.svg';

const Icons2 = () => {
  return (
    <div class="container p-5" >

 
    <div className="  flex row ">
      <div className="row-cols-md-4 col alignI alignT  row ">
  
            <div class="m-2">
            <img src={IconChart} class=" img-fluid col" alt="s"></img>
            <h5 class="text-brown">75% Growth</h5>
            </div>
           
                <div class="m-2">
                         
        <img src={Icondollar} class=" img-fluid col "  ></img>    
              <h5 class="text-brown">115% PROFIT</h5>
                </div>

        <div class="w-100"></div>
       
          <div class="m-2">
          <img src={IconLaptop} class=" img-fluid"></img>
          <h5 class="text-brown">32% SAVINGS</h5>
          </div>
          <div class="m-2">
          <img src={IconMail} class=" img-fluid"></img>   
          <h5 class="text-brown">24/7 SUPPORT</h5>
          </div>
     
  

       

  
    </div>
   

    
    
    <div className=" col ">
      
        <h2>We'll Help You Create a Plan</h2>
        <div>At vero eos et accusamus et lusto Odio dignissimos
ducimus qui blanditiis praesentium voluptatum
deleniti atque corrupti quos dolores et quas molestias
excepturi sint occaecati cupiditate non provident,
similique sunt in culpa qui officia deserunt mollitia
animi, id est laborum et dolorum fuga.</div>
</div>
    </div>
    </div>
  )
}

export default Icons2
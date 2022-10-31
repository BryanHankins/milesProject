import React from 'react'
import TeamCol from '../images/teamcollaborating-min.jpg'
import MeetingRoom from '../images/meetingroom-min.jpg'

const Goals = () => {
  return (
    <div className=" container   ">
        <div className="flex  row row-cols-md-2 p-5  ">
         
          <img src={TeamCol} className=" img-fluid    "></img>
         
          <div classname="col">
         
           <h3 className =" ">
        Goals We can Help You Achieve </h3>

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 

          </div>
        
          

</div>
        

<div className="  flex  row row-cols-md-2  p-5   ">

          
<div class="p-5  flex">
<h3 className="">It All Starts With Strategy</h3>
        Temporibus autem quibusdam et aut officiis debitis
aut rerum necessitatibus saepe eveniet ut et
voluptates repudiandae sint et molestiae non
recusandae. Itaque earum rerum hic tenetur a
sapiente delectus, ut aut reiciendis voluptatibus.
    
    </div>
<img src={MeetingRoom} clasName="img-fluid  "></img>
        </div>
        
 

    </div>
          
  )
}

export default Goals
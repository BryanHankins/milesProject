import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedinIn , faGoogle  , faPinterest,faReddit ,faDropbox} from '@fortawesome/free-brands-svg-icons'

import React from 'react'

const Footer = () => {
  return (
    <div class="bg-dark  text-white py-3 text-center">
    <div classname="bg-light  flex ">

  <a class="p-2 text-white">
<FontAwesomeIcon icon={faFacebook} size="lg"/>
</a>
<a className="p-2 text-white">
<FontAwesomeIcon icon={faTwitter} size="lg"/>
</a>
  <a className="p-2 text-white">
  
  <FontAwesomeIcon icon={faLinkedinIn} size="lg"/>

  </a>
<a  className="p-2 text-white">
<FontAwesomeIcon icon={faGoogle} size="lg"/>
</a>
<a className="p-2 text-white">

<FontAwesomeIcon icon={faPinterest} size="lg"/>
</a>
<a className="p-2 text-white">

<FontAwesomeIcon icon={faReddit} size="lg"/>
</a>


  
<a  className="p-2 text-white">
<FontAwesomeIcon icon={faDropbox} size="lg"/>
</a>

  


 
       

    </div>
    <div>
            Company Title @ 2020. All Rights Reserved </div>
      <div>Website Deisgn by MilesTechnologies.com | Sitemap | Privacy Policy</div>
      </div>
  )
}

export default Footer
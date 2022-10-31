import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Testsd from './components/Testsd'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Icons1 from './components/Icons1'
import Goals from './components/Goals'
import Icons2 from './components/Icons2'
import Landing2 from './components/Landing2'
import Testimonial from './components/Testimonial'
import NextLevel from './components/NextLevel'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App fs-6 ">
    
    <Navbar/>
    {/* <Testsd/> */}
    <Landing/>
    <Icons1/>
    <Goals/>
    <Landing2/>
    <Icons2/>
    <Testimonial/>
    <NextLevel/>
    <Footer/>

    </div>
  );
}

export default App;

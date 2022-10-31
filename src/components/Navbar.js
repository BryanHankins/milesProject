import React from 'react'

const Navbar = () => {
  return (
    <div classname="flex">


<nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div class="container">
    <a class="navbar-brand" href="#">
    <a class="navbar-brand   p-2  text-white h5" href="#">LOGO</a>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item pe-5 ">
        <a class="nav-link text-white" href="#">About </a>
      </li>
      <li class="nav-item pe-5">
        <a class="nav-link  text-white" href="#">Who We Are</a>
      </li>
      <li class="nav-item pe-5 ">
        <div class="nav-link text-white" href="#">What We Do </div>
      </li>
      <li class="nav-item pe-5">
        <div class="nav-link text-white" href="#">Contact </div>
      </li>
     
    </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
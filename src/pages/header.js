import React from "react";
// import { nav } from "react-router-dom";

function Header() {
  return (
    <React.Fragment id="header" class="fixed-top">
        <div class="container-fluid d-flex justify-content-between align-items-center">

<h1 class="logo me-auto me-lg-0"><a href="index.html">Kelly</a></h1>

<a href="index.html" class="logo"><img src="assets/img/logo512.png" alt="" class="img-fluid"/></a>

<nav id="navbar" class="navbar order-last order-lg-0">
  <ul>
  <li class="active">
      <a href="/">Home </a></li>
   <li> <a href="/about">About </a>  </li>
    <li><a href="resume.html">Resume</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="portfolio.html">Portfolio</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <i class="bi bi-list mobile-nav-toggle"></i>
</nav>
</div>
</React.Fragment>
    
  );
}
export default Header;
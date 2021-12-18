import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <React.Fragment>

            <header id="header" class="fixed-top">
                 <div class="container-fluid d-flex justify-content-between align-items-center">

                     <h1 class="logo me-auto me-lg-0"><a href="index.html">Kelly</a></h1>
      
                        <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>

                        <nav id="navbar" class="navbar order-last order-lg-0">
                          <ul>
                               <li class="active"><Link to="/">Home </Link></li>
                              <li> <Link to="/about">About </Link>  </li>
                              <li><a href="resume.html">Resume</a></li>
                              <li><a href="services.html">Services</a></li>
                              <li><a href="portfolio.html">Portfolio</a></li>
                              <li><a href="contact.html">Contact</a></li>
                         </ul>
                         <i class="bi bi-list mobile-nav-toggle"></i>
                         </nav>
                 </div>

          </header>
          <section id="hero" class="d-flex align-items-center">
             <div class="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
               <h1>Kelly Adams</h1>
                <h2>I'm a professional illustrator from San Francisco</h2>
               <a href="about.html" class="btn-about">About Me</a>
            </div>
             </section>

           <footer id="footer">
               <div class="container">
                    <div class="copyright">
                     &copy; Copyright <strong><span>Kelly</span></strong>. All Rights Reserved
                   </div>
                    <div class="credits">
                       Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                   </div>
              </div>
           </footer>
           {/* <div id="preloader"></div> */}
             <a href=" " class="back-to-top d-flex align-items-center justify-content-center">
            <i class="bi bi-arrow-up-short"></i></a>

 




        </React.Fragment>

            
            


       


        
        
    )
}
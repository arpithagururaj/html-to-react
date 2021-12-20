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
  <li class="active">
      <Link to="/">About </Link></li>
   <li> <Link to="/home">Home </Link>  </li>
    <li><a href="resume.html">Resume</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="portfolio.html">Portfolio</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <i class="bi bi-list mobile-nav-toggle"></i>
</nav>



</div>

</header>

<main id="main">

<section id="about" class="about">
<div class="container" data-aos="fade-up">

  <div class="section-title">
    <h2>About</h2>
    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
  </div>

  <div class="row">
    <div class="col-lg-4">
      <img src="assets/img/about.jpg" class="img-fluid" alt=""/>
    </div>
    <div class="col-lg-8 pt-4 pt-lg-0 content">
      <h3>Illustrator &amp; UI/UX Designer</h3>
      <p class="fst-italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <div class="row">
        <div class="col-lg-6">
          <ul>
            <li><i class="bi bi-rounded-right"></i> <strong>Birthday:</strong> 1 May 1995</li>
            <li><i class="bi bi-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
            <li><i class="bi bi-rounded-right"></i> <strong>Phone:</strong> +123 456 7890</li>
            <li><i class="bi bi-rounded-right"></i> <strong>City:</strong> City : New York, USA</li>
          </ul>
        </div>
        <div class="col-lg-6">
          <ul>
            <li><i class="bi bi-rounded-right"></i> <strong>Age:</strong> 30</li>
            <li><i class="bi bi-rounded-right"></i> <strong>Degree:</strong> Master</li>
            <li><i class="bi bi-rounded-right"></i> <strong>PhEmailone:</strong> email@example.com</li>
            <li><i class="bi bi-rounded-right"></i> <strong>Freelance:</strong> Available</li>
          </ul>
        </div>
      </div>
      <p>
        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
        Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
      </p>
    </div>
  </div>

</div>
</section>

<section id="skills" class="skills">
<div class="container" data-aos="fade-up">

  <div class="section-title">
    <h2>Skills</h2>
    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
  </div>

  <div class="row skills-content">

    <div class="col-lg-6">

      <div class="progress">
        <span class="skill">HTML <i class="val">100%</i></span>
        <div class="progress-bar-wrap">
          <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div class="progress">
        <span class="skill">CSS <i class="val">90%</i></span>
        <div class="progress-bar-wrap">
          <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div class="progress">
        <span class="skill">JavaScript <i class="val">75%</i></span>
        <div class="progress-bar-wrap">
          <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

    </div>

    <div class="col-lg-6">

      <div class="progress">
        <span class="skill">PHP <i class="val">80%</i></span>
        <div class="progress-bar-wrap">
          <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div class="progress">
        <span class="skill">WordPress/CMS <i class="val">90%</i></span>
        <div class="progress-bar-wrap">
          <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div class="progress">
        <span class="skill">Photoshop <i class="val">55%</i></span>
        <div class="progress-bar-wrap">
          <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

    </div>

  </div>

</div>
</section>


<section id="facts" class="facts">
<div class="container" data-aos="fade-up">

  <div class="section-title">
    <h2>Facts</h2>
    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
  </div>

  <div class="row counters">

    <div class="col-lg-3 col-6 text-center">
      <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
      <p>Clients</p>
    </div>

    <div class="col-lg-3 col-6 text-center">
      <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
      <p>Projects</p>
    </div>

    <div class="col-lg-3 col-6 text-center">
      <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter"></span>
      <p>Hours Of Support</p>
    </div>

    <div class="col-lg-3 col-6 text-center">
      <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter"></span>
      <p>Hard Workers</p>
    </div>

  </div>

</div>
</section>

<section id="testimonials" class="testimonials">
<div class="container" data-aos="fade-up">

  <div class="section-title">
    <h2>Testimonials</h2>
    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
  </div>

  <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
    <div class="swiper-wrapper">

      <div class="swiper-slide">
        <div class="testimonial-item">
          <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""/>
          <h3>Saul Goodman</h3>
          <h4>Ceo &amp; Founder</h4>
          <p>
            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
      </div>

      <div class="swiper-slide">
        <div class="testimonial-item">
          <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt=""/>
          <h3>Sara Wilsson</h3>
          <h4>Designer</h4>
          <p>
            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
      </div>

      <div class="swiper-slide">
        <div class="testimonial-item">
          <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt=""/>
          <h3>Jena Karlis</h3>
          <h4>Store Owner</h4>
          <p>
            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
      </div>

      </div>
    <div class="swiper-pagination"></div>
  </div>

</div>
</section>
</main>
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
{/* <script src="assets/vendor/purecounter/purecounter.js"></script>
<script src="assets/vendor/aos/aos.js"></script>
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
<script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
<script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
<script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
<script src="assets/vendor/php-email-form/validate.js"></script>


<script src="assets/js/main.js"></script> */}


  </React.Fragment>
    )
}
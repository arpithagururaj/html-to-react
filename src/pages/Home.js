import React from "react";
import Footer from "./footer";
import Header from "./header";

// import { Link } from "react-router-dom";

export default function Home(){
    return(
      <React.Fragment>
<Header/>
<section id="hero" class="d-flex align-items-center">
    {/* <div class="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100"> */}
    <div style={{ flex:1, textAlign : "center", justifyContent : "center"}}>
     <div> <h1>Kelly Adams</h1></div>
      <div><h2>I'm a professional illustrator from San Francisco</h2></div>
      <a href="about.html" class="btn-about">About Me</a>
      </div>
    {/* </div> */}
  </section>
  
  

  
  <script src="assets/vendor/purecounter/purecounter.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>


  <script src="assets/js/main.js"></script>

{/* <main id="main">

<section id="about" className="about">
<div className="container" data-aos="fade-up">

  <div className="section-title">
    <h2>About</h2>
    <p style = {{color:"black"}}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
  </div>

  <div className="row">
    <div className="col-lg-4">
      <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
    </div>
    <div className="col-lg-8 pt-4 pt-lg-0 content">
      <h3>Illustrator &amp; UI/UX Designer</h3>
      <p className="fst-italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <div className="row">
        <div className="col-lg-6">
          <ul>
            <li><i className="bi bi-rounded-right"></i> <strong>Birthday:</strong> 1 May 1995</li>
            <li><i className="bi bi-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
            <li><i className="bi bi-rounded-right"></i> <strong>Phone:</strong> +123 456 7890</li>
            <li><i className="bi bi-rounded-right"></i> <strong>City:</strong> City : New York, USA</li>
          </ul>
        </div>
        <div className="col-lg-6">
          <ul>
            <li><i className="bi bi-rounded-right"></i> <strong>Age:</strong> 30</li>
            <li><i className="bi bi-rounded-right"></i> <strong>Degree:</strong> Master</li>
            <li><i className="bi bi-rounded-right"></i> <strong>PhEmailone:</strong> email@example.com</li>
            <li><i className="bi bi-rounded-right"></i> <strong>Freelance:</strong> Available</li>
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

<section id="skills" className="skills">
<div className="container" data-aos="fade-up">

  <div className="section-title">
    <h2>Skills</h2>
    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
  </div>

  <div className="row skills-content">

    <div className="col-lg-6">

      <div className="progress">
        <span className="skill">HTML <i className="val">100%</i></span>
        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">CSS <i className="val">90%</i></span>
        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">JavaScript <i className="val">75%</i></span>
        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

    </div>

    <div className="col-lg-6">

      <div className="progress">
        <span className="skill">PHP <i className="val">80%</i></span>
        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">WordPress/CMS <i className="val">90%</i></span>
        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">Photoshop <i className="val">55%</i></span>
        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

    </div>

  </div>

</div>
</section>


<section id="facts" className="facts">
<div className="container" data-aos="fade-up">

  <div className="section-title">
    <h2>Facts</h2>
    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
  </div>

  <div className="row counters">

    <div className="col-lg-3 col-6 text-center">
      <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
      <p>Clients</p>
    </div>

    <div className="col-lg-3 col-6 text-center">
      <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
      <p>Projects</p>
    </div>

    <div className="col-lg-3 col-6 text-center">
      <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
      <p>Hours Of Support</p>
    </div>

    <div className="col-lg-3 col-6 text-center">
      <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
      <p>Hard Workers</p>
    </div>

  </div>

</div>
</section>

<section id="testimonials" className="testimonials">
<div className="container" data-aos="fade-up">

  <div className="section-title">
    <h2>Testimonials</h2>
    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
  </div>

  <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
    <div className="swiper-wrapper">

      <div className="swiper-slide">
        <div className="testimonial-item">
          <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
          <h3>Saul Goodman</h3>
          <h4>Ceo &amp; Founder</h4>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="testimonial-item">
          <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
          <h3>Sara Wilsson</h3>
          <h4>Designer</h4>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
      </div>

      <div className="swiper-slide">
        <div className="testimonial-item">
          <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
          <h3>Jena Karlis</h3>
          <h4>Store Owner</h4>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
      </div>

      </div>
    <div className="swiper-pagination"></div>
  </div>

</div>
</section>
</main>
<Footer/> */}
<Footer />

  </React.Fragment>
    )
}
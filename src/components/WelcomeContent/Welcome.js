import React from "react";
import "./Welcome.css";
import primary from '../../images/primary.jpg';
import ssc from '../../images/ssc.png';
import lab from '../../images/lab.png';
import slide from '../../images/bg-1.png';
import slide1 from '../../images/bg-2.jpg';
import slide2 from '../../images/bg-3.png';
// import graduate from '../../images/graduate.png';
import SlideBoard from "./SlideBoard/SlideBoard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faTrophy, faChalkboard, faUserEdit, faChalkboardTeacher, faBookReader, faBusAlt } from '@fortawesome/free-solid-svg-icons';

const Welcome = () => {
  return (
    <section className="container mt-2">
      <div className="row">
        <div className="col-md-8 bg-light">
          {/* <div className="bg-image"> */}

            {/* Carusel  */}
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
    <img className="img-fluid slider-image my-2" src={slide} alt=""/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some represebangladesh slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <img className="img-fluid slider-image my-2" src={slide1} alt=""/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
    <img className="img-fluid slider-image my-2" src={slide2} alt=""/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
</div>
            {/* Carusel  */}
            {/* <div className="bg-image-text">
              <h5>Group Study in Library</h5>
              <p>
                Web have a big library , Students can be maked their Group
                study.
              </p>
            </div> */}
          {/* </div> */}
          
          <div className="bg-white">
          <p className="nav-newsText mb-2 mt-5">
            Welcome to Education School and College
          </p>
            <div className="text-justify p-4 bg-white welcomeText">
              <p className="" >
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable. Lorem ipsum dolor sit amet, consectetur Adipisicing
                elit. Quibusdam eligendi expedita, provident cupiditate in
                excepturi. There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some form,
                by injected humour, or randomised words which don't look even
                slightly believable. Lorem ipsum dolor sit amet, consectetur
                Adipisicing elit. Quibusdam eligendi expedita, provident cupiditate
                in excepturi. which don't look even slightly believable. Lorem ipsum
                dolor sit amet, consectetur slightly believable. Lorem ipsum dolor sit amet, consectetur
                Adipisicing elit. Quibusdam eligendi expedita, provident cupiditate
                in excepturi. which don't look even slightly believable. Lorem ipsum
                dolor sit amet, consectetur  Lorem ipsum dolor sit amet. which don't look even slightly believable. Lorem ipsum
                dolor sit amet. which don't look even
                
              </p>
              <div className="text-end my-3">
                        <a  href="">Learn More</a>
                    </div>
            </div>
          </div>

            <div className="courses mb-3 mt-5">
                <p className="nav-newsText">Popular Courses</p>

                <div className="row ">
                  <div className="col-md-4 course-card">
                    <img className="img-fluid  my-2" src={primary} alt=""/>
                    <h5 className="course-title">Primary Courses</h5>
                    <ul>
                      <li>Bangla Medium</li>
                      <li>English Medium</li>
                      <li>Technical</li>
                    </ul>
                    <button className="buttonText">Go Details</button>
                  </div>    

                  <div className="col-md-4 course-card">
                    <img className="img-fluid my-2" src={ssc} alt=""/>
                    <h5 className="course-title">Secondary Courses</h5>
                    <ul>
                      <li>Bangla Medium</li>
                      <li>English Medium</li>
                      <li>Technical</li>
                    </ul>
                    <button className="buttonText">Go Details</button>
                  </div>
                  
                  <div className="col-md-4 course-card">
                    <img className="img-fluid my-2" src={lab} alt=""/>
                    <h5 className="course-title">College Courses</h5>
                    <ul>
                      <li>Science</li>
                      <li>Business Studies</li>
                      <li>Humanities</li>
                    </ul>
                    <button className="buttonText">Go Details</button>
                  </div>
                </div>
            </div>


                <div className="best-blog bg-light">

                    <p className="nav-newsText">Why We Are The Best?</p>

                    <div className="row best-bg">
                      <div className="col-md-4 d-flex align-items-end">
                        {/* <img className="img-fluid" src={graduate} alt="" /> */}
                      </div>

                      <div className="col-md-4 best-card">

                        <FontAwesomeIcon className="icon fa-2x" icon={faChalkboardTeacher} />
                        <h4>Experience Teachers</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur</p>

                          <FontAwesomeIcon className="icon fa-2x" icon={faChalkboard} />
                          <h4>Digital Classroom</h4>
                          <p>Lorem ipsum dolor sit, amet consectetur</p>

                      </div>

                      <div className="col-md-3 best-card">

                        <FontAwesomeIcon className="icon fa-2x" icon={faBookReader} />
                        <h4>Big Library</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur</p>

                          <FontAwesomeIcon className="icon fa-2x" icon={faBusAlt} />
                          <h4>Transportation</h4>
                          <p>Lorem ipsum dolor sit, amet consectetur</p>
                      </div>

                    </div>
            
                </div>
                          
        </div>


        <div className="col-md-4">
          <SlideBoard/>
        </div>

      </div>
    </section>
  );
};

export default Welcome;

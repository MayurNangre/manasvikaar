import React from "react";
import { heroimages } from "../images";
import Slider from "../components/Slider";
import Services from "../components/Services";
import Card from "../components/Card";

function Home() {
  return (
    <div>
    {/* main hero : section */}
      <section className="main-hero">
        <div className="sub-main-hero">
          <div className="hero-main-section">
            {/* Main slider */}
            <div className="main-hero-slider">
              <div className="main-hero-slider-bgimage img-bounce"></div>
              <div className="sub-main-hero-slider row">
                {/* 1st half side of slider */}
                <div className="col-6 sub-main-hero-content d-flex align-items-center">
                  <div className="sub-main-hero-content-heading">
                    <div>
                      <div className="headingimg">
                        <p>100% Positive Result</p>
                      </div>
                      <h2 className="main-slider-three__title">
                        We’re Ready To <br />
                        Listen Your <span>Issues</span>
                      </h2>
                    </div>
                    <div class="main-slider-three__btn-founder-box">
                      <a
                        href="make-appointment.html"
                        class="main-slider-two__btn-one thm-btn"
                      >
                        Make an Appointment
                      </a>
                      <div class="main-slider-three__founder-box">
                        {/* <h4 class="main-slider-three__founder-name">Christine</h4> */}
                        <p class="main-slider-three__founder-sub-title">
                          Christine Eve - Founder
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2nd half side of slider */}
                <div className="col-6 sub-main-hero-content">
                  <div className="starimg zoominout spin">
                    <img src={heroimages.starimg} />
                  </div>
                  <div className="star2img img-bounce">
                    <img src={heroimages.star2img} />
                  </div>
                  <div className="sub-main-hero-content-banner">
                    <img src={heroimages.mainbanner} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section>
        <Slider />
      </section>

      {/* About Three : start */}

      <section className="about-three">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="about-three__left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">
                    welcome to delogis
                  </span>
                  <h2 className="section-title__title">
                    Providing the Best <span>Quality</span>
                    Psycological Therapies
                  </h2>
                </div>
                <p className="about-three__text">
                  At the Good Samaritan Society, you aren’t just a custoer. We
                  believe you’re someone who deserves to simply free text
                  available in be treated with respect, dignity and compassion.
                </p>
                <div className="about-three__points-box">
                  <ul className="about-three__points-list list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>Bipolar Disorders</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>Stress Management</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>Depression Therapy</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>Family Therapy</p>
                      </div>
                    </li>
                  </ul>
                  <ul className="about-three__points-list list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>Anxiety Therapy</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>Executive Coaching</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>Relationship Therapy</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>Brief Therapy</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="about-three__btn-box">
                  <a
                    href="make-appointment.html"
                    className="about-three__btn thm-btn"
                  >
                    Make an Appointment
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="about-three__right">
                <div className="about-three__img-box">
                  <div className="about-three__img">
                    <img src={heroimages.aboutthreeimg1} alt="" />
                  </div>
                  <div className="about-three__img-2">
                    <img src={heroimages.aboutthreeimg2} alt="" />
                    <div className="about-three__shape-1"></div>
                    <div className="about-three__video-link">
                      <a
                        href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                        className="video-popup"
                      >
                        <div className="about-three__video-icon">
                          <span className="fa fa-play"></span>
                          <i className="ripple"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Three : end */}


      {/* Services Three : start */}
      
      <section>
        <Services />
      </section>

      {/* Services Three : end */}

      <section>
        <Card/>
      </section>

    </div>
  );
}

export default Home;

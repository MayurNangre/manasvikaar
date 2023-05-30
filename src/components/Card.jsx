import React from "react";
import { services } from "../images";

function Card() {
  return (
    <div>
      <section className="feature-three">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 wow fadeInUp animated"
              data-wow-delay="100ms"
              style={{
                visibility: "visible",
                animationDelay: "100ms",
                animationName: "fadeInUp",
              }}
            >
              <div className="feature-three__single">
                <div className="feature-three__img-box">
                  <div className="feature-three__img">
                    <img src={services.feature1} alt="" />
                  </div>
                </div>
                <div className="feature-three__content">
                  <p className="feature-three__sub-title">COUPLE ISSUES</p>
                  <h3 className="feature-three__title">
                    <a href="services.html">
                      Every Journey Starts with the First
                    </a>
                  </h3>
                  <div className="feature-three__btn">
                    <a href="services.html">
                      <span className=""><i class="fa-solid fa-arrow-right fa-lg"></i></span>More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-6 col-lg-6 wow fadeInUp animated"
              data-wow-delay="200ms"
              style={{
                visibility: "visible",
                animationDelay: "100ms",
                animationName: "fadeInUp",
              }}
            >
              <div className="feature-three__single">
                <div className="feature-three__img-box">
                  <div className="feature-three__img">
                    <img src={services.feature2} alt="" />
                  </div>
                </div>
                <div className="feature-three__content">
                  <p className="feature-three__sub-title">COUPLE ISSUES</p>
                  <h3 className="feature-three__title">
                    <a href="services.html">
                      Scelerisque eleifend donec pretium
                    </a>
                  </h3>
                  <div className="feature-three__btn">
                    <a href="services.html">
                      <span className=""><i class="fa-solid fa-arrow-right fa-lg"></i></span>More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Card;

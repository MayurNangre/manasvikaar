import React from 'react'
import { heroimages } from '../images';

const Footer = () => {
  return (
    <div>
        <section class="cta-one">
            <div class="cta-one__shape-1 float-bob-x img-bounce">
                <img src={heroimages.footerctaimg} alt=""/>
            </div>
            <div class="container">
                <div class="cta-one__inner">
                    <p class="cta-one__text">Let’s open your heart story to us, We’ll listen to you</p>
                    <div class="cta-one__btn-box">
                        <a href="make-appointment.html" class="cta-one__btn thm-btn">Make an Appointment</a>
                    </div>
                </div>
            </div>
        </section>
        <footer className="footer text-center text-lg-start bg-light text-muted">
            <div className='upperfooter'>
              <div className='site-footer__shape-1 img-bounce'>
                  <img src={heroimages.footerimage}/>
              </div>
              <section className="container d-flex justify-content-center justify-content-lg-between text-light">
                <div className="me-5 d-none d-lg-block">
                  <span>Get connected with us on social networks:</span>
                </div>

                <div>
                  <a href="" className="me-4 text-reset">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="" className="me-4 text-reset">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="" className="me-4 text-reset">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="" className="me-4 text-reset">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="" className="me-4 text-reset">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="" className="me-4 text-reset">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </section>
            </div>

          <section className="mainfooter text-light">
            <div className="sub-mainfooter container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <div>
                    <img src={heroimages.footerlogo}/>
                  </div>
                  <p className='footer-widget__about-text'>
                  Best psychology & counseling to help you understand the problems.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="footer-widget__title text-uppercase fw-bold mb-4">
                    Products
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Angular</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">React</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Vue</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Laravel</a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="footer-widget__title text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Pricing</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Settings</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Orders</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Help</a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    info@example.com
                  </p>
                  <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                  <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p> */}
                  <div class="footer-widget__column footer-widget__newsletter">
                      <div class="footer-widget__title-box">
                          <h3 class="footer-widget__title">Newsletter</h3>
                      </div>
                      <p class="footer-widget__newsletter-text">Subscribe our newsletter to get latest updates
                      </p>
                      <form class="footer-widget__email-box" data-url="MC_FORM_URL">
                          <div class="footer-widget__email-input-box">
                              <input type="email" placeholder="Email address" name="email" fdprocessedid="oyop58"/>
                          </div>
                          <button type="submit" class="footer-widget__subscribe-btn thm-btn" fdprocessedid="oe1wn">Register
                              Yourself</button>
                      </form>
                      <div class="mc-form__response"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottomfooter border-top container text-center" style={{backgroundColor : 'rgba(0, 0, 0, 0.05)'}}>
              © 2021 Copyright : 
              <a class="text-reset fw-bold" href="https://mdbootstrap.com/"> by Company.com</a>
            </div>
          </section>
         


        </footer>
    </div>
  )
}

export default Footer;
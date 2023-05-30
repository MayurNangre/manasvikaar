import React from 'react'
import { services } from '../images';

function Services() {
   const backgroundImageStyle = {
      backgroundImage: 'url("/path/to/image.jpg")',
    };
  
  return (
    <div>
      <section className="services-three">
            <div className="services-three__bg-box">
                <div className="services-three__bg" style={backgroundImageStyle}></div>
            </div>
            <div className="container">
                <div className="services-three__top">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="services-three__left">
                                <div className="section-title text-left">
                                    <span className="section-title__tagline">Services we’re offering</span>
                                    <h2 className="section-title__title">Magical Therapy for <span>the</span>
                                        People Need Help</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="services-three__right">
                                <p className="services-three__text">Lorem ipsum dolor sit amet, con adipiscing elit tiam
                                    convallis elit id impedie. Quisq commodo simply free ornare tortor. If you are going
                                    to use a passage.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services-three__bottom">
                    <div className="row">
                        
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="100ms"
                        style={{visibility:'visible', animationDelay:'100ms', animationName:'fadeInUp'}}>
                            <div className="services-three__single">
                                <div className="services-three__img-box">
                                    <div className="services-three__img">
                                        <img src={services.services1} alt=""/>
                                    </div>
                                    <div className="services-three__icon">
                                        <span className=""><i class="fa-solid fa-heart"></i></span>
                                    </div>
                                </div>
                                <div className="services-three__content">
                                    <div className="services-three__content-inner">
                                        <div className="services-three__content-top">
                                            <h3 className="services-three__title"><a href="dating-relationship.html">Dating
                                                    &amp;
                                                    <br/> Relationship</a></h3>
                                            <p className="services-three__text">Scelerisque eleifend donec pretium
                                                vulputate
                                                sapien
                                            </p>
                                        </div>
                                        <div className="services-three__btn-box">
                                            <a href="dating-relationship.html" className="services-three__btn"><span className="icon-right-arrow"></span>More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="200ms" style={{visibility:'visible', animationDelay:'100ms', animationName:'fadeInUp'}}>
                            <div className="services-three__single">
                                <div className="services-three__img-box">
                                    <div className="services-three__img">
                                        <img src={services.services2} alt=""/>
                                    </div>
                                    <div className="services-three__icon">
                                        <span className=""><i class="fa-solid fa-chess-king"></i></span>
                                    </div>
                                </div>
                                <div className="services-three__content">
                                    <div className="services-three__content-inner">
                                        <div className="services-three__content-top">
                                            <h3 className="services-three__title"><a href="self-esteem-issues.html">Self
                                                    Esteem
                                                    <br/> Issues</a></h3>
                                            <p className="services-three__text">Scelerisque eleifend donec pretium
                                                vulputate
                                                sapien
                                            </p>
                                        </div>
                                        <div className="services-three__btn-box">
                                            <a href="self-esteem-issues.html" className="services-three__btn"><span className="icon-right-arrow"></span>More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="300ms" style={{visibility:'visible', animationDelay:'100ms', animationName:'fadeInUp'}}>
                            <div className="services-three__single">
                                <div className="services-three__img-box">
                                    <div className="services-three__img">
                                        <img src={services.services3} alt=""/>
                                    </div>
                                    <div className="services-three__icon">
                                        <span className=""></span>
                                    </div>
                                </div>
                                <div className="services-three__content">
                                    <div className="services-three__content-inner">
                                        <div className="services-three__content-top">
                                            <h3 className="services-three__title"><a href="family-psycology.html">Kids &amp;
                                                    Family
                                                    <br/> Psycology</a></h3>
                                            <p className="services-three__text">Scelerisque eleifend donec pretium
                                                vulputate
                                                sapien
                                            </p>
                                        </div>
                                        <div className="services-three__btn-box">
                                            <a href="family-psycology.html" className="services-three__btn"><span className="icon-right-arrow"></span>More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="400ms" style={{visibility:'visible', animationDelay:'100ms', animationName:'fadeInUp'}}>
                            <div className="services-three__single">
                                <div className="services-three__img-box">
                                    <div className="services-three__img">
                                        <img src={services.services4} alt=""/>
                                    </div>
                                    <div className="services-three__icon">
                                        <span className=""><i class="fa-solid fa-envelope"></i></span>
                                    </div>
                                </div>
                                <div className="services-three__content">
                                    <div className="services-three__content-inner">
                                        <div className="services-three__content-top">
                                            <h3 className="services-three__title"><a href="career-counseling.html">Life &amp;
                                                    Career
                                                    <br/> Counseling</a></h3>
                                            <p className="services-three__text">Scelerisque eleifend donec pretium
                                                vulputate
                                                sapien
                                            </p>
                                        </div>
                                        <div className="services-three__btn-box">
                                            <a href="career-counseling.html" className="services-three__btn"><span className="icon-right-arrow"></span>More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services;
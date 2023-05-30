import React from 'react'
import { heroimages, services } from '../images'
import { sliders } from '../images'

const Slider = () => {
  return (
    <div>
    <section className='main-slider'>
         <div className='container'>
            <div className='row'>
                  <div class="col-xl-4 col-lg-4 wow fadeInUp animated" data-wow-delay="100ms" style={{visibility:'visible',animationDelay:'100ms', animationName:'fadeInUp'}}>
                     <div class="feature-two__single">
                        <div class="feature-two__img-box">
                           <div class="feature-two__img">
                                 <img src={sliders.slider1} alt=""/>
                           </div>
                           <div class="feature-two__title-box">
                                 <h3><a href="services.html">Individual Therapy</a></h3>
                                 <div class="feature-two__icon">
                                    <span class="icon-account"></span>
                                 </div>
                           </div>
                           <div class="feature-two__hover-title-box">
                                 <h3><a href="services.html">Individual Therapy</a></h3>
                                 <p class="feature-two__hover-text">Lorem ipsum dolor sited is amet consectetur
                                    notted.</p>
                                 <div class="feature-two__hover-icon">
                                    <span class="icon-account"></span>
                                 </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 wow fadeInUp animated" data-wow-delay="100ms" style={{visibility:'visible',animationDelay:'100ms', animationName:'fadeInUp'}}>
                     <div class="feature-two__single">
                        <div class="feature-two__img-box">
                           <div class="feature-two__img">
                                 <img src={sliders.slider2} alt=""/>
                           </div>
                           <div class="feature-two__title-box">
                                 <h3><a href="services.html">Individual Therapy</a></h3>
                                 <div class="feature-two__icon">
                                    <span class="icon-account"></span>
                                 </div>
                           </div>
                           <div class="feature-two__hover-title-box">
                                 <h3><a href="services.html">Individual Therapy</a></h3>
                                 <p class="feature-two__hover-text">Lorem ipsum dolor sited is amet consectetur
                                    notted.</p>
                                 <div class="feature-two__hover-icon">
                                    <span class="icon-account"></span>
                                 </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 wow fadeInUp animated" data-wow-delay="100ms" style={{visibility:'visible',animationDelay:'100ms', animationName:'fadeInUp'}}>
                     <div class="feature-two__single">
                        <div class="feature-two__img-box">
                           <div class="feature-two__img">
                                 <img src={sliders.slider3} alt=""/>
                           </div>
                           <div class="feature-two__title-box">
                                 <h3><a href="services.html">Individual Therapy</a></h3>
                                 <div class="feature-two__icon">
                                    <span class="icon-account"></span>
                                 </div>
                           </div>
                           <div class="feature-two__hover-title-box">
                                 <h3><a href="services.html">Individual Therapy</a></h3>
                                 <p class="feature-two__hover-text">Lorem ipsum dolor sited is amet consectetur
                                    notted.</p>
                                 <div class="feature-two__hover-icon">
                                    <span class="icon-account"></span>
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

export default Slider
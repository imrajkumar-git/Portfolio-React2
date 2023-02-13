
import e from "../../Assets/e.jpg"
import t1 from "../../Assets/t1.png"
import t2 from "../../Assets/t2.png"
import t3 from "../../Assets/t3.png"
import t4 from "../../Assets/t4.png"
import { Col, Row } from "react-bootstrap";
import 'react-circular-progressbar/dist/styles.css';
import "./Experience.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 0.00009, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 0.009, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0.1, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
export const Experience = () =>{

    return (
        <section id="experience">
        <div class="experience background2">
        <div class="container">
          <div class="heading center">
            <div class="heading_top flex">
              <div class="line"></div>
              <h3> Employment & Education</h3>
              <div class="line"></div>

            </div>
            <div class="heading_bottom">
              <h2><span>My Experience Journey </span></h2>
            </div>
          </div>
    
    
          <div class="content flex">
            <div class="left">
              <img src={e} alt=""/>
            </div>
            <div class="right">
              <div class="timeline">
                <div class="line">
                </div>
                <div class="content content-1">
                  <section>
                    <i class="icon fas fa-briefcase"></i>
                    <div class="details">
                      <span> Present - 2020</span>
                      <h3>Product Manager / Google</h3>
                    </div>
                    <p> Understanding user needs and market trends: Product managers are responsible for conducting market research and gathering customer feedback to understand the needs and wants of the target audience.</p>
                  </section>
                </div>
    
                <div class="content content-1">
                  <section>
                    <i class="icon fas fa-graduation-cap"></i>
                    <div class="details">
                      <span> 2016 - 2018</span>
                      <h3>MS Degree / University of Manchester</h3>
                    </div>
                    <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </section>
                </div>
    
                <div class="content content-1">
                  <section>
                    <i class="icon fas fa-book-open"></i>
                    <div class="details">
                      <span> 2013 - 2016</span>
                      <h3>Lead UI Designer / Apple Inc.</h3>
                    </div>
                    <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </section>
                </div>
    
                <div class="content content-1">
                  <section>
                    <i class="icon fab fa-acquisitions-incorporated"></i>
                    <div class="details">
                      <span> 2009 - 2013</span>
                      <h3>BA Degree / London School of Arts</h3>
                    </div>
                    <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </section>
                </div>
              </div>
            </div>
          </div>
      </div>
    
    
    
      
<div className="skills">
  <h1>Happy Clients</h1>

  
  <Row style={{ justifyContent: "center", paddingBottom: "50px", color:'white' }}>
<Col xs={4} md={2} className="tech-icons" data-aos='fade-up'>
<img src={t1} alt="" />
</Col>
<Col xs={4} md={2} className="tech-icons" data-aos='fade-up'>
<img src={t2} alt="" />
</Col>
<Col xs={4} md={2} className="tech-icons" data-aos='fade-up'>
<img src={t3} alt="" />
</Col>
<Col xs={4} md={2} className="tech-icons" data-aos='fade-up'>
<img src={t4} alt="" />
</Col>


</Row>


    </div>
      </div>
      </section>
    )

}
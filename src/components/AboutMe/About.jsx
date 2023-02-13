
import Lottie from 'react-lottie'
import "./About.css"
import { AiFillGitlab } from "react-icons/ai";
import { FaSlack } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from "react";
import { useSpring} from "react-spring";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiDjango
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiPostgresql,
  SiPycharm,
  SiAndroidstudio,
  SiXampp,
} from "react-icons/si";
import GitHubCalendar from "react-github-calendar"
import Laptop from '../../Assets/lemondev.json'
import { useTranslation} from 'react-i18next';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Laptop,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
  };
  AOS.init();
  AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 5, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 999, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0.1, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });  
export const About = ({}) =>{
  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });
  const { t } = useTranslation();

    return (
      
        <>
        <section className='about' id ="about" data-aos='fade-up'>
         
            <div className="container about__container">
            
                <div className="about__content" >
                           
                         
                             <div
    data-aos="fade-up" className='contentabout'>
     
                    <div className="translate_text">
                    <h5  style={animation}>{t('Get To Know')}</h5>
                             <h1>{t('About Me')}</h1>
                                          {t("Hello my name is Rajkumar Aryal and I am a full-stack web developer with over 5 years of experience in the field.I have a strong background in building and maintaining dynamic responsive and user-friendly websites I have expertise in both front-end and back-end development and am proficient in a range of technologies including HTML CSS JavaScript React Nodejs and MongoDB I am a quick learner and am always looking to stay ahead of the curve in the ever-evolving world of web development  I have a passion for designing and developing sleek functional and engaging websites that provide a positive user experience My ultimate goal is to work on challenging projects that allow me to further develop my skills and contribute to the growth of a company I am eager to join a dynamic and innovative team where I can collaborate with others and bring my ideas to life I am known for my attention to detail, strong communication skills and ability to balance multiple tasks and meet tight deadlines I believe that my technical expertise and passion for web development set me apart from others and make me a valuable asset to any team")}

                    </div>
                    

                    </div>
      

                    <a href="#contact" className="btn btn-primary">{t('lets_begin')}</a>
                </div>

             
                <div className="about__me" 
                 data-aos="fade-up">
                

                    <div className="about__me-image">
                    <Lottie options={defaultOptions} class='lottie'/>                    </div>
                </div>
            </div>
     
        </section>
        <section className='skills' id='skills'>
  
          <h1>{t('Professional Skillset')}</h1>

          
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}   data-aos="fade-up">
              
                
      <Col xs={4} md={2} className="tech-icons" >
        <DiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos='fade-up'>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos='fade-up'>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos='fade-up'>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos='fade-up'>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos='fade-up'>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos='fade-up'>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos='fade-up'>
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos='fade-up'>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <SiPytorch />
      </Col>
    
    </Row>
        </section>
        <section class='tools'>
        <h1>{t('Tools I Used')}</h1>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}    data-aos="fade-up">
                

  <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
   
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      
     
   <Col xs={4} md={2} className="tech-icons" id='git'>
        <AiFillGitlab />
      
      </Col>
      <Col xs={4} md={2} className="tech-icons" id='git'>
        <SiXampp />
      
      </Col>
   <Col xs={4} md={2} className="tech-icons" id='git'>
        <FaSlack />
      
      </Col>
   <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
 <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
    </Row>
    <div className="github-calender">
    <h1 className="project-heading" style={{ paddingBottom: "20px"}}>
        {t('Days I Code')}
      </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                

    
      <GitHubCalendar
        username="imrajkumar-git"
        blockSize={22}
        blockMargin={5}
        fontSize={16}
      />
    </Row>
    </div>
  
        </section>
        </>
        
    )
}
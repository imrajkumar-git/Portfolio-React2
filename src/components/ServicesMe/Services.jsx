import { Col, Row } from "react-bootstrap";

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
  
export const Contact = () =>{
    return (
        <div className="services">
                    <h1>Professional Services</h1>

          
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

        </div>

        
    )
}
    
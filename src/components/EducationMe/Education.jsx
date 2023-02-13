import "./Education.css"
import Laptop from '../../Assets/71619-coding.json'
import Lottie from 'react-lottie'
import { useTranslation} from 'react-i18next';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Laptop,
  rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
  }
};


export const Education = () =>{
  const { t } = useTranslation();

    return (
        
 
      <section class="skills mtop background2" id="experience">
      <div class="container flex">
        <div class="left">
          <div class="heading">
            <div class="heading_top flex">
              
            </div>
          
          </div>
  
          <div class="text">
            <h3>{t('Every Day is a New Challenge')}</h3>
            <Lottie options={defaultOptions} class='lottie'/> 
            <a href="https://www.fiverr.com/users/rajkumararyal">            <button class="btn2 btn3">{t('Hire Me')}</button>
</a>
          </div>
        </div>
  
  
        <div class="right"   data-aos="fade-up">
                

        <div class="heading_bottom">
              <h2 text-align='center'>{t('My Skills & Tools')}</h2>
            </div>
           
            <div className="line1 grid">
              <div className="line2">
              {t('3')}+
              <p>{t('Years of Experience')}</p>

              </div>
            <div className="line3">2+
            <p>{t('Certificates')}</p>


            </div>
            
             </div>
             <div className="line1 grid">
              <div className="line2">
              {t('17')}+
              <p>{t('Client Satisfied')}</p>

              </div>
            <div className="line3">15+
            <p>{t('Projects Completed')}</p>

            </div>
            
             </div>
          
          <div class="line_content">
            <div class="line flex1">
              <p>ADOBE PHOTOSHOP</p>
              <div class="bar">
                <div class="line_bar photo"> </div>
              </div>
              <h5>55%</h5>
            </div>
  
            <div class="line">
              <p>ADOBE ILLUSTRATOR</p>
              <div class="bar">
                <div class="line_bar photo"></div>
              </div>
              <h5>65%</h5>
            </div>
  
            <div class="line">
              <p>Django</p>
              <div class="bar">
                <div class="line_bar photo"> </div>
              </div>
              <h5>65</h5>
            </div>
            <div class="line">
              <p>Python</p>
              <div class="bar">
                <div class="line_bar photo"> </div>
              </div>
              <h5>55</h5>
            </div> <div class="line">
              <p>ReactJs</p>
              <div class="bar">
                <div class="line_bar photo"> </div>
              </div>
              <h5>65</h5>
            </div>
             {/* <div class="line">
              <p>ADOBE XD</p>
              <div class="bar">
                <div class="line_bar photo"> </div>
              </div>
              <h5>65</h5>
            </div>
            <div class="line">
              <p>ADOBE XD</p>
              <div class="bar">
                <div class="line_bar photo"> </div>
              </div>
              <h5>65</h5>
            </div>
            <div class="line">
              <p>ADOBE XD</p>
              <div class="bar">
                <div class="line_bar photo"> </div>
              </div>
              <h5>65</h5>
            </div> */}
          </div>
  
  
          <div class="skill-container flex1">
          
  
           
         
          </div>
        </div>
        </div>
    </section>

    )
}
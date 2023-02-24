
import "./Contact.css"
import "./owl.carousel.css"
import Laptop from '../../Assets/laptop.json'
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
export const Contact = () =>{
  const { t } = useTranslation();

    return (
      
  <section class="contact top" id="contact">
  
  <div class="container flex">
    {/* <div class="left">
    <Lottie options={defaultOptions} class='lottie'/> 
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7805688168573!2d85.27895471498917!3d27.693176132721618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb187a97f390b1%3A0xec3f47092df0d4ca!2z4KSV4KSy4KSC4KSV4KWALCDgpJXgpL7gpKDgpK7gpL7gpKHgpYzgpIEgNDQ2MDA!5e0!3m2!1sne!2snp!4v1675141095708!5m2!1sne!2snp"
     style={{width:'25rem', height:'50rem'}}></iframe>
    </div> */}

    <div class="right">
      <div class="heading">
        <div class="heading_top flex">
         
        </div>
        
        <div class="heading_bottom">
          <h2><span>{t('Send Me a Message')}</span></h2>
        </div>
      </div>


      <form class="mtop"  action="https://getform.io/f/adf100fd-4902-43e8-82c9-38203d1b0594" method="POST">
        <div class="input grid">
          <input type="text" placeholder={t('Enter your First Name')}
                                                name="First_Name"
                                                id="name"
                                             
                                                required
                                                autoComplete='off'/>

<input type="text" placeholder={t('Enter your Last Name')}
 name="Last_Name"
 id="Last_Name"
 required
 autoComplete='off'/>

          <input placeholder={t('Enter your Email Address')}  type="email"
                                                name="Email"
                                                id="email"
                                                pattern="[^ @]*@[^ @]*"
                                                required
                                                autoComplete='off'/>
          <input type="text" placeholder={t('Enter your Current Location')} id="Address" name="Address"/>
          <input type="text" placeholder={t('Enter your Country')} id="Country" name="Country"/>

          <input type="text" placeholder={t('Enter your Phone Number with Country Code')}
                                                name="Phone-number"
                                                id="phone_number"
                                                autoComplete='off'
                                                required
                                                />
        </div>

        <textarea className="manualtextarea" rows="5" cols="80" required autoComplete='off' placeholder={t('Tell Me about The Project' )}   name="Message"
                                                id="name" ></textarea>
        <button class="btn2 btn3">{t('Submit')}</button>
      </form>
    </div>

    
    </div>
</section> 
    )
}
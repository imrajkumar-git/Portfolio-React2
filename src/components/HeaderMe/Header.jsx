import "./Header.css";
import { CTA } from "./CTA"
import { HeaderSocial } from "./HeaderSocials";
import ME from "../../Assets/new3.png";
import logo from "../../Assets/rk.png";
import Typical from 'react-typical'
import { useState, useEffect } from 'react';
import i18next from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import translate_en from '../../locales/en/translation.json'
import translate_es from '../../locales/es/translation.json'
import translate_ne from '../../locales/ne/translation.json'
import { TypeAnimation } from 'react-type-animation';

i18next.use(initReactI18next) 
.init({
         resources: {
        En: {
            translation: translate_en,
        },
        Es: {
            translation: translate_es,
        },
        Ne: {
            translation: translate_ne,
        },
    },
    lng: 'En', // if you're using a language detector, do not define the lng option
    fallbackLng: 'En',

    interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
});
export const Header = () =>{
    const { t } = useTranslation();
    const [value, setValue] = useState(localStorage.getItem('lang'))
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const storage = localStorage.getItem('lang');


    const handleChange = (event) => {
        setValue(event.target.value);

   
    }
    useEffect(() => {
        // console.log(value)
        i18next.changeLanguage(value);
        localStorage.setItem('lang', value);
    }, [value])

    useEffect(() => {
        let currentLang = localStorage.getItem('lang');
        i18next.changeLanguage(currentLang);
        // console.log(localStorage.getItem('lang').length)
    },[]);
    return (
        <header>
          
            <div className="container header__container">
         <div className="dropitem">
         <img src={logo} alt="" className="logo"/>
         <select
                            className="custom-btn btn"
                            style={{ "marginLeft": "10px", "borderRadius": "none", "webkitAppearance": "none" }}
                            value={value}
                            onChange={handleChange}
                            name="">
                            <option value='En'>En</option>
                            <option value='Ne'>नेपा</option>
                        </select>
         </div>
                <div>
             
                <h1>{t('Hello')}!</h1>
                <h2> {t('I am Rajkumar Aryal')}</h2>
                </div>
                <TypeAnimation
      sequence={[
        'Full Stack Website Developer', // Types 'One'
        2000, // Waits 1s
        'React Dev', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'App Design', // Types 'Three' without deleting 'Two'
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      className='typetext'
    />

                <CTA />

                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt="" />
                </div>

                <a href="#contact" className="scroll__down">   {t('Scroll Down')} </a>
            </div>
        </header>
    )
}
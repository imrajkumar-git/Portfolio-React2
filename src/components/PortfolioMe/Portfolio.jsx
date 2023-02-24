import "./Portfolio.css"
import Nykaa from "../../Assets/nykaa.png";
import Minimalist from "../../Assets/Minimalist.png";
import TicTacToe from "../../Assets/Tic-Tac-Toe.jpeg";
import { useTranslation} from 'react-i18next';
import  './portfolio_style.css';
import todeapp from '../../Assets/todo-screenshot.png'
import tictoctoe from '../../Assets/Tic-Tac-Toe.jpeg'
import gitfinder from '../../Assets/github-finder-screenshot.png';
import shopify from '../../Assets/shopify.webp';
import omifood from '../../Assets/omnifood.webp';
import rodeside from '../../Assets/rode-website-clone.webp';
import paytm from '../../Assets/paytm-screenshot.webp';
import project11 from '../../Assets/project-11.webp';
import project15 from '../../Assets/project-15.webp';
import project14 from '../../Assets/project-14.webp';
import project13 from '../../Assets/project-13.webp';
import project12 from '../../Assets/project-11.webp';
import project09 from '../../Assets/project-09.webp';
import { RiTodoFill } from "react-icons/ri";

const data = [
    {
        id : 1,
        image : Nykaa,
        techstack : "HTML | CSS | JavaScript | Bootstrap 5", 
        title : " This website is a colne of nykaa.com In which I had implemented Login & Sign-up page and checkout page .",
        github : "https://github.com/waghchaurepooja/nayaka",
        demo : "https://nykaaproject.netlify.app/"
    },
    {
        id : 2,
        image : Minimalist,
        techstack : "HTML | CSS | JavaScript | MongoDB | Express.JS | Node.JS | EJS | Bootstrap 5",
        title : " This website is a clone of beminimalist.co in wchich I had implemented Login & Sign-up authication. ",
        github : "https://github.com/waghchaurepooja/Clone-of-beminimalist",
        demo : "https://damp-cliffs-11671.herokuapp.com/"
    },
    {
        id : 3,
        image : TicTacToe,
        techstack : "HTML | CSS | JavaScript",
        title : "A game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares; noughts and crosses.",
        github : "https://github.com/waghchaurepooja/Tic-Tac-Toe-App",
        demo : "https://tic-tac-toe-app-omega.vercel.app/"
    },
]

export const Portfolio = () =>{
    const { t } = useTranslation();

    return (
        <>
        {/* <section id = "portfolio">
            <h5>{t('My Recent Work')}</h5>
            <h2>{t('My Projects')}</h2>

            <div className="container portfolio__container"   data-aos="fade-up">
                

                {data.map((element) =>{
                    return (
                        <article key={element.id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={element.image} alt="" />
                            </div>
                            <h3>{t(element.title)}</h3>
                            <h4>Language Used: {t(element.techstack)}</h4>
                            <div className="portfolio__item-cta">
?                                <a target={"_blank"} href={element.demo} className="btn btn-primary" >{t('Live Demo')}</a>
                            </div>
                        </article>
                    )
                })
                }
            </div>
 </section> */}
 <section className='skills' id="portfolio">
  
  <h1>{t('My Services')}</h1>

 <div className="container portfolio__container"   data-aos="fade-up">
                

                  
                        <article className="portfolio__item tech-icons1">
                            <div className="portfolio__item-image">
                            <img src={Nykaa} alt="" />
                            </div>
                            <h2>{t('Full Stack Website Development')}</h2>
    <p> <h5>{t('Description')}</h5>{t('Experienced in building custom, responsive and user-friendly websites using HTML, CSS, JavaScript, and various front-end frameworks such as React and backend languages python,JavaScript.')}
    </p>
     <p> <h5>{t('Skills')}</h5>{t('HTML, CSS, JavaScript, React, Vue.js, Responsive Design, User Experience.')}</p>
    <p> <h5>{t('Experience')}</h5>{t('2+ years of experience in Different categories of full stact website development field.')}</p>
        <a href="https://www.fiverr.com/users/rajkumararyal"><button  className="services-btn" >{t('Hire Me')}</button></a>
                        </article>
                        <article className="portfolio__item tech-icons1">
                        <div className="portfolio__item-image">
                                <img src={TicTacToe} alt="" />
                            </div>
<h2>{t('Logo Design')}</h2>
<p> <h5>{t('Description')}</h5>{t('Skilled in creating unique and memorable logos that effectively represent the brand identity.Proficient in using Adobe Illustrator and Photoshop to create vector graphics.')}</p>
     
     <p><h5>{t('Skills')}</h5> {t('Adobe Illustrator, Adobe Photoshop, Vector Graphics,Brand Identity.')}</p>

<p><h5>{t('Experience')}</h5> {t('3+ years of experience in logo design, with a portfolio of successful projects for various industries.')}</p>
 <a href="https://www.fiverr.com/users/rajkumararyal"><button  className="services-btn" >{t('Hire Me')}</button></a>     
</article>
            
            <article className="portfolio__item tech-icons1">

            <div className="portfolio__item-image">
                                <img src={Minimalist} alt="" />
                            </div>
<h2>{t('SEO(search Engine Optimization)')}</h2>

  <p> <h5>{t('Description')}</h5>{t('Experienced in optimizing websites for search engines to improve visibility, traffic, and rankings.')}</p>
     <p><h5>{t('Skills')}</h5>{t('Keyword-Research,On-pageOptimization,Link Building, Google Analytics, Ahrefs, Website Performance Tracking.')}</p>
        <p><h5>{t('Experience')}</h5> {t('5+ years of experience in SEO, with a track record of delivering results for clients across various industries.')}</p>
             <a href="https://www.fiverr.com/users/rajkumararyal"><button  className="services-btn" >{t('Hire Me')}</button></a>
  </article>
  </div>
  </section>
  {/* <Row style={{ justifyContent: "center", paddingBottom: "50px" }}   data-aos="fade-up">
      
        
<Col xs={3} md={1} className="tech-icons1" >
<div className="portfolio__item-image">
                                <img src={Nykaa} alt="" />
                            </div>
    <h2>Full Stack Website Development</h2>
    <p> <h5>Description:</h5>Experienced in building custom, 
        responsive and user-friendly websites using HTML, CSS, JavaScript, and various front-end frameworks such as React and backend languages python,JavaScript.

    </p>
     <p> <h5>Skills:</h5>HTML, CSS, JavaScript, 
        React, Vue.js, Responsive Design, User Experience</p>
    <p> <h5>Experience:</h5>2+ years of experience in Different categories of full stact  website development field.</p>
        <a href="https://www.youtube.com/"><button  className="services-btn" >Hire Me</button></a>
</Col>
<Col xs={3} md={1} className="tech-icons1" data-aos='fade-up'>
<div className="portfolio__item-image">
                                <img src={TicTacToe} alt="" />
                            </div>
<h2>Logo Design</h2>
<p> <h5> Description:</h5>Skilled in creating unique and memorable logos that effectively represent the brand identity.Proficient in using Adobe Illustrator and Photoshop to create vector graphics.</p>
     
     <p><h5>Skills:</h5> Adobe Illustrator, Adobe Photoshop, Vector Graphics,Brand Identity.</p>

<p><h5>Experience:</h5> 3+ years of experience in logo design,
 with a portfolio of successful projects for various industries.</p>
 <a href="https://www.youtube.com/"><button  className="services-btn" >Hire Me</button></a>

</Col>
<Col xs={3} md={1} className="tech-icons1" data-aos='fade-up'>
<div className="portfolio__item-image">
                                <img src={Minimalist} alt="" />
                            </div>
<h2>SEO(search Engine Optimization)</h2>

  <p> <h5>Description:</h5>Experienced in optimizing websites for search engines to improve visibility, traffic, 
        
    and rankings.</p>
     <p><h5>Skills:</h5> Keyword-Research,On-pageOptimization,Link Building, Google Analytics, Ahrefs, Website Performance Tracking</p>
        <p><h5>Experience:</h5> 5+ years of experience in SEO,
             with a track record of delivering results for clients across various industries.</p>
             <a href="https://www.youtube.com/"><button  className="services-btn" >Hire Me</button></a>
     </Col>


     <Col xs={3} md={1} className="tech-icons1" data-aos='fade-up'>
<div className="portfolio__item-image">
                                <img src={Minimalist} alt="" />
                            </div>
<h2>SEO(search Engine Optimization)</h2>

  <p> <h5>Description:</h5>Experienced in optimizing websites for search engines to improve visibility, traffic, 
        
    and rankings.</p>
     <p><h5>Skills:</h5> Keyword-Research,On-pageOptimization,Link Building, Google Analytics, Ahrefs, Website Performance Tracking</p>
        <p><h5>Experience:</h5> 5+ years of experience in SEO,
             with a track record of delivering results for clients across various industries.</p>
             <a href="https://www.youtube.com/"><button  className="services-btn" >Hire Me</button></a>
     </Col>
</Row> */}

<section class="px-7 sm:px-14 py-16 max-w-screen-xl mx-auto" id="projects">
    <div class="flex items-center justify-center gap-12 pb-12">
      <div class="h-px flex-1 bg-[#309543] hidden sm:block"></div>
      <h2 class="text-4xl font-bold text-center">Some Things I’ve Built</h2>
      <div class="h-px flex-1 bg-[#309543] hidden sm:block"></div>
    </div>

    <div>

{/* <!-- featured project 01 --> */}
<div class="flex flex-col sm:flex-row sm:gap-12 mt-20">

  {/* <!-- left side --> */}
  <div class="mockup-window border border-base-300 sm:w-1/2 h-[300px] order-2	sm:order-none">
    <div class="featured-project-img-01-div cursor-all-scroll overflow-scroll h-[300px] rounded">
      <div class="featured-project-img-01  transition-all	duration-500  ">
        <img src={todeapp}/>
      </div>
    </div>
  </div>

  {/* <!-- right side --> */}
  <div class="sm:w-1/2 h-[300px] flex flex-col justify-center order-1 sm:order-none">
    <h2 class="sm:text-end text-3xl font-bold mb-8 sm:relative sm:right-[10%] lg:right-1/4">01. To Do Full Stack
      App
    </h2>
    <p
      class="bg-[#051830] pl-8 pr-2 py-4 mb-2 rounded shadow-sm sm:relative sm:right-[10%] lg:right-1/4 text-[#ffffff78]">
      This is an assignment given in "JavaScript Full Stack Web Developer Bootcamp" by iNeuron, built using
      MongoDb, Express, React and NodeJS. <br/>
      <span class="text-[#309543] font-medium">This Site is Fully Responsive</span>
    </p>
    <div  class="font1 sm:relative sm:right-[10%] lg:right-1/4">
      <ul class="flex gap-4 sm:justify-end text-sm">
        <li>React</li>
        <li>NodeJS</li>
        <li>Express</li>
        <li>MongoDb</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>
    <div class="flex gap-4 mt-2 sm:justify-end sm:relative sm:right-[10%] lg:right-1/4">
      <a href="#" target="_blank" class="w-9 h-9">
        <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
      </a>
      <a href="#" target="_blank" class="w-9 h-9">
        <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
      </a>
    </div>
  </div>

</div>

{/* <!-- featured project 02 --> */}
<div class="flex flex-col sm:flex-row sm:gap-12 mt-20 sm:mt-20">

  {/* <!-- right side --> */}
  <div class="sm:w-1/2 h-[300px] flex flex-col justify-center">
    <h2 class=" text-3xl font-bold mb-8 sm:relative sm:left-[10%] lg:left-1/4">02. GitHub Profile Finder
    </h2>
    <p
      class="bg-[#051830] pl-8 pr-2 py-4 mb-2 rounded shadow-sm sm:relative sm:left-[10%] lg:left-1/4 z-40 text-[#ffffff78]">
      This is a GitHub Profile Finder React App build using HTML5, Tailwind CSS and React. <br/>
      <span class="text-[#309543] font-medium">This Site is Fully Responsive</span>
    </p>
    <div  class="sm:relative sm:left-[10%] lg:left-1/4">
      <ul class="flex gap-4 justify-start text-sm">
        <li>HTML5</li>
        <li>React</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>
    <div class="flex gap-4 mt-2 justify-start sm:relative sm:left-[10%] lg:left-1/4">
      <a href="#" target="_blank" class="w-9 h-9">
        <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
      </a>
      <a href="#" target="_blank" class="w-9 h-9">
        <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
      </a>
    </div>
  </div>

  {/* <!-- left side --> */}
  <div class="mockup-window border border-base-300 sm:w-1/2 h-[300px]">
    <div class="featured-project-img-01-div cursor-all-scroll overflow-scroll h-[300px] rounded">
      <div class="featured-project-img-01  transition-all	duration-500  ">
        <img src={tictoctoe} alt="rode website clone" class=""/>
      </div>
    </div>
  </div>

</div>

{/* <!-- featured project 03 --> */}
<div class="flex flex-col sm:flex-row sm:gap-12 mt-20 sm:mt-20">

  {/* <!-- left side --> */}
  <div class="mockup-window border border-base-300 sm:w-1/2 h-[300px] order-2 sm:order-none	">
    <div class="featured-project-img-01-div cursor-all-scroll overflow-scroll h-[300px] rounded">
      <div class="featured-project-img-01  transition-all	duration-500  ">
        <img src={shopify} alt="shopify clone"/>
      </div>
    </div>
  </div>

  {/* <!-- right side --> */}
  <div class="sm:w-1/2 h-[300px] flex flex-col justify-center">
    <h2 class="sm:text-end text-3xl font-bold mb-8 sm:relative sm:right-[10%] lg:right-1/4">03. Shopify.in Clone
    </h2>
    <p
      class="bg-[#051830] pl-8 pr-2 py-4 mb-2 rounded shadow-sm sm:relative sm:right-[10%] lg:right-1/4 text-[#ffffff78]">
      This is an assignment given in "JavaScript Full Stack Web Developer Bootcamp" by iNeuron, built using HTML5,
      CSS3 and Tailwind CSS. <br/>
      <span class="text-[#309543] font-medium">This Site is Fully Responsive</span>
    </p>
    <div  class="sm:relative sm:right-[10%] lg:right-1/4">
      <ul class="flex gap-4 sm:justify-end text-sm">
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>
    <div class="flex gap-4 mt-2 sm:justify-end sm:relative sm:right-[10%] lg:right-1/4">
      <a href="#" target="_blank" class="w-9 h-9">
        <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
      </a>
      <a href="#" target="_blank" class="w-9 h-9">
        <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
      </a>
    </div>
  </div>

</div>

<div class="flex flex-col sm:flex-row sm:gap-12 mt-20 sm:mt-20">

  <div class="sm:w-1/2 h-[300px] flex flex-col justify-center">
    <h2 class=" text-3xl font-bold mb-8 sm:relative sm:left-[10%] lg:left-1/4">04. Omnifood</h2>
    <p
      class="bg-[#051830] pl-8 pr-2 py-4 mb-2 rounded shadow-sm sm:relative sm:left-[10%] lg:left-1/4 z-40 text-[#ffffff78]">
      A Food Delivery AI Startup's Fully Responsive website, built using HTML5, CSS3, and JavaScript. <br/>
      <span class="text-[#309543] font-medium">This Site is Fully Responsive</span>
    </p>
    <div  class="sm:relative sm:left-[10%] lg:left-1/4">
      <ul class="flex gap-4 justify-start text-sm">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </div>
    <div class="flex gap-4 mt-2 justify-start sm:relative sm:left-[10%] lg:left-1/4">
      <a href="#" target="_blank" class="w-9 h-9">
        <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
      </a>
      <a href="#" target="_blank" class="w-9 h-9">
        <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
      </a>
    </div>
  </div>

  <div class="mockup-window border border-base-300 sm:w-1/2 h-[300px]">
    <div class="featured-project-img-01-div cursor-all-scroll overflow-scroll h-[300px] rounded">
      <div class="featured-project-img-01  transition-all	duration-500  ">
        <img src={omifood} alt="omnifood"/>
      </div>
    </div>
  </div>


</div>

</div>

    <div class="mt-20">
      <h2 class="text-center text-3xl font-semibold">Honorable Mentions</h2>


      <div class=" px-5 py-24">
        <div class="flex flex-wrap gap-y-4 -m-4">

          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative mentions-project rounded-md">
              <img alt="developer-landing-page"
                class="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src={rodeside}/>
              <div class="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">HTML CSS</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">Rode.com Clone</h1>
                <p >
                  This is a assignment given in "JavaScript Full Stack Web Developer Bootcamp" by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div class="flex gap-4 mt-2 justify-start">
                  <a href="#" target="_blank" class="w-9 h-9">
                    <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="#" target="_blank" class="w-9 h-9">
                    <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>



          <div class=" lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative mentions-project rounded-md">
              <img alt="developer-landing-page"
                class="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src={paytm}/>
              <div class="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">HTML CSS</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">Paytm.com Clone</h1>
                <p class="leading-relaxed">
                  This is a assignment given in "JavaScript Full Stack Web Developer Bootcamp" by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div class="flex gap-4 mt-2 justify-start">
                  <a href="#" target="_blank" class="w-9 h-9">
                    <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="#" target="_blank" class="w-9 h-9">
                    <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class=" lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative mentions-project rounded-md">
              <img alt="web-hosting-landing-page"
                class="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src={project11}/>
              <div class="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">HTML CSS</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">Web Hosting Landing Page</h1>
                <p class="leading-relaxed">
                  This is a assignment given in "JavaScript Full Stack Web Developer Bootcamp" by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div class="flex gap-4 mt-2 justify-start">
                  <a href="#" target="_blank"
                    class="w-9 h-9">
                    <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="#" target="_blank" class="w-9 h-9">
                    <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class=" lg:w-1/3 sm:w-1/2 p-4 ">
            <div class="flex relative mentions-project rounded-md">
              <img alt="product-designer-landing-page"
                class="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src={project15}/>
              <div class="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 class="tracking-widest text-sm title-font font-bold text-indigo-500 mb-1">HTML CSS</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">Product Designer Landing Page</h1>
                <p class="leading-relaxed">
                  This is a assignment given in "JavaScript Full Stack Web Developer Bootcamp" by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div class="flex gap-4 mt-2 justify-start">
                  <a href="#" target="_blank"
                    class="w-9 h-9">
                    <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="#" target="_blank" class="w-9 h-9">
                    <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class=" lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative mentions-project rounded-md">
              <img alt="dance-home-landing-page"
                class="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src={project14}/>
              <div class="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 class="tracking-widest text-sm title-font font-bold text-indigo-500 mb-1">HTML CSS</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">Dance Home Landing Page</h1>
                <p class="leading-relaxed">
                  This is a assignment given in "JavaScript Full Stack Web Developer Bootcamp" by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div class="flex gap-4 mt-2 justify-start">
                  <a href="#" target="_blank" class="w-9 h-9">
                    <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="#" target="_blank" class="w-9 h-9">
                    <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]">
                    </ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class=" lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative mentions-project rounded-md">
              <img alt="saas-landing-page" class="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src={project13}/>
              <div class="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 class="tracking-widest text-sm title-font font-bold text-indigo-500 mb-1">HTML CSS</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">Saas Landing Page</h1>
                <p class="leading-relaxed">
                  This is a assignment given in "JavaScript Full Stack Web Developer Bootcamp" by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div class="flex gap-4 mt-2 justify-start">
                  <a href="#" target="_blank" class="w-9 h-9">
                    <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="#" target="_blank" class="w-9 h-9">
                    <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class=" lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative mentions-project rounded-md">
              <img alt="business-landing-page"
                class="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src={project12}/>
              <div class="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 class="tracking-widest text-sm title-font font-bold text-indigo-500 mb-1">HTML CSS</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">Business Landing Page</h1>
                <p class="leading-relaxed">
                  This is a assignment given in "JavaScript Full Stack Web Developer Bootcamp" by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div class="flex gap-4 mt-2 justify-start">
                  <a href="#" target="_blank" class="w-9 h-9">
                    <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="#" target="_blank" class="w-9 h-9">
                    <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class=" lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative mentions-project rounded-md">
              <img alt="developer-landing-page"
                class="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src={project09}/>
              <div class="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">HTML CSS</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">Developer Landing Page</h1>
                <p class="leading-relaxed">
                  This is a assignment given in "JavaScript Full Stack Web Developer Bootcamp" by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div class="flex gap-4 mt-2 justify-start">
                  <a href="#" target="_blank" class="w-9 h-9">
                    <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="#" target="_blank" class="w-9 h-9">
                    <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

  </section> 
</>
    )   
}
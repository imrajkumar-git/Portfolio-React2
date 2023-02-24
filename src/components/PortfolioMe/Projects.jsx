import  './portfolio_style.css';
import todeapp from '../../Assets/todo-screenshot.png'
export const Portfolio = () =>{

    return (

    
        
 <section class="bg-[#021227] px-7 sm:px-14 py-16 max-w-screen-xl mx-auto" id="projects">
    <div class="flex items-center justify-center gap-12 pb-12">
      <div class="h-px flex-1 bg-[#309543] hidden sm:block"></div>
      <h2 class="text-4xl font-bold text-center">Some Things I’ve Built</h2>
      <div class="h-px flex-1 bg-[#309543] hidden sm:block"></div>
    </div>

    <div>

      <div class="flex flex-col sm:flex-row sm:gap-12 mt-20">

        <div class="mockup-window border border-base-300 sm:w-1/2 h-[300px] order-2	sm:order-none">
          <div class="featured-project-img-01-div cursor-all-scroll overflow-scroll h-[300px] rounded">
            <div class="featured-project-img-01  transition-all	duration-500  ">
              <img src={todeapp} alt="paytm clone" class=""/>
            </div>
          </div>
        </div>

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
          <div style="font-family: 'Roboto Mono', monospace;" class="sm:relative sm:right-[10%] lg:right-1/4">
            <ul class="flex gap-4 sm:justify-end text-sm">
              <li>React</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MongoDb</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div class="flex gap-4 mt-2 sm:justify-end sm:relative sm:right-[10%] lg:right-1/4">
            <a href="https://github.com/prakash-naikwadi/todo-full-stack-app" target="_blank" class="w-9 h-9">
              <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
            </a>
            <a href="https://github.com/prakash-naikwadi/todo-full-stack-app" target="_blank" class="w-9 h-9">
              <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
            </a>
          </div>
        </div>

      </div>

      <div class="flex flex-col sm:flex-row sm:gap-12 mt-20 sm:mt-20">

        <div class="sm:w-1/2 h-[300px] flex flex-col justify-center">
          <h2 class=" text-3xl font-bold mb-8 sm:relative sm:left-[10%] lg:left-1/4">02. GitHub Profile Finder App
          </h2>
          <p
            class="bg-[#051830] pl-8 pr-2 py-4 mb-2 rounded shadow-sm sm:relative sm:left-[10%] lg:left-1/4 z-40 text-[#ffffff78]">
            This is a GitHub Profile Finder React App build using HTML5, Tailwind CSS and React. <br/>
            <span class="text-[#309543] font-medium">This Site is Fully Responsive</span>
          </p>
          <div style="font-family: 'Roboto Mono', monospace;" class="sm:relative sm:left-[10%] lg:left-1/4">
            <ul class="flex gap-4 justify-start text-sm">
              <li>HTML5</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div class="flex gap-4 mt-2 justify-start sm:relative sm:left-[10%] lg:left-1/4">
            <a href="https://github.com/prakash-naikwadi/github-finder-react-app" target="_blank" class="w-9 h-9">
              <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
            </a>
            <a href="https://github-finder-react-app-01.netlify.app/" target="_blank" class="w-9 h-9">
              <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
            </a>
          </div>
        </div>

        <div class="mockup-window border border-base-300 sm:w-1/2 h-[300px]">
          <div class="featured-project-img-01-div cursor-all-scroll overflow-scroll h-[300px] rounded">
            <div class="featured-project-img-01  transition-all	duration-500  ">
              <img src="./images/github-finder-screenshot.png" alt="rode website clone" class=""/>
            </div>
          </div>
        </div>

      </div>

      <div class="flex flex-col sm:flex-row sm:gap-12 mt-20 sm:mt-20">

        <div class="mockup-window border border-base-300 sm:w-1/2 h-[300px] order-2 sm:order-none	">
          <div class="featured-project-img-01-div cursor-all-scroll overflow-scroll h-[300px] rounded">
            <div class="featured-project-img-01  transition-all	duration-500  ">
              <img src="./images/shopify.webp" alt="shopify clone"/>
            </div>
          </div>
        </div>

        <div class="sm:w-1/2 h-[300px] flex flex-col justify-center">
          <h2 class="sm:text-end text-3xl font-bold mb-8 sm:relative sm:right-[10%] lg:right-1/4">03. Shopify.in Clone
          </h2>
          <p
            class="bg-[#051830] pl-8 pr-2 py-4 mb-2 rounded shadow-sm sm:relative sm:right-[10%] lg:right-1/4 text-[#ffffff78]">
            This is an assignment given in "JavaScript Full Stack Web Developer Bootcamp" by iNeuron, built using HTML5,
            CSS3 and Tailwind CSS. <br/>
            <span class="text-[#309543] font-medium">This Site is Fully Responsive</span>
          </p>
          <div style="font-family: 'Roboto Mono', monospace;" class="sm:relative sm:right-[10%] lg:right-1/4">
            <ul class="flex gap-4 sm:justify-end text-sm">
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div class="flex gap-4 mt-2 sm:justify-end sm:relative sm:right-[10%] lg:right-1/4">
            <a href="https://github.com/prakash-naikwadi/shopify-clone" target="_blank" class="w-9 h-9">
              <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
            </a>
            <a href="https://shopify-website-clone.netlify.app/" target="_blank" class="w-9 h-9">
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
          <div style="font-family: 'Roboto Mono', monospace;" class="sm:relative sm:left-[10%] lg:left-1/4">
            <ul class="flex gap-4 justify-start text-sm">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div class="flex gap-4 mt-2 justify-start sm:relative sm:left-[10%] lg:left-1/4">
            <a href="https://github.com/prakash-naikwadi/omnifood-start-up-html-css-js" target="_blank" class="w-9 h-9">
              <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
            </a>
            <a href="https://omnifood-ai-startup.netlify.app/" target="_blank" class="w-9 h-9">
              <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
            </a>
          </div>
        </div>

        <div class="mockup-window border border-base-300 sm:w-1/2 h-[300px]">
          <div class="featured-project-img-01-div cursor-all-scroll overflow-scroll h-[300px] rounded">
            <div class="featured-project-img-01  transition-all	duration-500  ">
              <img src="./images/omnifood.webp" alt="omnifood"/>
            </div>
          </div>
        </div>


      </div>

    </div>

    <div class="mt-20">
      <h2 class="text-center text-3xl font-semibold">Honorable Mentions</h2>


      <div class=" px-5 py-24">
        <div class="flex flex-wrap gap-y-4 -m-4">

          <div class=" lg:w-1/3 sm:w-1/2 p-4 bg-[#051830]">
            <div class="flex relative mentions-project rounded-md">
              <img alt="developer-landing-page"
                class="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src="./images/rode-website-clone.webp"/>
              <div class="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">HTML CSS</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">Rode.com Clone</h1>
                <p class="leading-relaxed">
                  This is a assignment given in "JavaScript Full Stack Web Developer Bootcamp" by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div class="flex gap-4 mt-2 justify-start">
                  <a href="https://github.com/prakash-naikwadi/rode-website-clone" target="_blank" class="w-9 h-9">
                    <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="https://rode-website-clone.netlify.app/" target="_blank" class="w-9 h-9">
                    <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>



          <div class=" lg:w-1/3 sm:w-1/2 p-4 bg-[#051830]">
            <div class="flex relative mentions-project rounded-md">
              <img alt="developer-landing-page"
                class="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src="./images/paytm-screenshot.webp"/>
              <div class="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">HTML CSS</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">Paytm.com Clone</h1>
                <p class="leading-relaxed">
                  This is a assignment given in "JavaScript Full Stack Web Developer Bootcamp" by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div class="flex gap-4 mt-2 justify-start">
                  <a href="https://github.com/prakash-naikwadi/paytm-clone" target="_blank" class="w-9 h-9">
                    <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="https://github.com/prakash-naikwadi/paytm-clone" target="_blank" class="w-9 h-9">
                    <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class=" lg:w-1/3 sm:w-1/2 p-4 bg-[#051830]">
            <div class="flex relative mentions-project rounded-md">
              <img alt="web-hosting-landing-page"
                class="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src="./images/project-11.webp"/>
              <div class="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">HTML CSS</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">Web Hosting Landing Page</h1>
                <p class="leading-relaxed">
                  This is a assignment given in "JavaScript Full Stack Web Developer Bootcamp" by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div class="flex gap-4 mt-2 justify-start">
                  <a href="https://github.com/prakash-naikwadi/web-hosting-landing-page" target="_blank"
                    class="w-9 h-9">
                    <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="https://web-hosting-landing-page-11.netlify.app/" target="_blank" class="w-9 h-9">
                    <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class=" lg:w-1/3 sm:w-1/2 p-4 bg-[#051830]">
            <div class="flex relative mentions-project rounded-md">
              <img alt="product-designer-landing-page"
                class="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src="./images/project-15.webp"/>
              <div class="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 class="tracking-widest text-sm title-font font-bold text-indigo-500 mb-1">HTML CSS</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">Product Designer Landing Page</h1>
                <p class="leading-relaxed">
                  This is a assignment given in "JavaScript Full Stack Web Developer Bootcamp" by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div class="flex gap-4 mt-2 justify-start">
                  <a href="https://github.com/prakash-naikwadi/product-designer-landing-page" target="_blank"
                    class="w-9 h-9">
                    <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="https://product-designer-landing-page-15.netlify.app/" target="_blank" class="w-9 h-9">
                    <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class=" lg:w-1/3 sm:w-1/2 p-4 bg-[#051830]">
            <div class="flex relative mentions-project rounded-md">
              <img alt="dance-home-landing-page"
                class="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src="./images/project-14.webp"/>
              <div class="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 class="tracking-widest text-sm title-font font-bold text-indigo-500 mb-1">HTML CSS</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">Dance Home Landing Page</h1>
                <p class="leading-relaxed">
                  This is a assignment given in "JavaScript Full Stack Web Developer Bootcamp" by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div class="flex gap-4 mt-2 justify-start">
                  <a href="https://github.com/prakash-naikwadi/dance-home-landing-page" target="_blank" class="w-9 h-9">
                    <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="https://dance-home-page-014.netlify.app/" target="_blank" class="w-9 h-9">
                    <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]">
                    </ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class=" lg:w-1/3 sm:w-1/2 p-4 bg-[#051830]">
            <div class="flex relative mentions-project rounded-md">
              <img alt="saas-landing-page" class="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src="./images/project-13.webp"/>
              <div class="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 class="tracking-widest text-sm title-font font-bold text-indigo-500 mb-1">HTML CSS</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">Saas Landing Page</h1>
                <p class="leading-relaxed">
                  This is a assignment given in "JavaScript Full Stack Web Developer Bootcamp" by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div class="flex gap-4 mt-2 justify-start">
                  <a href="https://github.com/prakash-naikwadi/saas-landing-page" target="_blank" class="w-9 h-9">
                    <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="https://saas-landing-page-0013.netlify.app/" target="_blank" class="w-9 h-9">
                    <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class=" lg:w-1/3 sm:w-1/2 p-4 bg-[#051830]">
            <div class="flex relative mentions-project rounded-md">
              <img alt="business-landing-page"
                class="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src="./images/project-12.webp"/>
              <div class="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 class="tracking-widest text-sm title-font font-bold text-indigo-500 mb-1">HTML CSS</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">Business Landing Page</h1>
                <p class="leading-relaxed">
                  This is a assignment given in "JavaScript Full Stack Web Developer Bootcamp" by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div class="flex gap-4 mt-2 justify-start">
                  <a href="https://github.com/prakash-naikwadi/business-landing-page" target="_blank" class="w-9 h-9">
                    <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="https://business-landing-page-0012.netlify.app/" target="_blank" class="w-9 h-9">
                    <ion-icon name="desktop-outline" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class=" lg:w-1/3 sm:w-1/2 p-4 bg-[#051830]">
            <div class="flex relative mentions-project rounded-md">
              <img alt="developer-landing-page"
                class="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                src="./images/project-09.webp"/>
              <div class="px-8 py-10 relative z-10 w-full bg-[#051830] transition-all opacity-0 hover:opacity-95">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">HTML CSS</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">Developer Landing Page</h1>
                <p class="leading-relaxed">
                  This is a assignment given in "JavaScript Full Stack Web Developer Bootcamp" by iNeuron, built using
                  HTML5 and CSS3.
                </p>
                <div class="flex gap-4 mt-2 justify-start">
                  <a href="https://github.com/prakash-naikwadi/developer-landing-page" target="_blank" class="w-9 h-9">
                    <ion-icon name="logo-github" class="w-8 h-8 transition-all hover:text-[#309543]"></ion-icon>
                  </a>
                  <a href="https://developer-landing-page-009.netlify.app/" target="_blank" class="w-9 h-9">
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
        
    )}


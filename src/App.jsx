import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

import bg from "./assets/bg/summoner s rift summoner platform.jpg";
import bg1 from "./assets/bg/bg hell.webp";
import bg2 from "./assets/bg/bg.jpeg";
import bg3 from "./assets/bg/bg tech.jpg";
import bg4 from "./assets/bg/bg work.jpg";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <div>
          <Navbar />
          <Hero />
        </div>
        <div className='relative z-0'>
          <div className="bg-cover object-cover">
            <img src={bg} className=" absolute w-full h-full -z-50 opacity-20"/>
          </div>
          <About className="mx-0" />
        </div>
        <div className='relative z-0'>
          <div className="bg-cover object-cover">
            <img src={bg2} className=" absolute w-full h-full -z-50 opacity-20"/>
          </div>
        <Experience />
        </div>
        <div className='relative z-0'>
          <div className="bg-cover object-cover">
            <img src={bg3} className=" absolute w-full h-full -z-50 opacity-20"/>
          </div>
        <Tech />
        </div>
        <div className='relative z-0'>
          <div className="bg-cover object-cover">
            <img src={bg4} className=" absolute w-full h-full -z-50 opacity-20"/>
          </div>
        <Works />
        </div>
        <div className='relative z-0'>
          <div className="bg-cover object-cover">
            <img src={bg1} className=" absolute w-full h-full -z-50 opacity-20"/>
          </div>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

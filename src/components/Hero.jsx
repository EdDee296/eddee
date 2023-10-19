import { styles } from "../styles";
import ys from "../assets/dream drag (dark).mp4"
import cv from "../assets/David Pham.pdf";
const Hero = () => {
  return (
    <section className={`relative w-full sm:w-auto mx-auto`}>
      <div className=" absolute w-full h-full bg-violet-900 opacity-60 "/>
      <div className="bg-cover object-cover">
        <video className=" w-full h-full " src={ys} autoPlay loop muted />
      </div>

      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className="w-5 h-5 rounded-full bg-[#915eff] sm:w-5"/>
          <div className='w-1 h-20 sm:h-80 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>David</span>
          </h1> 
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop websites, games <p className='sm:block hidden' >
            and software.
            </p>
          </p>
          <br/>
          <a href='#about' className="sm:inline hidden">
              <button className="bg-violet-500 hover:bg-transparent border border-violet-500 text-white font-bold py-4 px-4 rounded mt-5 mr-5">
                Read more
              </button>
          </a>
          <a href={cv} download className="sm:inline hidden">
            <button  className=" ml-5 bg-transparent hover:bg-violet-500 text-violet-300 font-semibold hover:text-white py-4 px-4 border border-violet-500 hover:border-transparent rounded">
                Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

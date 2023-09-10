import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import m7 from "../assets/mastery/7.png";
import m6 from "../assets/mastery/6.png";
import m5 from "../assets/mastery/5.png";

const Tech = () => {
  return (
    <div className='grid grid-cols-3 flex flex-row flex-wrap place-content-center justify-center gap-2'>
      <img src ={m7} />
      <img src ={m6} />
      <img src ={m5} />
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

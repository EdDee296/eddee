import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { YasuoCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import ins from "../assets/social/ins.png";
import github from "../assets/social/github.png";
import linkedin from "../assets/social/linkedin.png";

// template_788laeu
//service_aihixl9
//5sNKlLZTfT0tYj1VB public key

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_aihixl9',
        'template_788laeu',
        {
          from_name: form.name,
          to_name: "David Pham",
          from_email: form.email,
          to_email: "nqpham@ualberta.ca",
          message: form.message,
        },
        '5sNKlLZTfT0tYj1VB',
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <YasuoCanvas />
      </motion.div>

      <a target="_blank" href='https://www.instagram.com/dav1d.ph/?theme=dark' >
            <button  className=" fixed top-40 left-0 bg-gradient-to-r from-purple-500 to-pink-500 w-5 sm:w-20 pl-0 py-0 sm:pl-5 sm:py-5 rounded z-200">
               <img src={ins} className="w-5 sm:w-10 bg-pink rounded justify-center place-content-center"/>
            </button>
          </a>
          <a target="_blank" href='https://github.com/EdDee296' >
            <button  className=" fixed top-60 left-0 bg-black w-5 sm:w-20 pl-0 py-0 sm:pl-5 sm:py-5 rounded mt-0">
            <img src={github} className="w-5 sm:w-10 bg-pink rounded"/>
            </button>
          </a>
          <a target="_blank" href='https://www.linkedin.com/in/david-pham-a65022255/' >
            <button  className=" fixed top-80 left-0 bg-gradient-to-r from-blue-500 to-blue-100 w-5 sm:w-20 pl-0 py-0 sm:pl-5 sm:py-5 rounded mt-0">
            <img src={linkedin} className="w-5 sm:w-10 bg-pink rounded"/>
            </button>
          </a> 
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

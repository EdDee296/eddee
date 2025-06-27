import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { blogPosts } from "../constants";

const BlogCard = ({ title, description, link, isExternal = false }) => {
  const handleClick = () => {
    if (isExternal) {
      window.open(link, "_blank");
    } else {
      window.location.href = link;
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.2, 0.75)}
      className="bg-tertiary p-6 rounded-xl cursor-pointer hover:bg-[#1f1a3a] transition-colors duration-300"
      onClick={handleClick}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-white font-bold text-[20px] hover:text-[#915EFF] transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-secondary text-[16px] leading-relaxed">
        {description}
      </p>
      <div className="mt-4 flex items-center text-[#915EFF] text-[14px] font-medium">
        Read more →
      </div>
    </motion.div>
  );
};

const Blog = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My stories</p>
        <h2 className={`${styles.sectionHeadText}`}>Blog</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Get ready to hear me yap about my latest projects, coding adventures, and some random stuffs 🙃
      </motion.p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <BlogCard key={`blog-${index}`} {...post} />
        ))}
      </div>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-12 text-center"
      >
        <p className="text-secondary text-[16px]">
          More posts coming soon! Follow my journey as I continue to explore and learn.
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Blog, "blog");

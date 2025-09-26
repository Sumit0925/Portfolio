import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const items = [
  {
    id: 1,
    title: "TrendyMart",
    img: "/TrendyMart.png",
    desc: "Created a full-stack online Shopping Store that allows users to browse, purchase, manage their orders securely while ensuring a seamless user experience.",
    site: "https://trendy-mart-site.onrender.com",
    source: "https://github.com/Sumit0925/Trendy_Mart",
  },
  {
    id: 2,
    title: "E-Gram Panchayat",
    img: "/E-Gram-Panchayat.png",
    desc: "Digital Gram Panchayat portal for citizens, staff, and admin. Citizens can apply for documents, check application status, and admins/staff can manage services and process applications.",
    site:"https://digital-e-gram-panchayat-mojs.onrender.com/",
    source: "https://github.com/Sumit0925/Digital-E-Gram-Panchayat",
  },
  {
    id: 3,
    title: "Dev Technical",
    img: "/DevTechnical.png",
    desc: "Created a full-stack online Service Website securely using JWT authentication. Integrated Context API for efficient state management across the application, ensuring a seamless user experience.",
    site: "https://dev-technical-project-frontend.onrender.com/",
    source: "https://github.com/Sumit0925/Mern_Porject",
  },
  // {
  //   id: 4,
  //   title: "Music App",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  // },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <section>
      <div className="p-container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <div className="container_text">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>

            <div className="buttons">
              <a href={item.source} target="_blank">
                <button><FaGithub className="icon"/> Source</button>
              </a>
              {item.site && (
                <a href={item.site} target="_blank">
                  <button><CiGlobe className="icon"></CiGlobe> Website</button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Portfolio;

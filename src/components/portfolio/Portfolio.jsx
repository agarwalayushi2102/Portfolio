import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Medical Appointment System",
    img: "/medical.png",
    desc: "This website has been designed for patients to search for Hospitals of their choice. The patients will be able to login by our webapp and can also login through their google account. Patients can select hospital from the list provided with the map attached helping them to get the directions to their selected hopsital. Patients can book their appointment by simply filling out details where they will be asked to fill out their preferable date and time.    ",
    link: "https://github.com/agarwalayushi2102/IITISOC-22-Web12-Medical-Appointment-System"
  },
  {
    id: 2,
    title: "Tetris Game",
    img: "/tetris.png",
    desc: "In Tetris, players complete lines by moving differently shaped pieces (tetrominoes), which descend onto the playing field. The completed lines disappear and grant the player points, and the player can proceed to fill the vacated spaces. The game ends when the uncleared lines reach the top of the playing field",
    link: "https://github.com/agarwalayushi2102/Tetris-Game"
},
  {
    id: 3,
    title: "Fault Analysis in comination Circuit",
    img: "/fault.jpeg",
    desc: "This C++ code algorithm implements a fault analysis testing algorithm for a combinational circuit. The algorithm takes into account potential faults in the circuit and performs simulations to identify faulty combinations..",
    link: "https://github.com/agarwalayushi2102/FaultAnalysis_GoogleGirlHackathon"  
},
  {
    id: 4,
    title: "Midnight Table",
    img: "/midnight.png",
    desc: " A food ordering web application to automate the process of ordering by the students, paying for their food where the canteen owners can accept the orders saving a lot of time. ",
    link: "https://github.com/agarwalayushi2102/Hackistica2023"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.link}>See Demo</a> </button>
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
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
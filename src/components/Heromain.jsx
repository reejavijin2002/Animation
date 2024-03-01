import { motion, useTransform, useScroll,useViewportScroll } from "framer-motion";
import { useRef } from "react";
import img1 from '../assets/images/1455210_094903-01.jpeg'
import img2 from '../assets/images/1625468.jpg'
import img3 from '../assets/images/Strange.jpg'
import img4 from '../assets/images/john-wick-chapter-3-parabellum-keanu-reeves-2019-3840x3840-67.jpg'
import img5 from '../assets/images/pexels-sebastiaan-stam-1097456.jpg'
import img6 from '../assets/images/pexels-travis-blessing-1363876.jpg'
import img7 from '../assets/images/Strange.jpg'
import { PinContainer } from "./Animation";
import LampDemo from "./Lamp";


const Example = () => {
  return (
    <>
   
      <HorizontalScrollCarousel />
   
    </>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] w-full bg-slate-950">
         
      <div className="relative  w-full bg-slate-950">
        <LampDemo />
        </div>
      <h1 className="text-white font-body font-bold  text-7xl">Portfolio</h1>
        <motion.div style={{ x }} className="flex gap-2 sticky top-0 w-full   h-screen items-center " >
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      
     
      
    
      
    </section>
  );
};

const Card = ({ card }) => {
    const { scrollYProgress } = useViewportScroll();
  const imageX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    
    <PinContainer>
    <div
      key={card.id}
      className="group relative h-[450px] rounded-md w-[350px] overflow-hidden"
    >
      <div className="bg-neutral-200">
        {/* This is the card with bg-neutral-200 */}
      </div>
      <motion.div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        //   x: imageX,
          transition: "transform 0.3s ease-in-out",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        className="z-0"
      ></motion.div>
      
    </div>
    </PinContainer>
  );
};
 

export default Example;

const cards = [
  {
    url: img1,
    title: "Title 1",
    id: 1,
  },
  {
    url: img2,
    title: "Title 2",
    id: 2,
  },
  {
    url: img3,
    title: "Title 3",
    id: 3,
  },
  {
    url: img4,
    title: "Title 4",
    id: 4,
  },
  {
    url: img5,
    title: "Title 5",
    id: 5,
  },
  {
    url: img6,
    title: "Title 6",
    id: 6,
  },
  {
    url: img7,
    title: "Title 7",
    id: 7,
  },
];

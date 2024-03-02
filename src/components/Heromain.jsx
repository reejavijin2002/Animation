import { motion, useTransform, useScroll } from "framer-motion";
import { useRef,useState,useEffect } from "react";
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
    <div>
     
      <HorizontalScrollCarousel />
     
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: targetRef,
  });
  const [isLastCardVisible, setIsLastCardVisible] = useState(false);

  useEffect(() => {
    if (scrollYProgress.get() === 1) {
      setIsLastCardVisible(true);
    }
  }, [scrollYProgress]);

  const x = useTransform(scrollYProgress, [0, 1], ["1%", isLastCardVisible ? "0%" : "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
      <LampDemo/>
      {!isLastCardVisible && (
        <h1 className="text-white font-body font-bold text-5xl pt-10 sticky top-0 left-0 text-left  pl-28  h-5">
          Portfolio
        </h1>
      )}

      <div className="sticky top-0 flex h-screen items-center overflow-hidden ">


        <motion.div style={{ x }} className="flex gap-6 ">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
  <PinContainer>
    <div
      key={card.id}
      className="group relative  h-[350px] w-[250px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      {/* <div className="absolute inset-0 z-10 grid place-content-center">
      
      </div> */}
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

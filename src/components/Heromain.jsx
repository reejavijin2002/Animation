import { motion, useTransform, useScroll,useViewportScroll } from "framer-motion";
import { useRef ,useState} from "react";
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
  const [X, setX] = useState(0);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const handleDragEnd = (e, { offset, velocity }) => {
    const swipeThreshold = 100;
    const swipeRight = offset.X > swipeThreshold;
    const swipeLeft = offset.X < -swipeThreshold;
  
    if (swipeRight) {
      setX(0);
    } else if (swipeLeft) {
      setX(0);
    } else {
      setX(prevX => prevX + offset.X);
    }
  };

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className=" h-[300vh] w-max  bg-slate-950  ">
         
      <div className="relative  w-full bg-slate-950">
        <LampDemo />
        </div>
      <h1 className="text-white  font-body font-bold  text-5xl mt-10  text-left fixed pl-10">Portfolio</h1>
        <motion.div style={{ x }} className="flex gap-0 sticky top-1 xs:w-full sm:w-1/2 md:w-1/4   h-screen items-center  " >
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
      className="group relative h-[350px] rounded-md w-[270px] "
    >
     
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

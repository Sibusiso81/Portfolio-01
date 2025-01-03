
import React from "react";
import { motion } from "framer-motion";

console.log("navbar");
function Navbar() {
  const children = {
    hidden: {
      clipPath: "polygon(0% 100%,100% 100%,100% 100%,0% 100%)",
    },
    show: (i: number) => ({
      clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
      tramsition: {
        ease: [0.11, 0.325, 0.16, 0.95],
        delay: Math.random() * (i / 20),
        duration: 0.6,
      },
    }),

    exit: (i: number) => ({
      clipPath: "polygon(0% 100%,100% 100%,100% 100%,0% 100%)",
      transition: {
        ease: [0.645, 0.045, 0.355, 0.8],
        delay: Math.random() * (i / 50),
        duration: 0.6,
      },
    }),
  };
  const navLink = {
    hidden: {
      y: '100%',
    },
    show: {
      y: 0,
      transiton: {
        ease: "easeOut",
        delay: Math.random() * (1 / 50),
        duration: 1000,
      },
    },
    exit: {
      y: '100%',
      opacity: 0,
      transiton: {
        ease: "easeOut",
        duration: 1000,
      },
    },
  };
  return (
    <div className="w-screen h-screen overflow-hidden fixed inset-0">
      <div className="w-full h-full grid grid-cols-20 grid-rows-1">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((_, i) => (
          <motion.div
            key={i}
            className="w-[100px] h-full bg-green-600"
            variants={children}
            initial="exit"
            animate="show"
            exit="exit"
            custom={i}
          ></motion.div>
        ))}
      </div>
      <section className="w-full h-full absolute inset-0 flex  justify-center items-center z-30">
        <ul className=" leading-none overflow-hidden h-fit w-fit">
          <li className="overflor-hidden h-fit w-fit">
            <motion.div
              variants={navLink}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <a href="#" className="text-[80px] hover:text-[#eaeaea]">
                About
              </a>
            </motion.div>
          </li>

          <li className="overflor-hidden h-fit w-fit">
            <motion.div
              variants={navLink}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <a href="#" className="text-[80px] hover:text-[#eaeaea]">
                Work
              </a>
            </motion.div>
          </li>

          <li className="overflor-hidden h-fit w-fit">
            <motion.div
              variants={navLink}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <a href="#" className="text-[80px] hover:text-[#eaeaea]">
                Linkddin
              </a>
            </motion.div>
          </li>

          <li className="overflor-hidden h-fit w-fit">
            <motion.div
              variants={navLink}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <a href="#" className="text-[80px] hover:text-[#eaeaea]">
                Contact
              </a>
            </motion.div>
          </li>
        </ul>
      </section>
    </div>
    /* 
  




  */
  );
}

export default Navbar;

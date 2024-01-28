"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Navbar from "./components/Navbar";
import React, { useEffect, useState } from "react";
// import CircularMenu from "./components/Moon/moon";
import { motion, MotionStyle, Variants } from "framer-motion";
import PostButton from "./components/PostButton";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const imgStyle = {
    cursor: "pointer",
  };

  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/screens/signin");
    },
  });

<<<<<<< HEAD
  const [lantern, setLantern] = useState(50);
  const [windowWidth, setWindowWidth] = useState(0);
  // Use useEffect to access window.innerWidth
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setLantern((prev) => Math.floor(Math.random() * (windowWidth - 50)) + 50);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array to run effect only once

  const balloonVariants: Variants = {
    initial: { y: 700, opacity: 0, scale: 1 },
    animate: { y: -500, opacity: 1, scale: 1 },
    exit: { opacity: 0, y: -505 }, // Slightly above the top of the screen
  };

  const balloonStyle: MotionStyle = {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    background: "transparent",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "14px",
    color: "white",
  };

  return (
    <div className="w-screen">
      <PostButton />
      <Navbar />
      <div className="w-1/2">
        {[...Array(lantern)].map((_, index) => (
          <div key={index}>
            <motion.div
              key={index}
              style={{
                ...balloonStyle,
                left: `${Math.random() * (windowWidth - 50)}px`,
              }}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={balloonVariants}
              transition={{
                duration: Math.floor(Math.random() * 6) + 10,
                ease: "linear",
                delay: index * 0.5,
                yoyo: Infinity,
              }}
            >
              {/* Image */}
              <label
                data-tip="hello hello hello hello"
                className="tooltip text-lg"
                htmlFor={`modal-${index}`}
              >
                <img
                  style={imgStyle}
                  src="assets/lantern.png"
                  alt={`lantern-${index}`}
                />
              </label>
            </motion.div>

            {/* Modal */}
            <div className="tooltip" key={index}>
              <input
                type="checkbox"
                id={`modal-${index}`}
                className="modal-toggle"
              />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">{index}</h3>
                  <h3>Category</h3>
                  <textarea placeholder="Enter category"></textarea>
                  <h3>Title</h3>
                  <textarea placeholder="Enter title"></textarea>
                  <h3>Post</h3>
                  <textarea placeholder="Enter post content"></textarea>
                  <div className="modal-action">
                    <label htmlFor={`modal-${index}`} className="btn">
                      Close!
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
=======
 const balloonStyle: MotionStyle = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  background: "transparent",
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "14px",
  color: "white",
 };

 return (
  <div>
   <PostButton />
   <Navbar />
   {[...Array(lantern)].map((_, index) => {
    return (
     <>
      <motion.div
       key={index}
       style={{
        ...balloonStyle,
        left: `${Math.random() * (windowWidth - 50)}px`,
       }}
       initial="initial"
       animate="animate"
       exit="exit"
       variants={balloonVariants}
       transition={{
        duration: Math.floor(Math.random() * 6) + 10,
        ease: "linear",
        delay: index * 0.5,
        yoyo: Infinity,
       }}
      >
       {/* Image */}
       <label
        data-tip="hello hello hello hello"
        className="tooltip text-lg"
        htmlFor={`modal-${index}`}
       >
        <img style={imgStyle} src="assets/lantern.png"></img>
       </label>
      </motion.div>

      {/* Modal */}
      <div className="tooltip">
       <input type="checkbox" id={`modal-${index}`} className="modal-toggle" />
       <div className="modal" role="dialog">
        <div className="modal-box">
         <h3 className="font-bold text-lg">{index}</h3>
         <h3>Category</h3>
         <textarea></textarea>
         <h3>Title</h3>
         <textarea></textarea>
         <h3>Post</h3>
         <textarea></textarea>
         {/* <p className="py-4">This modal works with a hidden checkbox!</p> */}
         <div className="modal-action">
          <label htmlFor={`modal-${index}`} className="btn">
           Close!
          </label>
         </div>
        </div>
       </div>
      </div>
     </>
    );
   })}
  </div>
 );
>>>>>>> f916be487bd91eddd9fd7a42021e93fafc543816
}

Home.requireAuth = true;

"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Navbar from "./components/Navbar";
import React, { useEffect, useState } from "react";
// import CircularMenu from "./components/Moon/moon";
import { motion, MotionStyle, Variants } from "framer-motion";

export default function Home() {
 const imgStyle = {
  cursor: "pointer",
 };

 const session = useSession({
  required: true,
  onUnauthenticated() {
   redirect("/screens/signin");
  },
 });

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
  initial: { y: 700, opacity: 0.5, scale: 1 },
  animate: { y: -500, opacity: 1, scale: 1 },
  exit: { opacity: 0, y: -505 }, // Slightly above the top of the screen
 };

 const balloonStyle: MotionStyle = {
  width: "100px",
  height: "100px",
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
       <label htmlFor={`modal-${index}`}>
        <img style={imgStyle} src="assets/lantern.png"></img>
       </label>
      </motion.div>

      {/* Modal */}
      <input type="checkbox" id={`modal-${index}`} className="modal-toggle" />
      <div className="modal" role="dialog">
       <div className="modal-box">
        <h3 className="font-bold text-lg">{index}</h3>
        {/* <p className="py-4">This modal works with a hidden checkbox!</p> */}
        <div className="modal-action">
         <label htmlFor={`modal-${index}`} className="btn">
          Close!
         </label>
        </div>
       </div>
      </div>
     </>
    );
   })}
  </div>
 );
}

Home.requireAuth = true;

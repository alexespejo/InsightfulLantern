'use client';
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import CircularMenu from "./components/Moon/moon";
import { motion } from "framer-motion";

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/screens/signin");
    }
  });

  const [lantern, setLantern] = useState(50);

  const balloonVariants = {
    initial: { y: 700, opacity: 0.5, scale: 1 },
    animate: { y: -500, opacity: 1, scale: 1 },
    exit: { opacity: 0, y: -505 } // Slightly above the top of the screen
  };

  const balloonStyle = {
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
      {[...Array(lantern)].map((_, index) => (
        <motion.div
          key={index}
          style={{
            ...balloonStyle,
            left: `${Math.random() * (window.innerWidth - 50)}px`
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={balloonVariants}
          transition={{
            duration: Math.floor(Math.random() * 6) + 10,
            ease: "linear",
            delay: index * 0.5,
            yoyo: Infinity // Set yoyo to Infinity for endless loop
          }}
        >
          <a href={`#link-${index}`} style={{ textDecoration: 'none', color: 'white' }}>
            <img src="assets/lantern.png" alt={`Balloon ${index + 1}`} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
          </a>
        </motion.div>
      ))}
    </div>
  );
}

Home.requireAuth = true;

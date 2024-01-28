'use client';
import Navbar from "@/app/components/Navbar";
import React from "react";
import CircularMenu from "@/app/components/Moon/moon";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

function Category() {
 return <div>
    <Navbar />
    <CircularMenu />
    <div style={{
      marginTop: -110,
      flex: "auto",
      textAlign: "center",
    }}>
      <h1 id="title" style={{
        color: "white",
        textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
        fontSize: 35,
      }}>Choose A Category</h1>
    </div>
 </div>;
}

export default Category;

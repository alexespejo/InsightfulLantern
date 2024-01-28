"use client";
import Navbar from "@/app/components/Navbar";
import React, { useEffect, useState } from "react";
import { getPostData } from "../../firebase/firestore";

function Postpage() {
 const [posts, setPosts] = useState([]);
 useEffect(() => {
  // Use an async function to fetch the data
  const fetchData = async () => {
   try {
    const citiesData: any = await getPostData("Coding");
    setPosts(citiesData);
   } catch (error: any) {
    console.error("Error fetching cities:", error.message);
   }
  };

  // Call the async function
  fetchData();
 }, []);
 return (
  <div className="text-slate-300">
   <Navbar />
   <h1>{posts?.length}</h1>
   {posts.map((e: any, index) => {
    return (
     <div key={index}>
      <h1>{e?.data?.title}</h1>
      <h1>{e?.data?.content}</h1>
     </div>
    );
   })}
  </div>
 );
}

export default Postpage;

"use client";
import React, { useState, useEffect } from "react";
import { getPostsFromUser } from "../firebase/firestore";
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";
function page() {
 //  const session = useSession();
 const [userPosts, setUserPosts] = useState([]);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const postsByUser = await getPostsFromUser(
     "aespejo@student.cccd.edu",
     "Coding"
    );
    setUserPosts(postsByUser);
   } catch (error: any) {
    console.error("Error fetching cities:", error.message);
   }
  };

  fetchData();
 }, []);
 return (
  <div className="text-white  overflow-auto">
   <Navbar />
   <div className="flex flex-wrap justify-center space-x-2 space-y-2">
    {userPosts.map((e: any, index) => {
     return (
      <>
       <div className="card w-96  shadow-xl ">
        <div className="card-body">
         <h2 className="card-title">{e.data.title}</h2>
         <p>{e.data.content}</p>
         <div className="card-actions justify-end">
          <button className="glow-btn text-xl base-text font-bold rounded-xl px-3 py-2">
           Replies
          </button>
         </div>
        </div>
       </div>
      </>
     );
    })}
   </div>
  </div>
 );
}

export default page;

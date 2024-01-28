"use client";
import React, { useState, useEffect } from "react";
import { getPostsFromUser } from "../firebase/firestore";
import { useSession } from "next-auth/react";
function page() {
 const session = useSession();
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
 return <div>{JSON.stringify(userPosts)}</div>;
}

export default page;

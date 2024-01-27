"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Navbar from "./components/Navbar";
import CircularMenu from "./components/moon/moon";

export default function Home() {
 const session = useSession({
  required: true,
  onUnauthenticated() {
   redirect("/signin");
  },
 });
 return (
  <div>
   <Navbar />
   <div className="text-white">{session?.data?.user?.email}</div>
   <button className="text-white" onClick={() => signOut()}>
    Logout
   </button>

   <form action={``} method="POST" className="d-flex flex-column">
    <label className="form-control w-full max-w-xs">
     <div className="label">
      <span className="label-text">Title</span>
     </div>
     <input
      type="text"
      name="title"
      placeholder="Type here"
      className="input input-bordered w-full max-w-xs"
     />
    </label>
    <label className="form-control w-full max-w-xs">
     <div className="label">
      <span className="label-text">Content</span>
     </div>
     <input
      type="content"
      name="title"
      placeholder="Type here"
      className="input input-bordered w-full max-w-xs"
     />
    </label>
   </form>
   <CircularMenu />
  </div>
 );
}

Home.requireAuth = true;
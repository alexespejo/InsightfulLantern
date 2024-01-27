"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Navbar from "./components/Navbar";
import CircularMenu from "./components/moon/moon"; // Keep from Sebas version

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

      <form action="/create" method="post" className="d-flex flex-column">
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
            type="content" // Consider changing this to "text" as in the Sebas version
            name="content" // Ensure names are consistent with server-side handling
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <CircularMenu /> {/* Keep from Sebas version */}
    </div>
  );
}

Home.requireAuth = true;

"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Navbar from "./components/Navbar";
import React from "react";
import { useState } from "react";

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
          <input type="text" className="title" placeholder="Type here" />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Content</span>
          </div>
          <input type="text" className="content" placeholder="Type here" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

Home.requireAuth = true;

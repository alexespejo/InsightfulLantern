'use client';
import { signOut } from "next-auth/react";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100" 
    style={{ 
      position: "fixed",
      zIndex: "1000", 
    }}>
      <div className="flex-1">
        {/* Use an anchor tag to wrap the image */}
        <a href="/profile" className="btn btn-ghost text-xl">
          <Link href={"/"}><img className="mx-auto h-12 w-auto" src="/assets/logo.png" alt="Logo" /></Link>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-3">
        <Link href="/"><li><a>Home</a></li></Link>
        <Link href="/screens/category"><li><a>Category</a></li></Link>
        <Link href="/screens/about"><li><a>About</a></li></Link>
          {/* User dropdown */}
          <li>
            <details>
              <summary>
                  <img src="/assets/userprofile.png" alt="Profile" className="h-8 w-8 rounded-full" />
              </summary>
              {/* Dropdown menu */}
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li><a>Account</a></li>
                <li><a></a></li>
                <li><a style={{color:"red",}} onClick={() => signOut()}>Log Out</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

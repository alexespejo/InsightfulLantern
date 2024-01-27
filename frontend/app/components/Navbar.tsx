'use client';
import { signOut } from "next-auth/react";
import React, { useState } from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        {/* Use an anchor tag to wrap the image */}
        <a href="/profile" className="btn btn-ghost text-xl">
          <img className="mx-auto h-12 w-auto" src="/assets/logo.png" alt="Logo" />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-3">
        <li><a>Home</a></li>
        <li><a>About</a></li>
          {/* User dropdown */}
          <li>
            <details>
              <summary>
                  <img src="/assets/userprofile.png" alt="Profile" className="h-8 w-8 rounded-full" />
              </summary>
              {/* Dropdown menu */}
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li><a>Account</a></li>
                <li><a>Settings</a></li>
                <li><a onClick={() => signOut()}>Log Out</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

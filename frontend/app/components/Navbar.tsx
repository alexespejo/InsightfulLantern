import { signOut } from "next-auth/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
 return (
  <div
   className="navbar bg-transparent relative text-slate-300"
   style={{
    position: "fixed",
    zIndex: "1000",
   }}
  >
   <div className="flex-1">
    {/* Use an anchor tag to wrap the image */}
    <a href="/profile" className="btn btn-ghost text-xl">
     <Image
      className="mask mask-decagon"
      src="/assets/logo.png"
      width={90}
      height={90}
      alt="logo"
     />
     <h1>InsightfulLanterns</h1>
    </a>
   </div>
   <div className="flex-none">
    <ul className="menu menu-horizontal px-3">
     <li>
      <Link href="/">
       <button className="btn btn-ghost">Home</button>
      </Link>
     </li>
     <li>
      <Link href="/screens/category">
       <button className="btn btn-ghost">Category</button>
      </Link>
     </li>
     <li>
      <Link href="/screens/about">
       <button className="btn btn-ghost">About</button>
      </Link>
     </li>
     {/* User dropdown */}
     <li>
      <details>
       <summary>
        <img
         src="/assets/userprofile.png"
         alt="Profile"
         className="h-12 w-12 rounded-full"
        />
       </summary>
       {/* Dropdown menu */}
       <ul className="p-2 bg-base-100 rounded-t-none">
        <li>
         <button className="dropdown-btn">Account</button>
        </li>
        <li>
         <button className="dropdown-btn">Settings</button>
        </li>
        <li>
         <button
          className="dropdown-btn"
          style={{ color: "red" }}
          onClick={() => signOut()}
         >
          Log Out
         </button>
        </li>
       </ul>
      </details>
     </li>
    </ul>
   </div>
  </div>
 );
};

export default Navbar;

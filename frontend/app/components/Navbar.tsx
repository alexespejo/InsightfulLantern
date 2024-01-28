import { signOut } from "next-auth/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
 return (
  <div
   className="navbar bg-transparent relative text-slate-300"
   style={{
    position: "sticky",
    top: "0",
    zIndex: "1000",
   }}
  >
   <div className="flex-1">
    <Image
     className="mask mask-decagon"
     src="/assets/logo.png"
     width={50}
     height={50}
     alt="logo"
    />
    {/* Use an anchor tag to wrap the image */}
    <a href="/" className="btn text-white  text-xl h-fit p-2">
     <h1>InsightfulLanterns</h1>
    </a>
   </div>
   <div className="flex-none">
    <ul className="menu menu-horizontal px-3">
     <li>
      <Link href="/">
       <button className="btn">Home</button>
      </Link>
     </li>
     <li>
      <Link href="/screens/about">
       <button className="btn">About</button>
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
        <Link href="/screens/profile">
         <button className="dropdown-btn">Account</button>
        </Link>
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

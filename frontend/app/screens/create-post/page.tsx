'use client';
import Navbar from "@/app/components/Navbar";
import React from "react";

function Postpage() {
 return <div>
    <Navbar />
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
     <img className="mx-auto h-10 w-auto" src="/assets/logo.png" alt="Your Company" />
     <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
      Post
     </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
     <div className="space-y-6">
     <div>
  <div className="mt-2">
    <select
      id="category"
      name="category"
      required
      className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
    >
      <option value="">Select Category</option>
      <option value="school">School</option>
      <option value="work">Work</option>
      <option value="work">General</option>
      <option value="work">Family</option>
      <option value="work">Work</option>
      <option value="work">Work</option>
    </select>
  </div>
</div>
      <div>
       <div className="flex items-center justify-between">
        <label
         htmlFor="password"
         className="block text-sm font-medium leading-6 text-white"
        >
         Title/Topic
        </label>
       </div>
       <div className="mt-2">
        <input
         required
         className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
        />
       </div>
      </div>
      <div>
       <div className="flex items-center justify-between">
        <label
         htmlFor="password"
         className="block text-sm font-medium leading-6 text-white"
        >
         Text
        </label>
       </div>
       <div className="mt-2">
        <input
         required
         className="h-48 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
        />
       </div>
      </div>

      <div>
       <button
      //   onClick={() => Post()}
        className="disabled:opacity-40 flex w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
       >
        Post
       </button>
      </div>
     </div>
    </div>
   </div>
 </div>;
}

export default Postpage;

'use client';
import React from "react"
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Navbar from './components/Navbar';
import CircularMenu from "./components/moon/moon";

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });

  return (
    <div>
      <Navbar />
      <div className='text-white'>{session?.data?.user?.email }</div>
      <button className='text-white' onClick={() => signOut()}>Logout</button>
      <CircularMenu />
    </div>
  );
}

Home.requireAuth = true;

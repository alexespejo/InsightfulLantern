<<<<<<< HEAD
'use client';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Navbar from './components/Navbar';

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
    </div>
  )
=======
"use client";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
export default function Home() {
 const session = useSession({
  required: true,
  onUnauthenticated() {
   redirect("/signin");
  },
 });
 return <div className="p-8">Doing someting</div>;
>>>>>>> d196690fc73f04235a7be691d74fa7fe46d2da9f
}

Home.requireAuth = true;

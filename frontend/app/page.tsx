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
}

Home.requireAuth = true;

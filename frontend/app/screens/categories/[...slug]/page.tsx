"use client";
import Navbar from "@/app/components/Navbar";
export default function Page({ params }: { params: { slug: string } }) {
 const categories = [
  "Coding",
  "General",
  "Health",
  "Relationship",
  "Work",
  "School",
  "Family",
 ];
 return (
  <div>
   <Navbar />
   My Post: {categories[parseInt(params.slug)]}
  </div>
 );
}

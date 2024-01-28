"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Navbar from "@/app/components/Navbar";

const CATEGORIES = ["Coding", "General", "Health", "Relationship", "Work", "School", "Family"];

function CreatePost() {
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");
    const [isPosting, setIsPosting] = useState(false);

    const session = useSession();

    const createPost = async () => {
      try {
          setIsPosting(true);
          const postData = {
              category: CATEGORIES.indexOf(category),
              title: title,
              content: post,
              user: JSON.stringify(session)
          };
  
          const response = await fetch('/create', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(postData)
          });
  
          if (response.ok) {
              const responseData = await response.json();
              console.log(responseData);
              setCategory("");
              setTitle("");
              setPost("");
          } else {
              throw new Error('Failed to create post');
          }
      } catch (error) {
          console.error('Error creating post:', error);
      } finally {
          setIsPosting(false);
      }
  };

    return (
        <div className="flex flex-col items-center">
            <Navbar />
            <div className="mt-10 sm:w-full sm:max-w-sm" style={{
               marginTop: 200,
            }}>
                <div className="space-y-6">
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium leading-6 text-white">
                            Category
                        </label>
                        <div className="mt-2">
                            <select
                                id="category"
                                name="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                            >
                                <option value="">Select Category</option>
                                {CATEGORIES.map((cat, index) => (
                                    <option key={index} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-white">
                            Title/Topic
                        </label>
                        <div className="mt-2">
                            <input
                                id="title"
                                name="title"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="post" className="block text-sm font-medium leading-6 text-white">
                            Post
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="post"
                                name="post"
                                value={post}
                                onChange={(e) => setPost(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            onClick={createPost}
                            disabled={isPosting}
                            className={`flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${isPosting ? 'opacity-40 cursor-not-allowed' : ''}`}
                        >
                            {isPosting ? 'Posting...' : 'Post'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;

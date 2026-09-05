import React from "react";
import Image from "next/image";
import { blogData } from "../data/data";

export default function Blog() {
  return (
    <section id="blog" className="py-16 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Latest Insights</h2>
          <p className="text-slate-600">News, articles, and technical perspectives from our team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col">
              <div className="relative h-48 w-full">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover" 
                  unoptimized 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2 text-slate-900">{post.title}</h3>
                <p className="text-slate-600 text-sm mb-4 flex-grow">{post.desc}</p>
                <button className="text-blue-600 font-semibold text-sm hover:underline self-start">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
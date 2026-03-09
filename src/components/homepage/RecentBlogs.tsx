"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import { getRecentBlogs } from "@/data/blogs";

export default function RecentBlogs() {
  const recentBlogs = getRecentBlogs(3);

  return (
    <section className="relative w-full py-24 px-6 md:px-20 bg-[#04231d] overflow-hidden">
      {/* Background elements to match overall theme */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-emerald-800/30 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold border border-emerald-500/20 rounded-full bg-emerald-950/40 text-emerald-400 uppercase tracking-widest">
              Latest Insights
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Read Our <br />{" "}
              <span className="text-[#E3FFCD]">Latest Blogs</span>
            </h2>
          </div>

          <Link href="/blog">
            <button className="flex items-center gap-3 px-8 py-4 bg-[#E3FFCD] text-[#013228] rounded-full font-bold text-xs tracking-widest cursor-pointer">
              VIEW ALL POSTS <ArrowRight size={16} />
            </button>
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentBlogs.map((blog) => (
            <div key={blog.id} className="h-full">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

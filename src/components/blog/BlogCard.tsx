import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { BlogPost } from "@/data/blogs";

export default function BlogCard({
  blog,
  disableHoverEffect = false,
}: {
  blog: BlogPost;
  disableHoverEffect?: boolean;
}) {
  return (
    <article
      className={`group relative bg-white rounded-3xl p-5 border flex flex-col transition-all duration-300 overflow-hidden h-full ${
        disableHoverEffect
          ? "border-transparent"
          : "border-gray-200 hover:border-[#013228] hover:shadow-xl"
      }`}
    >
      {/* Category Badge */}
      <div className="absolute top-8 right-8 z-10 bg-[#E3FFCD] text-[#013228] text-[10px] font-black tracking-wider px-3 py-1.5 rounded-full shadow-sm opacity-90 group-hover:opacity-100 transition-opacity uppercase">
        {blog.category}
      </div>

      {/* Image Container */}
      <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden mb-6 bg-gray-100">
        {/* Fallback pattern in case image is missing */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-gray-400 via-transparent to-transparent" />

        {blog.coverImage && (
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            // Using a highly compressed placeholder or unoptimized to avoid build issues for missing dummy images
            unoptimized
          />
        )}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col grow">
        <div className="flex items-center gap-3 text-gray-500 text-xs font-semibold mb-4 uppercase tracking-wider">
          <span>{blog.date}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span className="flex items-center gap-1.5 text-gray-500">
            <Clock size={14} className="opacity-70" />
            {blog.readTime}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#013228] mb-3 line-clamp-2 leading-tight">
          <Link href={`/blog/${blog.slug}`}>
            <span className="absolute inset-0" />
            {blog.title}
          </Link>
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 grow font-medium">
          {blog.excerpt}
        </p>

        {/* Footer section inside card */}
        <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3 relative z-20">
            {/* Avatar placeholder */}
            <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden relative border border-gray-200">
              <Image
                src={blog.author.avatar}
                alt={blog.author.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <span className="text-[#013228] text-sm font-bold">
              {blog.author.name}
            </span>
          </div>

          <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#013228] group-hover:border-[#013228] group-hover:text-[#E3FFCD] transition-all">
            <ArrowRight
              size={18}
              className="group-hover:-rotate-45 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

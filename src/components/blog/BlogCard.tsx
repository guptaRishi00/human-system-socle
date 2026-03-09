import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { BlogPost } from "@/data/blogs";

export default function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <article className="group relative bg-[#0a2e26]/80 backdrop-blur-sm rounded-[32px] p-6 border border-emerald-800/30 flex flex-col transition-all duration-300 hover:border-emerald-500/30 overflow-hidden h-full">
      {/* Category Badge */}
      <div className="absolute top-8 right-8 z-10 bg-[#d1e5c4] text-[#04231d] text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg opacity-90 group-hover:opacity-100 transition-opacity">
        {blog.category.toUpperCase()}
      </div>

      {/* Image Container */}
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-[#04231d]">
        {/* Fallback pattern in case image is missing */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/40 via-transparent to-transparent" />

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
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e26] to-transparent opacity-60" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-emerald-100/50 text-xs font-medium mb-4">
          <span>{blog.date}</span>
          <span className="w-1 h-1 rounded-full bg-emerald-500/50" />
          <span className="flex items-center gap-1.5">
            <Clock size={12} />
            {blog.readTime}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight group-hover:text-[#E3FFCD] transition-colors">
          <Link href={`/blog/${blog.slug}`}>
            <span className="absolute inset-0" />
            {blog.title}
          </Link>
        </h3>

        <p className="text-emerald-100/70 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
          {blog.excerpt}
        </p>

        {/* Footer section inside card */}
        <div className="mt-auto pt-6 border-t border-emerald-800/40 flex items-center justify-between">
          <div className="flex items-center gap-3 relative z-20">
            {/* Avatar placeholder */}
            <div className="w-8 h-8 rounded-full bg-emerald-900 overflow-hidden relative border border-emerald-700">
              <Image
                src={blog.author.avatar}
                alt={blog.author.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <span className="text-emerald-50 text-xs font-semibold">
              {blog.author.name}
            </span>
          </div>

          <div className="w-8 h-8 rounded-full border border-emerald-500/30 flex items-center justify-center text-[#E3FFCD] group-hover:bg-[#E3FFCD] group-hover:text-[#013228] transition-all">
            <ArrowRight
              size={14}
              className="group-hover:-rotate-45 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

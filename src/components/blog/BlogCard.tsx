import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { BlogPost } from "@/data/blogs";

export default function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <article className="group relative bg-[#005653] rounded-[32px] p-6 border border-[#009b93]/30 flex flex-col transition-all duration-300 hover:border-[#01dc82] hover:shadow-[0_0_30px_rgba(1,220,130,0.2)] overflow-hidden h-full">
      {/* Category Badge */}
      <div className="absolute top-8 right-8 z-10 bg-white text-[#005653] text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg opacity-90 group-hover:opacity-100 transition-opacity">
        {blog.category.toUpperCase()}
      </div>

      {/* Image Container */}
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-[#009b93]">
        {/* Fallback pattern in case image is missing */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent" />

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
        <div className="absolute inset-0 bg-gradient-to-t from-[#005653] to-transparent opacity-80" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-white/50 text-xs font-medium mb-4">
          <span>{blog.date}</span>
          <span className="w-1 h-1 rounded-full bg-[#01dc82]" />
          <span className="flex items-center gap-1.5 text-white/70">
            <Clock size={12} />
            {blog.readTime}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight group-hover:text-[#01dc82] transition-colors">
          <Link href={`/blog/${blog.slug}`}>
            <span className="absolute inset-0" />
            {blog.title}
          </Link>
        </h3>

        <p className="text-white/80 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
          {blog.excerpt}
        </p>

        {/* Footer section inside card */}
        <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3 relative z-20">
            {/* Avatar placeholder */}
            <div className="w-8 h-8 rounded-full bg-[#009b93] overflow-hidden relative border border-white/20">
              <Image
                src={blog.author.avatar}
                alt={blog.author.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <span className="text-white text-xs font-semibold">
              {blog.author.name}
            </span>
          </div>

          <div className="w-8 h-8 rounded-full bg-white/10 border border-[#01dc82]/30 flex items-center justify-center text-[#01dc82] group-hover:bg-[#01dc82] group-hover:text-white transition-all">
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

import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import { getAllBlogs } from "@/data/blogs";

export const metadata = {
  title: "Blog — Socle RH | Human Systems",
  description:
    "Read our latest insights on HR tech, company culture, and performance management.",
};

export default function BlogListingPage() {
  const allBlogs = getAllBlogs();
  const featuredBlog = allBlogs[0];
  const remainingBlogs = allBlogs.slice(1);

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] selection:bg-emerald-100">
      {/* 1. Header Section */}
      <header className="pt-24 pb-16 px-6 md:px-10 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-emerald-600 transition-colors mb-12 group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase block mb-4">
              Our Journal
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight mb-6">
              Insights on <span className="text-gray-400">Human Systems</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Thought leadership and practical guides for modern HR
              professionals and cultural architects.
            </p>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        {/* 2. Featured Post */}
        {featuredBlog && (
          <div className="mb-24">
            <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-500">
              <div className="lg:col-span-7 overflow-hidden">
                <div className="aspect-[16/10] lg:h-full bg-white">
                  <BlogCard blog={featuredBlog} />
                </div>
              </div>
              <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center bg-white">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-4">
                  Featured Article
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-emerald-700 transition-colors">
                  {featuredBlog.title}
                </h2>
                <p className="text-gray-600 mb-8 line-clamp-3">
                  {featuredBlog.excerpt ||
                    "Explore our deep dive into how modern organizations are evolving their human systems for the digital age."}
                </p>
                <Link
                  href={`/blog/${featuredBlog.slug}`}
                  className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider group/link"
                >
                  Read Article{" "}
                  <ChevronRight
                    size={18}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 3. Grid Header */}
        <div className="flex items-end justify-between mb-10 border-b border-gray-200 pb-6">
          <h3 className="text-2xl font-bold">Latest Updates</h3>
          <span className="text-sm text-gray-500 font-medium">
            {remainingBlogs.length} Articles
          </span>
        </div>

        {/* 4. Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {remainingBlogs.map((blog) => (
            <article key={blog.id} className="group flex flex-col">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <BlogCard blog={blog} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Newsletter Section */}
    </main>
  );
}

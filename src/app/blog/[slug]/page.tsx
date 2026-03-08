import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ChevronRight } from "lucide-react";
import { blogs, getBlogBySlug } from "@/data/blogs";

export default async function BlogDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);

    if (!blog) notFound();

    return (
        <main className="min-h-screen bg-white">
            {/* 1. Refined, Minimal Top Nav */}
            <nav className="pt-8 px-6 md:px-10">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-emerald-600 transition-colors"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Journal
                    </Link>
                    <div className="hidden md:flex items-center gap-2 text-xs font-medium text-gray-400">
                        <span>Blog</span>
                        <ChevronRight size={12} />
                        <span className="text-gray-900">{blog.category}</span>
                    </div>
                </div>
            </nav>

            {/* 2. Impactful Header Section */}
            <header className="pt-16 pb-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Category Tag */}
                    <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.3em] uppercase border border-emerald-100 bg-emerald-50/50 text-emerald-700 rounded-full">
                        {blog.category}
                    </span>

                    {/* The Title - Bold, No Italics */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
                        {blog.title}
                    </h1>

                    {/* Excerpt/Sub-headline */}
                    <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
                        {blog.excerpt}
                    </p>

                    {/* Metadata Bar */}
                    <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 py-6 border-y border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 relative overflow-hidden ring-2 ring-white">
                                <Image
                                    src={blog.author.avatar}
                                    alt={blog.author.name}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                            <span className="text-sm font-bold text-gray-900">{blog.author.name}</span>
                        </div>

                        <div className="flex items-center gap-6 text-xs font-bold tracking-widest text-gray-400 uppercase">
                            <span className="flex items-center gap-2">
                                <Calendar size={14} className="text-emerald-500" />
                                {blog.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock size={14} className="text-emerald-500" />
                                {blog.readTime}
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            {/* 3. Hero Image - Integrated into the flow */}
            <section className="max-w-6xl mx-auto px-6 mb-20">
                <div className="relative aspect-[21/10] md:aspect-[21/9] rounded-[32px] overflow-hidden bg-gray-100 shadow-2xl shadow-emerald-900/5">
                    {blog.coverImage && (
                        <Image
                            src={blog.coverImage}
                            alt={blog.title}
                            fill
                            className="object-cover"
                            priority
                            unoptimized
                        />
                    )}
                </div>
            </section>

            {/* 4. Article Body */}
            <article className="max-w-6xl mx-auto px-6 pb-32">
                <div className="prose prose-lg md:prose-xl prose-emerald 
                    prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight
                    prose-p:text-gray-600 prose-p:leading-[1.8] prose-p:mb-8
                    prose-strong:text-gray-900
                    prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50/30 prose-blockquote:py-2 prose-blockquote:rounded-r-xl">

                    {blog.content.split('\n').map((paragraph, idx) => {
                        if (!paragraph.trim()) return null;
                        if (paragraph.startsWith('### ')) return <h3 key={idx}>{paragraph.replace('### ', '')}</h3>;
                        if (paragraph.startsWith('## ')) return <h2 key={idx}>{paragraph.replace('## ', '')}</h2>;
                        return <p key={idx}>{paragraph}</p>;
                    })}
                </div>

                {/* Footer Bio */}
                <footer className="mt-20 pt-16 border-t border-gray-100">
                    <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                        <div className="w-16 h-16 rounded-full relative overflow-hidden shrink-0">
                            <Image src={blog.author.avatar} alt={blog.author.name} fill className="object-cover" unoptimized />
                        </div>
                        <div className="text-center md:text-left">
                            <h4 className="text-lg font-bold text-gray-900">{blog.author.name}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{blog.author.role}</p>
                        </div>
                        <Link
                            href="/blog"
                            className="md:ml-auto px-6 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all"
                        >
                            All Posts
                        </Link>
                    </div>
                </footer>
            </article>
        </main>
    );
}
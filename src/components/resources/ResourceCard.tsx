import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { ResourceItem } from "@/data/resources";

interface ResourceCardProps {
    resource: ResourceItem;
    basePath: string; // e.g. "/resources/hr-toolkit"
}

export default function ResourceCard({ resource, basePath }: ResourceCardProps) {
    return (
        <article className="group relative bg-white rounded-3xl p-6 border border-gray-200 flex flex-col transition-all duration-300 hover:border-[#013228] hover:shadow-xl overflow-hidden h-full">
            {/* Category Badge */}
            <div className="absolute top-8 right-8 z-10 bg-[#E3FFCD] text-[#013228] text-[10px] font-black tracking-wider px-3 py-1.5 rounded-full shadow-sm opacity-90 group-hover:opacity-100 transition-opacity uppercase">
                {resource.category}
            </div>

            <div className="flex flex-col grow pt-12">
                <div className="flex items-center gap-3 text-gray-500 text-xs font-semibold mb-4 uppercase tracking-wider">
                    <span>{resource.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="flex items-center gap-1.5 text-gray-500">
                        <Clock size={14} className="opacity-70" />
                        {resource.readTime}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-[#013228] mb-3 line-clamp-2 leading-tight transition-colors">
                    <Link href={`${basePath}/${resource.slug}`}>
                        <span className="absolute inset-0" />
                        {resource.title}
                    </Link>
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 grow font-medium">
                    {resource.excerpt}
                </p>

                <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-end">
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

import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface NewsCardProps {
  image: string;
  category: string;
  date: string;
  author: string;
  title: string;
  slug?: string;
}

export function NewsCard({
  image,
  category,
  date,
  author,
  title,
  slug,
}: NewsCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100 aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {/* Category Badge */}
        <Badge className="absolute top-4 left-4 bg-teal-700 hover:bg-teal-800 text-white">
          {category}
        </Badge>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6">
        {/* Meta Information */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <span>📅</span>
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>👤</span>
            <span>By {author}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2">
          {title}
        </h3>

        {/* Read More Link */}
        <a
          href={slug || "#"}
          className="flex items-center gap-2 text-gray-700 font-medium hover:text-teal-700 transition-colors duration-200 mt-auto"
        >
          Read More
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

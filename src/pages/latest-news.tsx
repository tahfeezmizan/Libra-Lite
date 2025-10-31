import { NewsCard } from "@/components/news-card";
import NewImg from "@/assets/news-photo (1).jpg";
import NewImg2 from "@/assets/news-photo (2).jpg";
import NewImg3 from "@/assets/news-photo (3).jpg";
import NewImg4 from "@/assets/news-photo (4).jpg";

interface NewsItem {
  id: number;
  image: string;
  category: string;
  date: string;
  author: string;
  title: string;
  slug?: string;
}

interface LatestNewsSectionProps {
  title?: string;
  description?: string;
  news?: NewsItem[];
}

const DEFAULT_NEWS: NewsItem[] = [
  {
    id: 1,
    image: NewImg,
    category: "Activities",
    date: "Feb 10, 2024",
    author: "Admin",
    title: "Montes Suspendisse Massa Curae Malesuada",
    slug: "/news/1",
  },
  {
    id: 2,
    image: NewImg2,
    category: "Activities",
    date: "Mar 20, 2024",
    author: "Admin",
    title: "Playful Picks Paradise: Kids' Essentials With Dash.",
    slug: "/news/2",
  },
  {
    id: 3,
    image: NewImg3,
    category: "Activities",
    date: "Jun 14, 2024",
    author: "Admin",
    title: "Tiny Emporium: Playful Picks For Kids' Delightful Days.",
    slug: "/news/3",
  },
  {
    id: 4,
    image: NewImg4,
    category: "Activities",
    date: "Mar 12, 2024",
    author: "Admin",
    title: "Eu Parturient Dictumst Fames Quam Tempor",
    slug: "/news/4",
  },
];

export function LatestNews({
  title = "Our Latest News",
  news = DEFAULT_NEWS,
}: LatestNewsSectionProps) {
  return (
    <section className="bg-[#F5F5F5]">
      <div className="container mx-auto px-6 lg:px-10 pt-12 py-16">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold">{title}</h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router";
import bannerImage from "@/assets/banner-hero.png";
export const HeroSection = () => {
  return (
    <div className="py-16 container mx-auto px-2 xl:px-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-20 ">
        <div className="flex-1">
          <h2 className="max-w-2xl text-3xl lg:text-4xl xl:text-6xl font-bold text-gray-900 leading-10 xl:leading-16 mb-3 md:mb-5">
            Manage Your Library Smarter, Not Harder
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-400 md:text-lg mb-8">
            A simple yet powerful way to organize, track, and manage your entire
            book collection. Whether you’re a student, librarian, or book
            enthusiast. our minimal management system helps you keep everything
            in order with ease.
          </p>

          <Link
            to="/borrow-summary"
            aria-label=""
            className="w-36 bg-black text-white px-4 py-2 flex items-center "
          >
            See borrows
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </Link>
        </div>
        <div className="flex-1">
          <img
            src={bannerImage}
            alt="book"
            className="w-full text-black dark:text-white rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

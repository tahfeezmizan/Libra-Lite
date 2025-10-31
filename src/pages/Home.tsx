import { HeroSection } from "@/components/layout/HeroSection";
import { Helmet } from "react-helmet";
import Books from "./Books";
import { Statistic } from "@/components/layout/Statistic";

export const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>LibraLite | Books Management System</title>
        <meta name="description" content="Books" />
      </Helmet>
      <HeroSection />
      <Books />
      <Statistic />
    </div>
  );
};

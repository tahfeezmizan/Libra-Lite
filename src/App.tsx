import { Outlet } from "react-router";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-11/12 mx-auto lg:w-11/12 md:w-11/12 xl:container">
        <div className="min-h-[calc(100vh-441px)]">
          <Outlet />
          <ScrollToTop />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

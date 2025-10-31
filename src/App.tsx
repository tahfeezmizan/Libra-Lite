import { Outlet } from "react-router";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="">
          <Outlet />
          <ScrollToTop />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

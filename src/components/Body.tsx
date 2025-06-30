import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <div className="">
      <main className="h-full relative">
        <div className="absolute top-0 w-full z-50">
          <Header />
        </div>
        <div className="h-full">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Body;

import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <div className="h-full bg-blue-400 relative">
      <div className="absolute top-0 w-full">
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Body;

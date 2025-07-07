import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Body from "./pages/Body";
import Contact from "./pages/contact";
import About from "./pages/About";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <div className="bg-[#F6F5F5] h-full">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;

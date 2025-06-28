import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Body from "./components/Body";
import Contact from "./components/contact";
import About from "./components/About";

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

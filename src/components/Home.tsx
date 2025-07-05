import { BsCaretRightFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="h-[90vh] bg-gradient-to-tr from-[#131B4F] via-[#543BA1] to-[#131B4F] clip-bottom-curve">
      <div className="max-w-7xl mx-auto flex items-center justify-center h-full">
        <img src="starfish-icon.png" className="h-20 w-20" />
        <div className="flex flex-col gap-4 items-center px-5 lg:px-0">
          <h1 className="flex items-center gap-2 text-4xl font-bold font-nunito text-white">
            <BsCaretRightFill size={42} color="#C790F5" />
            <span>Bring Your Brand to Life Online</span>
          </h1>
          <p className="text-xl text-center font-nunito w-[70%] text-gray-300">
            We create engaging websites and social media visuals to help your
            brand stand out in the digital world.
          </p>
          <button className="px-4 py-2 rounded-full bg-[#C790F5] text-white">
            See What We Do ↗
          </button>
        </div>
        <img src="/lightning-icon.png" className="h-20 w-20" />
      </div>
    </div>
  );
};

export default Home;

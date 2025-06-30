const Header = () => {
  return (
    <div className="border-b-2 border-b-gray-600">
      <div className="hidden md:flex items-center justify-between max-w-7xl md:px-5 xl:px-0 py-4 mx-auto text-white">
        <div>
          <h1 className="text-2xl font-nunito font-bold">SocialDev</h1>
        </div>
        <div className="flex items-center gap-5 font-normal text-gray-200">
          <h1 className="cursor-pointer">Home</h1>
          <span>•</span>
          <h1 className="cursor-pointer">Services</h1>
          <span>•</span>
          <h1 className="cursor-pointer">About</h1>
          <span>•</span>
          <h1 className="cursor-pointer">Contact</h1>
        </div>
        <div className="text-lg font-semibold border border-gray-500 bg-transparent py-2 px-4 rounded-full">
          <button>Let's talk</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

const Header = () => {
  return (
    <div className="hidden md:flex items-center justify-between max-w-7xl md:px-5 xl:px-0 border-b-2 border-b-gray-600 py-4">
      <div>
        <h1 className="text-xl font-nunito">SocialDev</h1>
      </div>
      <div className="flex items-center gap-5">
        <h1>Home</h1>
        <span>•</span>
        <h1>Services</h1>
        <span>•</span>
        <h1>About</h1>
        <span>•</span>
        <h1>Contact</h1>
      </div>
      <div className="text-lg font-semibold border border-gray-500 bg-transparent py-2 px-4 rounded-full">
        <button>Lets Talk</button>
      </div>
    </div>
  );
};

export default Header;

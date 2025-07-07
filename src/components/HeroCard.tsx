const HeroCard = () => {
  return (
    <div className="relative mx-auto flex items-center justify-center w-[65vw]">
      <div className="h-[60vh] w-[65vw] border border-blue-500 bg-[#9959FE] rounded-2xl transform -translate-y-52 p-6">
        <div className="bg-gray-800 h-full w-full overflow-hidden rounded-2xl flex items-center justify-center">
          <h1 className="text-2xl font-nunito font-bold text-white text-center uppercase">
            content or video here
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;

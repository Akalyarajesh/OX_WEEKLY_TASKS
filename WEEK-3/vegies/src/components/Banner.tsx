import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <>
      <div className="w-full relative">
        <img
          src={banner}
          alt="banner"
          className="w-full h-[32vh] sm:h-[70vh] mb-20 sm:mb-48"
        />
        <div className="absolute top-15 left-10 w-[80vw] sm:top-60 sm:left-80 sm:w-[50vw]">
          <h1 className="text-4xl sm:text-6xl font-semibold font-sans">
            Healthy Foods
          </h1>
          <p className="text-lg mt-2 sm:text-xl sm:mt-4">
            Your journey to a healthier food starts here.
          </p>
          <button className="mt-3 px-4 py-2  sm:mt-5 sm:px-6 sm:py-4 bg-yellow-200 rounded-lg">
            Shop Now
          </button>
        </div>
        {/* Small Banner */}
        <div className="sm:absolute sm:top-140 flex flex-col sm:flex-row items-center justify-center gap-y-5 w-full ">
          <div className="w-[95vw] h-[23vh] sm:w-[19vw] sm:h-[21vh] flex flex-col justify-center  bg-[url('/src/assets/appleBanner.jpg')] bg-center border border-gray-200 rounded-lg p-5 sm:mr-5">
            <p>Up to 70% discount</p>
            <button className="w-32 py-2 text-left text-red-950">
              Shop Now
            </button>
          </div>
          <div className="w-[95vw] h-[23vh] sm:w-[19vw] sm:h-[21vh] flex flex-col justify-center bg-[url('/src/assets/bananBanner.jpg')] bg-center  border border-gray-200  rounded-lg p-5 sm:mr-5">
            <p>Up to 70% discount</p>
            <button className="w-32 py-2 text-left text-red-950">
              Shop Now
            </button>
          </div>
          <div className="w-[95vw] h-[23vh] sm:w-[19vw] sm:h-[21vh] flex flex-col justify-center bg-[url('/src/assets/cherryBanner.jpg')] bg-center  border border-gray-200  rounded-lg p-5 ">
            <p>Up to 70% discount</p>
            <button className="w-32 py-2 text-left text-red-950">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

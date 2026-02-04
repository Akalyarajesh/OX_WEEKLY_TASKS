import juice from "../assets/juice.webp";

const Offer = () => {
  return (
    <>
      <div className="w-full h-[40vh] flex items-center justify-center  mt-40 border border-gray-100  p-5">
        <div className="w-full sm:w-[30vw]">
          <h2 className="text-3xl sm:text-4xl text-green-900 mb-3 font-semibold">
            Get exclusive offers
          </h2>
          <p className="text-lg sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing phasellus
            vestibulum fermentum laoreet.
          </p>
        </div>
        <div className="hidden sm:block sm:w-[20vw] ml-5">
          <img src={juice} alt="juice" />
        </div>
      </div>
    </>
  );
};

export default Offer;

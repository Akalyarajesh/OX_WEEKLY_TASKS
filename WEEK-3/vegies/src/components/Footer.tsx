import logo from "../assets/logo (1).png";

const Footer = () => {
  return (
    <>
      <div className=" w-full h-auto bg-amber-50 flex flex-col sm:flex-row items-center justify-evenly gap-8 p-10">
        <div className="w-full sm:w-[22vw] py-5">
          <img src={logo} alt="logo" />
          <p className="mb-5 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            mollitia dolorum in blanditiis unde non eligendi.
          </p>
          <h3 className="mt-6 text-lg">Address</h3>
          <p>241 Devonshiren Street Lebanon, PA 17042</p>
          <h3 className="mt-6 text-lg">Phone</h3>
          <p>+1-800-123-45-67</p>
          <h3 className="mt-6 text-lg">Email</h3>
          <p>sales@naturally.com</p>
        </div>

        <div className="w-full sm:w-[22vw]">
          <h4 className="text-2xl mb-7">Sign up & Save</h4>
          <p className="mb-15">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            incidunt voluptatem, labore accusantium illo a.
          </p>
          <input
            type="email"
            className="px-8 py-3 sm:px-10 sm:py-4 bg-amber-100 border border-yellow-100 rounded-tl-full rounded-bl-full"
          />
          <button
            type="submit"
            className="px-4 py-3 sm:px-6 sm:py-4 mb-10 border border-yellow-200 bg-amber-200 rounded-tr-full rounded-br-full cursor-pointer"
          >
            Email
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;

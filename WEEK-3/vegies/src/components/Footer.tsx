// import logo from "../assets/logo (1).png";

// const Footer = () => {
//   return (
//     <>
//       <div className=" w-full h-auto bg-amber-50 flex flex-col sm:flex-row items-center justify-evenly gap-8 p-10">
//         <div className="w-full sm:w-[22vw] py-5">
//           <img src={logo} alt="logo" />
//           <p className="mb-5 mt-5">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
//             mollitia dolorum in blanditiis unde non eligendi.
//           </p>
//           <h3 className="mt-6 text-lg">Address</h3>
//           <p>241 Devonshiren Street Lebanon, PA 17042</p>
//           <h3 className="mt-6 text-lg">Phone</h3>
//           <p>+1-800-123-45-67</p>
//           <h3 className="mt-6 text-lg">Email</h3>
//           <p>sales@naturally.com</p>
//         </div>

//         <div className="w-full sm:w-[22vw]">
//           <h4 className="text-2xl mb-7">Sign up & Save</h4>
//           <p className="mb-15">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
//             incidunt voluptatem, labore accusantium illo a.
//           </p>
//           <input
//             type="email"
//             className="px-8 py-3 sm:px-10 sm:py-4 bg-amber-100 border border-yellow-100 rounded-tl-full rounded-bl-full"
//           />
//           <button
//             type="submit"
//             className="px-4 py-3 sm:px-6 sm:py-4 mb-10 border border-yellow-200 bg-amber-200 rounded-tr-full rounded-br-full cursor-pointer"
//           >
//             Email
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;
import logo from "../assets/logo (1).png";

const Footer = () => {
  return (
    <footer className="w-full bg-amber-50 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo & Info */}
        <div className="flex-1">
          <img src={logo} alt="Logo" className="w-40 mb-5" />
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            mollitia dolorum in blanditiis unde non eligendi.
          </p>

          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>241 Devonshiren Street, Lebanon, PA 17042</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>+1-800-123-45-67</p>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>sales@naturally.com</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="flex-1">
          <h4 className="text-2xl font-semibold mb-5">Sign up & Save</h4>
          <p className="mb-5 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            incidunt voluptatem, labore accusantium illo a.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 sm:px-6 sm:py-4 bg-amber-100 border border-yellow-100 rounded-full focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-amber-200 border border-yellow-200 rounded-full hover:bg-amber-300 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

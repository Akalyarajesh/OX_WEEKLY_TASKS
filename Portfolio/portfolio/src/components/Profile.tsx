import profile from "../assets/akalya.jpg";
// import { BsArrowRight } from "react-icons/bs";
// import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="absolute left-40 top-80 md:left-1/2 md:top-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-300/10 backdrop-blur h-120 md:h-100 w-60 md:w-2/3 rounded-tl-[5rem] rounded-br-[5rem] md:rounded-tl-[8rem] md:rounded-br-[8rem] border border-indigo-200 ">
        <div className="flex flex-col md:flex-row m-8 gap-6 md:gap-10 justify-center items-center">
          <div className="w-35 h-35  md:w-60 md:h-60 border-8 md:border-12 border-white rounded-full ">
            <img
              src={profile}
              alt=""
              className="rounded-full w-31 h-31 md:w-54 md:h-54"
            />
          </div>
          <div className=" w-50 md:w-110">
            <h1 className="text-xl md:text-[1.5rem] lg:text-[3rem] font-semibold">
              I'm <span className="text-blue-500">Akalya</span> <br /> Frontend
              Developer
            </h1>
            <p className="text-sm md:text-md">
              I’m a Frontend Developer who loves building clean, responsive, and
              user-friendly web interfaces. I specialize in turning designs into
              functional, interactive experiences using modern frontend
              technologies.
            </p>
            <button className="bg-blue-700 text-[10px] px-3 md:px-8 py-1 text-white rounded-xl m-2 md:text-sm cursor-pointer">
              See Profile
              {/* <BsArrowRight /> */}
            </button>
            {/* <span className="text-sm">
              <Link to=""> Download Resume</Link>
            </span> */}
            <span>
              <a
                href="/resume/Akalya_Resume.pdf"
                download
                className="text-black text-[10px] md:text-sm hover:underline ml-2"
              >
                Download Resume
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

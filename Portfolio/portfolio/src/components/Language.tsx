import html from "../assets/html.webp";
import css from "../assets/css.png";
import tail from "../assets/tail.png";
import js from "../assets/js.png";
import ts from "../assets/ts.svg";
import react from "../assets/react.png";
import tk from "../assets/tk.png";
import vite from "../assets/vite.webp";
import gr from "../assets/gr.jpg";
import zod from "../assets/zod.jpg";

const Languages = () => {
  return (
    <>
      <div className="relative left-10  md:left-60 w-full md:w-2/3  md:mt-10">
        <div className="flex flex-wrap gap-6 gap-y-10 md:gap-y-20">
          {/* HTML */}
          <div className="relative">
            <div className="absolute left-9 bottom-11 md:left-11 md:bottom-12 w-10 h-10 md:w-15 md:h-15 border-6 md:border-8 border-white rounded-full">
              <img src={html} alt="html logo" className="rounded-full" />
            </div>
            <div className="w-28 h-15 md:w-38 md:h-18 bg-indigo-300 rounded-2xl">
              <p className="text-center pt-5 md:pt-7 font-semibold text-white">
                HTML
              </p>
            </div>
          </div>

          {/* CSS */}
          <div className="relative">
            <div className="absolute left-9 bottom-11 md:left-11 md:bottom-12 w-10 h-10 md:w-15 md:h-15 border-6 md:border-8 border-white rounded-full">
              <img src={css} alt="css logo" className="rounded-full" />
            </div>
            <div className="w-28 h-15 md:w-38 md:h-18 bg-indigo-300 rounded-2xl">
              <p className="text-center pt-5 md:pt-7 font-semibold text-white">
                CSS
              </p>
            </div>
          </div>

          {/* Tailwindcss */}
          <div className="relative">
            <div className="absolute left-9 bottom-11 md:left-11 md:bottom-12 w-10 h-10 md:w-15 md:h-15 border-6 md:border-8 border-white rounded-full">
              <img src={tail} alt="css logo" className="rounded-full" />
            </div>
            <div className="w-28 h-15 md:w-38 md:h-18 bg-indigo-300 rounded-2xl">
              <p className="text-center pt-5 md:pt-7 font-semibold text-white">
                TailwindCSS
              </p>
            </div>
          </div>

          {/* Javascript */}

          <div className="relative">
            <div className="absolute left-9 bottom-11 md:left-11 md:bottom-12 w-10 h-10 md:w-15 md:h-15 border-6 md:border-8 border-white rounded-full">
              <img src={js} alt="css logo" className="rounded-full" />
            </div>
            <div className="w-28 h-15 md:w-38 md:h-18 bg-indigo-300 rounded-2xl">
              <p className="text-center pt-5 md:pt-7 font-semibold text-white">
                JavaScript
              </p>
            </div>
          </div>
          {/* Typescript */}

          <div className="relative">
            <div className="absolute left-9 bottom-11 md:left-11 md:bottom-12 w-10 h-10 md:w-15 md:h-15 border-6 md:border-8 border-white rounded-full">
              <img src={ts} alt="css logo" className="rounded-full" />
            </div>
            <div className="w-28 h-15 md:w-38 md:h-18 bg-indigo-300 rounded-2xl">
              <p className="text-center pt-5 md:pt-7 font-semibold text-white">
                TypeScript
              </p>
            </div>
          </div>
          {/* React */}

          <div className="relative">
            <div className="absolute left-9 bottom-11 md:left-11 md:bottom-12 w-10 h-10 md:w-15 md:h-15 border-6 md:border-8 border-white rounded-full">
              <img src={react} alt="css logo" className="rounded-full" />
            </div>
            <div className="w-28 h-15 md:w-38 md:h-18 bg-indigo-300 rounded-2xl">
              <p className="text-center pt-5 md:pt-7 font-semibold text-white">
                React
              </p>
            </div>
          </div>

          {/* tanstack */}
          <div className="relative">
            <div className="absolute left-9 bottom-11 md:left-11 md:bottom-12 w-10 h-10 md:w-15 md:h-15 border-6 md:border-8 border-white rounded-full">
              <img src={tk} alt="css logo" className="rounded-full" />
            </div>
            <div className="w-28 h-15 md:w-38 md:h-18 bg-indigo-300 rounded-2xl">
              <p className="text-center pt-5 md:pt-7 font-semibold text-white">
                Tanstack
              </p>
            </div>
          </div>
          {/* Zod */}
          <div className="relative">
            <div className="absolute left-9 bottom-11 md:left-11 md:bottom-12 w-10 h-10 md:w-15 md:h-15 border-6 md:border-8 border-white rounded-full">
              <img src={zod} alt="css logo" className="rounded-full" />
            </div>
            <div className="w-28 h-15 md:w-38 md:h-18 bg-indigo-300 rounded-2xl">
              <p className="text-center pt-5 md:pt-7 font-semibold text-white">
                Zod
              </p>
            </div>
          </div>
          {/* Vitest */}
          <div className="relative">
            <div className="absolute left-9 bottom-11 md:left-11 md:bottom-12 w-10 h-10 md:w-15 md:h-15 border-6 md:border-8 border-white rounded-full">
              <img src={vite} alt="css logo" className="rounded-full" />
            </div>
            <div className="w-28 h-15 md:w-38 md:h-18 bg-indigo-300 rounded-2xl">
              <p className="text-center pt-5 md:pt-7 font-semibold text-white">
                Vitest
              </p>
            </div>
          </div>
          {/* Grapgql */}
          <div className="relative">
            <div className="absolute left-9 bottom-11 md:left-11 md:bottom-12 w-10 h-10 md:w-15 md:h-15 border-6 md:border-8 border-white rounded-full">
              <img src={gr} alt="css logo" className="rounded-full" />
            </div>
            <div className="w-28 h-15 md:w-38 md:h-18 bg-indigo-300 rounded-2xl">
              <p className="text-center pt-5 md:pt-7 font-semibold text-white">
                GraphQl
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Languages;

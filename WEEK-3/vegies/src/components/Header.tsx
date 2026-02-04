import { useState } from "react";
import logo from "../assets/logo (1).png";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className=" h-[12vh] bg-amber-50 p-5 flex shadow-md">
        <div className="m-auto w-full flex items-center justify-evenly">
          {/* logo */}
          <div id="logo" className="w-[50vw] flex mr-3 sm:w-[10vw] sm:shrink-0">
            <img src={logo} alt="Logo" className="w-auto" />
          </div>

          {/*Desktop Navigation */}
          <nav id="nav" className="hidden md:flex w-[30vw]">
            <ul className="list-none flex text-lg">
              <Link to="/">
                <li className="px-6 py-2">Home</li>
              </Link>
              <li className="px-6 py-2">Fruits</li>
              <li className="px-6 py-2">Vegetables</li>
              <li className="px-6 py-2">About</li>
              <li className="px-6 py-2">Contact</li>
            </ul>
          </nav>

          {/* Mobile Navigation button */}
          <RxHamburgerMenu
            className="md:hidden text-green-900 text-5xl border border-amber-200 rounded-lg p-3"
            onClick={() => {
              setOpen(!open);
            }}
          />
          <HiOutlineShoppingBag className="md:hidden text-green-900 text-5xl border border-amber-200 rounded-lg p-3" />
          <CiHeart className="md:hidden text-green-900 text-5xl border border-amber-200 rounded-lg p-3" />
        </div>

        {open && (
          <div className="absolute top-25 right-0 w-[50vw] bg-amber-50 z-100">
            <ul className="list-none flex flex-col text-lg">
              <li className="px-6 py-2">Home</li>
              <li className="px-6 py-2">Fruits</li>
              <li className="px-6 py-2">Vegetables</li>
              <li className="px-6 py-2">About</li>
              <li className="px-6 py-2">Contact</li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

import { useState } from "react";
import HeroLink from "./HeroLink";
import logo from "/images/logo.svg";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick() {
    setMenuOpen((state) => !state);
  }

  return (
    <section id="hero">
      <div className="container max-w-6xl mx-auto px-6 py-12">
        <nav className="flex items-center justify-between font-bold text-white">
          <img src={logo} alt="" />

          <div className="hidden h-10 font-alata md:flex md:space-x-8">
            <HeroLink text="About" />
            <HeroLink text="Careers" />
            <HeroLink text="Events" />
            <HeroLink text="Products" />
            <HeroLink text="Support" />
          </div>

          <div className="md:hidden">
            <button
              onClick={handleClick}
              id="menu-btn"
              type="button"
              className={`z-40 block hamburger md:hidden focus:outline-none ${
                menuOpen ? "open" : ""
              }`}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </nav>

        <div
          id="menu"
          className={`absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <a href="#" className="hover:text-pink-500">
            About
          </a>
          <a href="#" className="hover:text-pink-500">
            Careers
          </a>
          <a href="#" className="hover:text-pink-500">
            Events
          </a>
          <a href="#" className="hover:text-pink-500">
            Products
          </a>
          <a href="#" className="hover:text-pink-500">
            Support
          </a>
        </div>

        <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
          Impressive Experiences That Deliver
        </div>
      </div>
    </section>
  );
}

export default Hero;

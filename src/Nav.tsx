import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

import Button from "./components/Button.tsx";

import "./css/Nav.css";

function Nav() {
  let Links = [
    { name: "Home", link: "#Home" },
    { name: "Motive", link: "#Motive" },
    { name: "Benefits", link: "#Benefits" },
    { name: "Divisions", link: "#Divisions" },
    { name: "TimeLine", link: "#Timeline" },
  ];

  let [isOpen, setisOpen] = useState(false);

  return (
    <>
      <div className="w-full fixed top-0 left-0 z-50 ">
        <div className="md:px-10 py-4 px-7 flex  justify-between 2xl:justify-evenly items-center backdrop-blur-lg bg-gray-blur ">
          {/* logo */}
          <a href="http://hmti.polinema.ac.id/ ">
            <div className="flex text-2xl cursor-pointer items-center gap-3 hover:opacity-80 ">
              <img src="./HMTI.png" alt="" className="w-10 h-10" />
              <span className="font-bold text-white">HMTI 09</span>
            </div>
          </a>

          {/* Menu bar */}
          <div
            className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
            onClick={() => setisOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="text-white" />
            ) : (
              <Bars3BottomRightIcon className="text-white" />
            )}
          </div>

          {/* links */}
          <ul
            className={`md:flex pl-9 md:pl-0 gap-5 md:items-center md:pb-0 pb-12 absolute md:static md:bg-transparent md:backdrop-blur-none md:w-auto md:z-auto z-[-110] left-0 w-full transition-all duration-500 ease-in  ${
              isOpen
                ? "top-[64px] md:backdrop-blur-xl backdrop-blur-3xl bg-dark-blue md:bg-gray-blur"
                : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li className="my-7 md:my-0 text-white font-semibold hover:opacity-80 ">
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
            <Button
              href="https://bit.ly/FormPendaftaranOprecCafungHMTI2023"
              text="Daftar"
              filled={true}
            />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;

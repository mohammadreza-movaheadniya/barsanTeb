"use client"
import Link from "next/link";
import { menuData } from "@/stasticData";
import MobileLogo from "../svgs/MobileLogo";
import HamberMenu from "../svgs/HamberMenu";
import Logo from "../svgs/Logo";
import { useState } from "react";
import CrossMobile from "../svgs/crossMobile";
const NavBar = () => {
  let [isMobileNavShow, setisMobileNavShow] = useState(false)
  return (
    <>
      <nav className="bg-white px-4 lg:px-50 py-4  relative z-40">
        <div className="flex justify-between items-center">
          {/* Mobile Icon */}
          <div className="flex items-center gap-x-1">
            <div className="lg:hidden p-0.5 px-1 transition-all">
              {isMobileNavShow ? (<CrossMobile onClick={() => setisMobileNavShow(false)} className=" cursor-pointer" />)
                : (<HamberMenu onClick={() => setisMobileNavShow(true)} className=" cursor-pointer" />)}
            </div>
            {/* Logo */}
            <div>
              <Link href={"/"}>
                <Logo className="hidden lg:block" />
                <MobileLogo className="block lg:hidden" />
              </Link>
            </div>
          </div>
          {/* Desktop Menu*/}
          <ul className="hidden lg:flex justify-between gap-5 my-1.5 mx-19">
            {menuData.map((item, index) => (
              <li key={index} className="px-2 py-1 text-nowrap" >
                <Link href={`/${item.link}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
          {/* Login Button */}
          <button className="bg-[#085da7] text-white my-0.5 mr-13.75 lg:mr-0 py-2 px-6 rounded-lg text-nowrap ">
            ثبت نام/ورود
          </button>
        </div>
      </nav>
      {isMobileNavShow && (
        <div className="fixed inset-0 z-30 lg:hidden flex">
          {/* overlay */}
          <div className="absolute inset-0 bg-[#00000080]" onClick={() => setisMobileNavShow(false)}></div>

          {/* mobile menu */}
          <div className="relative z-40 bg-white w-full h-fit shadow-lg mt-19">
            <ul className="flex flex-col justify-center items-center p-4">
              {menuData.map((item, index) => (
                <li key={index} className="py-2 border-gray-200 hover:bg-[#E5E2E1] w-full text-center font-medium text-[#1C1B1B]">
                  <Link href={`/${item.link}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>

  );
};

export default NavBar;

// "use client"
import Link from "next/link";
import { menuData } from "@/stasticData";
import MobileLogo from "../svgs/MobileLogo";
import HamberMenu from "../svgs/HamberMenu";
import Logo from "../svgs/Logo";
// import { useState } from "react";
const NavBar = () => {
    // let [isMobileNavShow,setisMobileNavShow]=useState(false)
    return (
        <nav className="bg-white px-4 lg:px-50 my-4">
            <div className="flex justify-between items-center">
                {/* Mobile Icon */}
                <div className="flex items-center gap-x-1">
                    <div className="lg:hidden p-0.5">
                        <HamberMenu />
                    </div>
                    {/* Logo */}
                    <div>
                        <Logo className="hidden lg:block" />
                        <MobileLogo className="block lg:hidden" />
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
    );
};

export default NavBar;

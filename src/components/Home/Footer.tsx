import Image from "next/image";
import MobileLogo from "../svgs/MobileLogo";
import { menuData } from "@/stasticData";
import Link from "next/link";
import SocialMediaBox from "./SocialMediaBox";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#EFEDFF] to-[#EDFEF2]  w-full border border-[#E0E3E4] ">
            <section className="mx-4 lg:mx-50 flex flex-col lg:flex-row py-8">
                <div className="flex flex-1 flex-col gap-y-4 text-[#444749] text-sm/[20px] tracking-wide font-medium">
                    {/* Logo */}
                    <MobileLogo className="" />
                    <p className="font-normal text-wrap">
                        پلتفرم مورد اعتماد شما برای طب سنتی، شما را با پزشکان متخصص،
                        محصولات گیاهی ممتاز و راهکارهای سلامت شخصی‌سازی‌شده مرتبط می‌کند.
                    </p>
                    <div className="flex items-center gap-x-1">
                        <Image src={"/img/emailIcon.jpg"} width={20} height={17} alt="emailIcon" className="py-0.875 px-0.5" />
                        <span className="py-0.5">
                            contact@Bersanteb.com
                        </span>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <Image src={"/img/locationIcon.jpg"} width={20} height={17} alt="locationIcon" className="py-0.875 px-0.5" />
                        <span className="py-0.5">
                            تهران، دانشگاه امام صادق (ع)
                        </span>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <Image src={"/img/callIcon.jpg"} width={20} height={17} alt="callIcon" className="py-0.875 px-0.5" />
                        <span className="py-0.5">
                            0987654321
                        </span>
                    </div>
                </div>
                <div className="flex flex-1 flex-col gap-y-4  p-4">
                    <span className="text-[#006E2F] text-base/[24px] tracking-[0.15px]">دسترسی سریع</span>
                    <ul className=" flex flex-col  gap-y-2">
                        {menuData.map((item, index) => {
                            if (item.name === "بلاگ") {
                                return null;
                            }
                            return (
                                <li key={index} className="pr-4 py-2" >
                                    <Link href={`/${item.link}`}>{item.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex flex-1 flex-col gap-y-4  p-4">
                    <span className="text-[#006E2F] text-base/[24px] tracking-[0.15px]">دسترسی بیشتر </span>
                    <ul className=" flex flex-col  gap-y-2">
                        <li className="pr-4 py-2" >
                            <Link href="/blog">بلاگ</Link>
                        </li>
                        <li className="pr-4 py-2" >
                            <Link href="/aboutus">درباره ما</Link>
                        </li>
                        <li className="pr-4 py-2" >
                            <Link href="/terms">قوانین و نکات</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-1 flex-col gap-y-4  p-4">
                    <span className="text-[#006E2F] text-base/[24px] tracking-[0.15px]">شبکه های اجتماعی</span>
                    <div className="grid grid-cols-3 gap-4 w-fit">
                        <SocialMediaBox />
                        <SocialMediaBox />
                        <SocialMediaBox />
                        <SocialMediaBox />
                        <SocialMediaBox />
                    </div>
                    {/* <ul className=" flex flex-col  gap-y-2">
                                <li  className="pr-4 py-2" >
                                    <Link href="/blog">بلاگ</Link>
                                </li>
                                <li  className="pr-4 py-2" >
                                    <Link href="/aboutus">درباره ما</Link>
                                </li>
                                <li  className="pr-4 py-2" >
                                    <Link href="/terms">قوانین و نکات</Link>
                                </li>
                    </ul> */}
                </div>
            </section>

        </footer>
    );
};

export default Footer;

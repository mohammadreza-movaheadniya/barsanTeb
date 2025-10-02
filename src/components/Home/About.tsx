import Image from "next/image";
import LandigLogoMobile from "../svgs/LandigLogoMobile";
import LandingLogo from "../svgs/LandingLogo";

const About = () => {
    return (
        <section className=" bg-gradient-to-t lg:bg-gradient-to-r from-[#00808029] to-[#085DA7] pt-12 lg:pt-16">
            <div className="text-white mx-4 lg:mx-50 flex flex-col lg:flex-row justify-between items-center">
                <div className="flex flex-col">
                    <div className="max-w-84 lg:max-w-150" >
                        <h3 className="text-[32px]/10 tracking-normal lg:text-[57px]/16 lg:tracking-tight mb-4" >
                            <span className="text-[#78FD95]"> برسان طب </span>
                            اعتماد شما برای طب سنتی
                        </h3>
                        <p>پلتفرمی همه‌کاره که پزشکان متخصص، داروهای گیاهی،
                            ابزارهای سلامت مبتنی بر هوش مصنوعی
                            و راه‌حل‌های طبیعی را برای سفر سلامتی شما ترکیب می‌کند.
                        </p>
                        <div className="flex gap-x-3 mt-8">
                            <button className="text-black bg-white py-2 px-4 rounded-lg">پزشکان</button>
                            <button className="text-white">تست مزاج</button>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-8 mt-8 max-w-max pb-16 mx-auto lg:mx-0">
                        <div className="flex-col justify-items-center">
                            <p className="text-[#FCF8F8] font-semibold text-[22px]/[28px] "><span className="p-0.5">+</span>500 </p>
                            <p className="text-[#E0E3E4] text-sm/[20px] tracking-wide">پزشک متخصص</p>
                        </div>
                        <div className="flex-col justify-items-center">
                            <p className="text-[#FCF8F8] font-semibold text-[22px]/[28px] " dir="ltr">10 <span>k+</span></p>
                            <p className="text-[#E0E3E4] text-sm/[20px] tracking-wide"> مشتریان راضی</p>
                        </div>
                        <div className="flex-col justify-items-center">
                            <p className="text-[#FCF8F8] font-semibold text-[22px]/[28px] "><span className="p-0.5">+</span>1000 </p>
                            <p className="text-[#E0E3E4] text-sm/[20px] tracking-wide"> محصولات طبیعی</p>
                        </div>
                    </div>
                </div>
                <div className="mb-12 mt-8.25 lg:mb-6 lg:ml-24 bg-[url(/img/moon.svg)] bg-no-repeat bg-center" >
                    <LandingLogo className="hidden lg:block" />
                    <LandigLogoMobile className="block lg:hidden " />
                </div>
            </div>

        </section>
    );
};

export default About;
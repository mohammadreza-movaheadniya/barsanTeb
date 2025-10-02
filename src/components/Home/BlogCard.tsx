import Image from "next/image";

const BlogCard = () => {
    return (
        <section className="border bg-[#FFFFFF] border-[#C4C7C8] rounded-xl flex flex-col gap-y-4 items-start  overflow-hidden ">
            <Image src="/img/BlogImg.png" width={283} height={180} alt="BlogImg" className="w-full h-[180px]  object-cover"  />
            <div className=" flex flex-col items-start gap-y-4  px-4 w-full h-full mb-4">
                <span className="text-xs/[16px] tracking-wide font-medium text-white bg-[#006E2F] rounded-md p-1 ">گیاهان</span>
                <div className="flex flex-col gap-y-2 ">
                    <p className="text-[22px]/[28px] text-[#1C1B1B] font-semibold ">۱۰ گیاه ضروری که هر خانه‌ای باید داشته باشد</p>
                    <p className="text-[#444749] text-sm ">گیاهان ضروری برای مشکلات رایج سلامتی و نحوه استفاده موثر از آنها را کشف کنید.</p>
                </div>
                <div className="text-[#747879] w-full flex justify-between items-center">
                    <span className="text-xs">دکتر سارا احمدی</span>
                    <span className="text-[11px] font-medium">۲ ساعت پیش</span>
                </div>
            </div>
        </section>
    );
};

export default BlogCard;

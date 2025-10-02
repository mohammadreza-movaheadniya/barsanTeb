
const Counseling = () => {
    return (
        <section className="mx-4 lg:mx-50 my-6 flex flex-col-reverse lg:flex-row gap-4 items-center">
            {/* right side Banner */}
            <div className="flex flex-col w-full items-end gap-y-4 lg:gap-y-2 lg:my-6 " >
                <div className="relative w-full  h-24.25 lg:h-38 rounded-2xl overflow-hidden">
                    <div className="bg-[url('/img/bg-doctor.jpg')] bg-cover bg-center w-full h-full rounded-2xl flex justify-end items-end">
                        <p className="text-base/[24px] tracking-[0.15px] lg:text-[28px]/[36px] font-semibold text-[#1D1A20] mb-4 ml-8 z-50"> بهترین مشاوران ایران</p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/70 to-transparent"></div>
                </div>
                <div className="relative w-full  h-24.25 lg:h-38 rounded-2xl overflow-hidden">
                    <div className="bg-[url('/img/bg-banner.jpg')]  w-full h-full rounded-2xl bg-cover bg-center  flex justify-start items-end px-5">
                        <p className="text-base/[24px] tracking-[0.15px] lg:text-[28px]/[36px] font-semibold text-[#1D1A20] mb-4 ml-8 z-50">کیفیت خدمات حرف اول ماست !</p>
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/70 to-transparent"></div>
                    </div>
                </div>
            </div>
            {/* left side Banner */}
            <div className="w-full h-full" >
                <div className="relative  rounded-2xl w-full  h-51 lg:h-76.5 overflow-hidden">
                    <div className="bg-[url('/img/bgConuling.jpg')]  w-full h-full rounded-2xl bg-cover bg-center  flex justify-center items-end">
                        <p className="text-base/[24px] tracking-[0.15px] lg:text-[28px]/[36px] font-semibold text-[#1D1A20] mb-4 ml-8 z-50 mx-auto">هر زمانی که مشاوره نیاز داشتی !</p>
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/70 to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counseling;




{/* <div className="bg-[url('/img/bg-doctor.jpg')] w-112 h-36.25 bg-cover bg-center rounded-2xl flex justify-end items-end">
                    <p className="text-[28px]/[36px] font-semibold text-[#1D1A20] mb-4 ml-8"> بهترین مشاوران ایران</p>
                    
                </div> */}
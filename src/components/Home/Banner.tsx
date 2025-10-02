const Banner = () => {
    return (
        <section className="bg-[url('/img/MobileBanner.png')] lg:bg-[url('/img/Banner.png')] bg-no-repeat bg-cover  px-7 lg:pr-13.25 pt-104 pb-8 lg:py-20.5 rounded-2xl">
            <div className="flex flex-col items-center lg:items-start gap-y-4 px-2 py-4">
                <p className="text-[#8E1D00] text-4xl/[44px] font-semibold">%50 درصد تخفیف</p>
                <p className="text-[#1C1B1B] text-4xl/[44px] font-semibold">محصولات ارگانیک</p>
            </div>
        </section>
    );
};

export default Banner;

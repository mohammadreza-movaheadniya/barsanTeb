import BlogCard from "./BlogCard";

const Blog = () => {
    return (
        <section className="my-16 lg:mt-24 px-4 lg:px-50 lg:mb-16 py-6 bg-[#F9F9FF] flex flex-col gap-y-6 items-center justify-center ">
            <div className="flex flex-col items-center justify-center gap-y-2 mx-4 lg:mx-50  text-center">
                <p className="text-[32px]/[40px] font-bold text-[#1C1B1B]"> آخرین اخبار از وبلاگ ما</p>
                <p className="text-[#444749] font-normal text-base/[24px] tracking-wider px-2"> بینش‌های تخصصی و نکات بهداشتی از متخصصان طب سنتی ما </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4  ">
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
            <button className="text-[#085DA7] bg-[#F6F3F2] text-sm/[20px] tracking-wide px-4 py-2 rounded-lg border border-[#085DA7] font-medium">بیشتر</button>
        </section>
    );
};

export default Blog;

import PostBox from "./PostBox";

const Post = () => {
    return ( 
        <section className="my-16 lg:my-24 py-6 px-4 lg:px-50 bg-[#085DA7] flex flex-col items-center justify-center ">
            <div className="flex flex-col items-center justify-center gap-y-2 my-6">
                <p className="text-[32px]/[40px] font-bold text-[#FCF8F8]"> پست های برسان</p>
                <p className="text-[#E0E3E4] font-normal text-base/[24px]  tracking-wider">آخرین نکات و به‌روزرسانی‌ها از جامعه متخصصان ما </p>
            </div>
            <div className="my-6 w-full">
                <PostBox IsImage={true} />
                <PostBox IsImage={false} />
            </div>
            <button className="text-[#085DA7] bg-[#F6F3F2] text-sm/[20px] tracking-wide px-4 py-2 rounded-lg border border-[#085DA7] font-medium">بیشتر</button>

        </section>
    );
};

export default Post;

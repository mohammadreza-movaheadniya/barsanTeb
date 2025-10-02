import Image from "next/image";
import ShareIcon from "../svgs/ShareIcon";
import CommentIcon from "../svgs/CommentIcon";
import LikeIcon from "../svgs/LikeIcon";

const PostBox = ({ IsImage }: { IsImage: boolean }) => {
    return (
        <section className="flex flex-col lg:flex-row gap-4 bg-white p-4 rounded-2xl mx-4 mb-4">
            {/* profile */}
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image src="/img/profile.png" alt="Profile" width={64} height={64} />
            </div>
            {/* detail */}
            <div>
                <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
                    <span className="text-[22px]/[28px] font-semibold">دکتر سارا احمدی  </span>
                    <span className="bg-[#006E2F] text-white rounded-[6px] p-1 text-xs/[16px] font-medium tracking-[0.1px] flex justify-center items-center">پزشک طب سنتی </span>
                    <span className="text-[#747879] text-[11px]/[16px] tracking-wide font-medium">۲ ساعت پیش </span>
                </div>
                <div className="text-[14px]/[20px] text-[#444749] mt-1 tracking-wide">
                    نکته‌ای در مورد روتین صبحگاهی: روز خود را با آب گرم و عسل شروع کنید.
                    این روش باستانی به افزایش متابولیسم و ​​سلامت گوارش کمک می‌کند.

                </div>
                {/* image */}
                {IsImage && (
                    <div className="my-4">
                        <Image src="/img/Posts.png" alt="Post" width={400} height={200} />
                    </div>
                )}
                {/* link share  */}
                <div className="flex gap-x-4 my-4">
                    <div className="flex items-center gap-2"> <span className="text-xs/[16px] tracking-wide py-2 text-[#747879]">اشتراک گذاری</span><ShareIcon className="" /></div>
                    <div className="flex items-center gap-2"> <span className="text-xs/[16px] tracking-wide py-2 text-[#747879]">8</span><CommentIcon className="" /></div>
                    <div className="flex items-center gap-2"> <span className="text-xs/[16px] tracking-wide py-2 text-[#747879]">12</span><LikeIcon className="" /></div>
                </div>
            </div>
        </section>
    );
};

export default PostBox;

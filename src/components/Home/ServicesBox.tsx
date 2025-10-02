import Image from "next/image";
const ServicesBox = ({ iconSrc, title }: { iconSrc: string, title: string }) => {
    return (
        <section className="flex flex-col gap-4 items-center mx-13.5">

            <div className="w-18 h-18 flex justify-center items-center rounded-[12px] 
bg-[linear-gradient(to_bottom_right,#86FF99,#88C3F7,#E9B0EA,#E0ABEE)]">
                <Image src={iconSrc} width={46.67} height={42} alt={title} />
            </div>
            <h6 className="text-center w-32  text-[#1C1B1B] text-[18px]/[28px] font-semibold px-0.75">{title}</h6>
        </section>
    );
};

export default ServicesBox;

import Image from "next/image";
import Link from "next/link";

const SocialMediaBox = () => {
    return (

    // <section className="w-10 h-10 flex items-center justify-center  bg-[#008080] rounded-sm">
        <Link className="w-10 h-10 flex items-center justify-center  bg-[#008080] rounded-sm" href={"https://www.instagram.com"} target="_blank"  >
        <Image src="/img/socialMedia.png" width={20} height={17} alt="Instagram" className="" />
        </Link>
    // </section>
)
}

export default SocialMediaBox;
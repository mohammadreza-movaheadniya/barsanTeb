import Banner from "./Banner";
import ServicesBox from "./ServicesBox";
import { servicesData } from "@/stasticData";
const Services = () => {
    return (
        <section className=" mx-4 lg:mx-50 my-16 lg:my-24 flex flex-col gap-y-6">
            <div className="flex flex-col items-center gap-y-2 text-center">
                <h5 className="font-bold text-[32px]/[40px]">خدمات جامع ما</h5>
                <p className="text-base/[24px] tracking-wider">هر آنچه برای سلامت و تندرستی طبیعی نیاز<br className="lg:hidden" /> دارید در یک پلتفرم یکپارچه</p>
            </div>
            {/* box Section */}
            <div className="grid grid-cols-2 gap-y-8.25 lg:grid-cols-5 mb-16 lg:mb-24">
                {servicesData.map((item, index) => (
                    <ServicesBox key={index} {...item}/>
                ))}
            </div>
            <Banner/>

        </section>
    );
};

export default Services;

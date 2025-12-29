import Image from "next/image";
import { AboutData } from "../Data/AboutData/About";
import CustomerSaysSection from "../components/CustomerSaysSection/CustomerSaysSection";
import { title } from "../Data/CustomerSaysData/CustomerSaysData";
import CenterOffer from "../components/CenterOffer/CenterOffer";
import { CenterOfferData } from "../Data/CenterOfferData/CenterOfferData";
import AboutServices from "../components/AboutServices/AboutServices";
import { AboutServicesData } from "../Data/AboutServicesData/AboutServicesData";

export default function about(){
    return (
        <>
            <section className="relative h-screen w-full font-open-sans flex flex-col justify-center items-center text-center text-white">
                <div className="absolute top-0 -z-10 w-full h-full">
                    <Image src={AboutData.bgImage} alt="background" fill priority className="object-fill"/>
                </div>
                <div className="flex flex-col justify-center items-center 2xl:mt-32">
                    <div className="flex flex-col items-center gap-6">
                        <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-podcast font-normal leading-none ">{AboutData.title}</h1>
                        <p className="px-3.5 lg:px-0 lg:text-lg xl:text-xl 2xl:text-2xl font-bold max-w-120 xl:max-w-175 lg:max-w-145 2xl:max-w-[847.75px]">{AboutData.subTitle}</p>
                        <button className="px-4 py-2 xl:px-5 xl:py-3 2xl:px-6 2xl:py-3.5 xl:text-lg 2xl:text-xl font-semibold border rounded-full">{AboutData.button.text}</button>
                    </div>
                </div>
            </section>
            <CenterOffer centerOfferProps={CenterOfferData} />
            <AboutServices aboutServicesProps={AboutServicesData} />
            <CustomerSaysSection sectionHeader={title.sectionHeader} />
        </>
    );
}
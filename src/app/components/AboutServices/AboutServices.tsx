import { AboutServicesProps } from "@/app/interfaces/AboutServices/AboutServices"
import Image from "next/image"

const AboutServices = ({aboutServicesProps}: AboutServicesProps) => {
  return (
    <section className="bg-[url('/assets/imgs/bg-image.png')] bg-cover py-10 xl:py-15 2xl:py-20.75 px-5 md:px-[7.8125vw] lg:px-[13.02083vw] mt-18 xl:mt-25 2xl:mt-30 font-open-sans">
      <div className="flex flex-col lg:flex-row justify-between gap-8 xl:gap-16 2xl:gap-20.75 ">
        {aboutServicesProps.content.map((item, index) => (
            <div key={index} className="bg-[#FFFFFF4D] p-5 xl:p-6 2xl:p-7.5 rounded-3xl flex flex-col items-center flex-1 w-75 mx-auto">
                <div className="mb-2 xl:mb-3 2xl:mb-3.75">
                    <Image src={item.icon} alt="icon" width={60} height={60} className="object-cover w-10 xl:w-15"/>
                </div>
                <h2 className="text-dark text-center text-xs xl:text-lg 2xl:text-xl font-semibold">{item.service}</h2>
            </div>
        ))}
      </div>
    </section>
  )
}

export default AboutServices

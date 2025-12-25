import { ServiceProps } from "@/app/interfaces/ServicesSection/ServicesSection"
import Image from "next/image"

const ServicesSection = ({serviceProps}: ServiceProps) => {
  return (
    <section className="px-5 md:px-[7.8125vw] lg:px-[13.02083vw] mt-7.5 lg:mt-12.5 xl:mt-22.5 2xl:mt-30 mb-7.5 xl:mb-10.5 2xl:mb-15.75 font-open-sans">
      <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-7 2xl:gap-8.25">
        {serviceProps.map((service, index) => (
            <div key={index} className="max-w-90 mx-auto lg:max-w-full text-center lg:text-start">
                <div className="rounded-3xl mb-4 2xl:mb-5">
                    <Image src={service.image} alt="cover" width={330} height={302} className="object-cover w-full"/>
                </div>
                <h1 className="text-2xl xl:text-xl 2xl:text-2xl font-bold text-black mb-2 2xl:mb-3">{service.title}</h1>
                <p className="text-lg xl:text-sm 2xl:text-lg font-normal text-black leading-6">{service.description}</p>
            </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection

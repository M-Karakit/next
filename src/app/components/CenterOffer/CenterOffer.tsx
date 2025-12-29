import { CenterOfferProps } from "@/app/interfaces/CenterOfferSection/CenterOfferSection"
import Image from "next/image"

const CenterOffer = ({centerOfferProps}: CenterOfferProps) => {
  return (
    <section className="px-5 md:px-[7.8125vw] lg:px-[13.02083vw] mt-7.5 lg:mt-12.5 xl:mt-22.5 2xl:mt-30 font-open-sans">
          <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-center gap-6 lg:gap-7 xl:gap-12.5 2xl:gap-17.5">
            <div className="w-fit h-auto py-2.5 px-3.5 xl:py-4.5 xl:px-5.5 2xl:py-[21.5px] 2xl:px-6.25 border border-gray rounded-3xl">
                <Image src={centerOfferProps.image} alt="image" width={600} height={516} className="object-cover max-w-85 xl:max-w-full" />
            </div>
            <div className="text-center lg:text-start max-w-125 lg:max-w-90 xl:max-w-137.5 2xl:max-w-175">
                <div className="mb-4 lg:mb-2 xl:mb-3.5 2xl:mb-8">
                    <p className="text-xs xl:text-sm 2xl:text-base font-semibold leading-none text-black opacity-60 mb-1.5">{centerOfferProps.text}</p>
                    <h1 className="text-xl xl:text-2xl 2xl:text-[32px] font-extrabold text-black">{centerOfferProps.title}</h1>
                </div>
                <p className="xl:text-base 2xl:text-lg font-normal xl:leading-6 2xl:leading-8 text-black xl:mb-4 2xl:mb-8">{centerOfferProps.description}</p>
                <div className="flex items-center justify-center lg:justify-start gap-5 xl:gap-6.25 2xl:gap-12.5">
                    {centerOfferProps.info.map((inf, index) => (
                        <div key={index}>
                            <p className="text-xl xl:text-2xl 2xl:text-[32px] font-bold text-orange leading-8 2xl:mb-1.5">{inf.number}</p>
                            <p className="text-xs xl:text-sm 2xl:text-base font-normal text-black xl:leading-5 2xl:leading-6.5 opacity-60 max-w-20.75">{inf.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default CenterOffer

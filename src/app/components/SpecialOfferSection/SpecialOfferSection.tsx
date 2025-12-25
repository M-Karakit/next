import { SpecialOfferProps } from "@/app/interfaces/SpecialOfferSection/SpecialOfferSection"

const SpecialOfferSection = ({specialOfferProps}: SpecialOfferProps) => {
  return (
    <section className="relative py-5 xl:py-10 2xl:py-15 px-5 md:px-[7.8125vw] lg:px-[13.02083vw] mt-70 xl:mt-39.5 2xl:mt-54.25 font-open-sans bg-[url('/assets/imgs/bg-image.png')] bg-cover">
      <div className="flex flex-col-reverse lg:flex-row gap-6 lg:justify-between items-center">
        <div className="flex flex-col text-center justify-center items-center gap-3.5 xl:gap-5 2xl:gap-8 max-w-110 xl:max-w-132.5 2xl:max-w-142.25 py-5 px-8 xl:py-6 xl:px-9 2xl:py-7.5 2xl:px-[42.62px] bg-[#FFFFFF4D] rounded-3xl">
            <h1 className="text-lg lg:text-2xl xl:text-3xl 2xl:text-[32px] font-extrabold text-black ">{specialOfferProps.title}</h1>
            <p className="text-sm lg:text-base xl:text-lg lg:leading-6.5 font-normal text-dark">{specialOfferProps.description}</p>
            <button className="text-sm xl:text-xl font-semibold w-24 h-6.5 text-white xl:w-53 xl:h-11.75 bg-orange rounded-full">{specialOfferProps.button.text}</button>
        </div>
        <div className="absolute bottom-12 -z-10 lg:z-0 lg:bottom-0 lg:right-[13.02083vw]">
            <img src={specialOfferProps.image} alt="cover" className="object-cover w-70 h-100 lg:w-70 lg:h-100 xl:w-80 xl:h-120 2xl:w-106.75 2xl:h-150"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOfferSection

import { MostPopularData } from "@/app/Data/MostPopularData/MostPopularData"
import { mostPopularSectionProps } from "@/app/interfaces/MostPopularSection/MostPopularSection"
import MostPopularCard from "./MostPopularCard"

const MostPopularSection = ({sectionHeader}: mostPopularSectionProps) => {
  return (
    <section className="px-5 md:px-[7.8125vw] lg:px-[13.02083vw] mt-12 lg:mt-12.5 xl:mt-22.5 2xl:mt-30 font-open-sans">
      <h1 className="text-center lg:text-start text-xl xl:text-2xl 2xl:text-[32px] font-extrabold text-black leading-none mb-6 2xl:mb-15">{sectionHeader}</h1>
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-5 max-w-96 lg:max-w-full mx-auto">
        {MostPopularData.map((card, index) => (
            <div key={index}>
                <MostPopularCard mostPopularProps={card} />
            </div>
        ))}
      </div>
    </section>
  )
}

export default MostPopularSection

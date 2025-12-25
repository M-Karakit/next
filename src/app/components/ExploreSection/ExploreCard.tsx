import { ExploreCardProps } from "@/app/interfaces/ExploreSection/ExploreSection"
import Image from "next/image"

const ExploreCard = ({cards}: ExploreCardProps) => {
  return (
    <div className="w-full font-open-sans">
        <div className="rounded-3xl mb-4 overflow-hidden">
            <img src={cards.cover} alt="cover" className="object-cover w-full max-h-96 2xl:h-101"/>
        </div>
        <div className="flex flex-col gap-3">
            <h1 className="text-xl md:text-base xl:text-lg 2xl:text-2xl font-bold text-black leading-none">{cards.title}</h1>
            <div className="flex items-center gap-2.5">
                <p className="text-lg md:text-sm xl:text-base 2xl:text-lg text-black font-semibold leading-none opacity-80 ">{cards.text}</p>
                <p className="text-xl md:text-lg xl:text-lg 2xl:text-2xl font-extrabold text-orange leading-none">{cards.price}</p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-0.5 lg:gap-1.5 text-orange">
                    <div>
                        <Image src={cards.date.icon} alt="date-icon" width={24} height={24} />
                    </div>
                    <p className="md:text-xs xl:text-sm font-semibold leading-none">{cards.date.text}</p>
                </div>
                <div className="flex items-center gap-0.5 lg:gap-1.5 text-orange">
                    <div>
                        <Image src={cards.people.icon} alt="people-icon" width={24} height={24}/>
                    </div>
                    <p className="md:text-xs xl:text-sm font-semibold leading-none">{cards.people.text}</p>
                </div>
            </div>
            <p className="text-xl md:text-sm xl:text-base leading-6 font-normal text-black">{cards.description}</p>
        </div>
    </div>
  )
}

export default ExploreCard

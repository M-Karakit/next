import { MostPopularCardProps } from "@/app/interfaces/MostPopularSection/MostPopularSection"
import Image from "next/image"

const MostPopularCard = ({mostPopularProps}: MostPopularCardProps) => {
  return (
    <div className="w-full border border-gray rounded-3xl hover:shadow-[0_0_20px_#0000001A]">
      <div className="w-full rounded-tl-3xl rounded-tr-3xl">
        <Image src={mostPopularProps.cover} alt="cover" width={340} height={340} className="object-cover w-full"/>
      </div>
      <div className="p-5 xl:p-4 2xl:p-6.25">
        <h1 className="text-2xl xl:text-lg 2xl:text-xl font-extrabold text-black mb-3 2xl:mb-4">{mostPopularProps.title}</h1>
        <div className="flex gap-[6.72px] mb-3 xl:mb-4">
            <p className="text-xl xl:text-lg 2xl:text-xl font-normal text-black opacity-50">{mostPopularProps.payment.currency}</p>
            <p className="text-4xl xl:text-4xl 2xl:text-5xl font-bold text-orange">{mostPopularProps.payment.amount}</p>
            <p className="text-lg xl:text-base 2xl:text-lg font-normal self-end">{mostPopularProps.payment.period}</p>
        </div>
        <div className="lg:mb-3 xl:mb-4">
            {mostPopularProps.info.flat().map((item, index) => (
                <div key={index} className="py-4 pr-2.5 flex items-center gap-4">
                    <div>
                        <Image src={item.icon} alt="icon" width={24} height={24} className="object-cover w-5 h-5 2xl:w-full"/>
                    </div>
                    <p className="xl:text-sm 2xl:text-lg font-normal text-black">{item.text}</p>
                </div>
            ))}
        </div>
        <button className="border border-orange rounded-full lg:text-xl text-orange py-2 xl:py-3 text-center w-full">{mostPopularProps.button.text}</button>
      </div>
    </div>
  )
}

export default MostPopularCard

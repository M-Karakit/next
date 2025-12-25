import { TourProps } from "@/app/interfaces/Tours/Tours"
import Image from "next/image"

const Tours = ({tourProps}: TourProps) => {
  return (
    <div className="bg-[#FFFFFF33] lg:p-5 rounded-xl font-open-sans">
      <div className="flex flex-col">
        <div className="flex">
            {tourProps.category.map((cat, index) => (
                <div key={index} className={`flex items-center gap-2.5 p-2.5 xl:p-4 bg-[#FFFFFF66]  ${cat.isActive ? 'bg-white text-orange rounded-tl-xl' : 'rounded-tr-xl'}`}>
                    <div>
                        <Image src={cat.icon} alt="icon" width={24} height={24} />
                    </div>
                    <h3 className="text-sm xl:text-base 2xl:text-lg font-semibold leading-none">{cat.title}</h3>
                </div>
            ))}
        </div>
        <div className="lg:p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl bg-white text-black">
            <div className="flex flex-col items-center lg:flex-row lg:items-start p-5 lg:p-0">
                {tourProps.types.map((type, index) => (
                    <div key={index} className="p-2 xl:p-3 2xl:p-4">
                        <div className="flex items-center gap-1.75 mb-1.5">
                            <div>
                                <Image src={type.icon} alt="icon" width={24} height={24} />
                            </div>
                            <h3 className="text-sm xl:text-base 2xl:text-lg font-semibold leading-none">{type.title}</h3>
                        </div>
                       <div className="flex items-center gap-5">
                         <select className="text-[#aaaaaa] text-sm xl:text-base 2xl:text-lg font-normal pl-7 focus:outline-none appearance-none">
                            {type.options?.map((option, index) => (
                                <option key={index}  value={option.code}>
                                    {option.code}
                                </option>
                            ))}
                        </select>
                        <div>
                            <Image src="assets/imgs/system-uicons_chevron-down.svg" alt="icon" width={20} height={20}/>
                        </div>
                       </div>
                    </div>
                ))}
                <div className="p-3 xl:p-5 2xl:p-6 rounded-xl bg-orange flex items-center h-10.5 my-auto xl:my-0 xl:h-18 2xl:h-20">
                    <img src={tourProps.search} alt="search-icon" className="w-4.5"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Tours

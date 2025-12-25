import { CustomerSaysCardProps } from "@/app/interfaces/CustomerSays/CustomerSays"
import Image from "next/image"

const CustomerSaysCard = ({customerSays}: CustomerSaysCardProps) => {
  return (
    <div className="max-w-140 mx-auto lg:mx-0 lg:max-w-full border border-gray rounded-3xl p-4 xl:p-6 2xl:p-7.5">
      <div className="flex flex-col items-center lg:gap-3 2xl:gap-3.75">
        <div className="rounded-[50%]">
            <Image src={customerSays.avatar} alt="cover" width={80} height={80} className="object-cover w-15 xl:w-20"/>
        </div>
        <p className="text-sm xl:text-lg font-normal text-black">{customerSays.name}</p>
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="">
            <Image src={customerSays.icon} alt="icon" width={40} height={28} className="object-cover w-5 xl:w-10"/>
        </div>
        <p className="text-sm xl:text-base 2xl:text-lg leading-7.5 font-normal text-black">{customerSays.description}</p>
        <div className="self-end">
            <Image src={customerSays.icon} alt="icon" width={40} height={28} className="object-cover w-5 xl:w-10"/>
        </div>
      </div>
    </div>
  )
}

export default CustomerSaysCard

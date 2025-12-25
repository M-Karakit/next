'use client'
import { SlideButtonProps } from "@/app/interfaces/SlideButton/SlideButton"
import Image from "next/image"

const SlideButtons = ({button}: SlideButtonProps) => {
  return (
    <div className="flex items-center gap-3 xl:gap-4 2xl:gap-5">
      <button onClick={button.onPrev} disabled={!button.canPrev} className={`flex justify-center items-center rounded-full w-7.5 h-7.5 xl:w-10 xl:h-10 2xl:w-12.5 2xl:h-12.5  ${!button.canPrev ? 'bg-gray cursor-not-allowed' : 'bg-orange'}`}>
        <Image src="/assets/imgs/left-arrow.svg" alt="prev" width={14} height={7} className="w-2.5 h-2.5 xl:w-3.5 xl:h-3.5" />
      </button>
      <button onClick={button.onNext} disabled={!button.canNext} className={`flex justify-center items-center rounded-full w-7.5 h-7.5 xl:w-10 xl:h-10 2xl:w-12.5 2xl:h-12.5  ${!button.canNext ? 'bg-gray cursor-not-allowed' : 'bg-orange'}`}>
        <Image src="/assets/imgs/left-arrow.svg" alt="next" width={14} height={7} className="rotate-180 w-2.5 h-2.5 xl:w-3.5 xl:h-3.5"/>
      </button>
    </div>
  )
}

export default SlideButtons

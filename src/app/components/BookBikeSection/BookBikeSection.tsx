import { BookBikeProps } from "@/app/interfaces/BookBike/BookBike"

const BookBikeSection = ({bookBikeProps}: BookBikeProps) => {
  return (
    <section className="relative py-5 xl:py-10 2xl:py-15 px-5 md:px-[7.8125vw] lg:px-[13.02083vw] mt-20 xl:mt-39.5 2xl:mt-54.25 font-open-sans bg-[url('/assets/imgs/bg-image.png')] bg-cover">
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="flex flex-col items-center gap-9">
            <h1 className="xl:text-[32px] font-extrabold text-black">{bookBikeProps.title}</h1>
            <div className="w-full px-6 py-6 xl:px-8.5 xl:py-7.5 bg-white/30 flex flex-col justify-center gap-7.5 rounded-3xl">
                <div className="w-full grid grid-cols-2 items-center gap-3.5 xl:gap-7.5">
                    {bookBikeProps.inputs.map((input, index) => (
                        <div key={index} className="w-full flex flex-col gap-2.5">
                            <label htmlFor={input.id} className="text-sm xl:text-lg font-semibold text-black">{input.name}</label>
                            <div className="w-full 2xl:w-79.5 py-1.5 px-3.5 xl:py-3.5 xl:px-6 flex justify-between items-center bg-white rounded-lg">
                                <input type={input.type} id={input.id} name={input.name} placeholder={input.placeholder} className="focus:outline-0 placeholder:text-black/50 placeholder:text-xs placeholder:xl:text-base" required/>
                                {input.icon && (
                                    <div>
                                        <img src={input.icon} alt="icon" className="object-cover" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button className="py-2 w-40 xl:py-2.5 xl:w-53 2xl:text-xl text-sm text-white bg-orange rounded-full">{bookBikeProps.button.text}</button>
                </div>
            </div>
        </div>
        <div className="absolute top-[9.0625vw] left-[51.875vw]">
             <img src={bookBikeProps.image} alt="bike-image" className="object-cover lg:w-95 xl:w-137.5 2xl:w-full" />       
        </div>
      </div>
    </section>
  )
}

export default BookBikeSection

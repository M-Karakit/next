import { FooterProps } from "@/app/interfaces/Footer/Footer"
import Link from "next/link"

const Footer = ({ footerProps }: FooterProps) => {
  return (
    <footer className="py-6 xl:py-10 md:px-[7.8125vw] lg:px-[13.02083vw] bg-black font-open-sans">
      <div className="mb-6.25 xl:mb-8.25">
        <img src={footerProps.logo} alt="Logo" className="object-cover w-25 2xl:w-33.25 mx-auto lg:mx-0" />
      </div>
      <div className="flex flex-col items-center text-center lg:flex-row lg:text-start lg:items-start gap-10 lg:gap-7.5 xl:gap-15 2xl:gap-[93.7px] border-y border-[#424242] py-4 xl:py-8.25">
        {footerProps.cols.map((col, index) => (
          <div key={index} className="flex flex-col">
            <h3 className={`text-sm xl:text-lg 2xl:text-xl font-extrabold leading-7.5 text-white xl:mb-5 ${col.centered ? 'text-center' : ''}`}>
              {col.title}
            </h3>
            <ul className={`flex flex-wrap items-center justify-center lg:items-start lg:justify-start ${col.layout === 'row' ? 'flex-row lg:gap-2 2xl:gap-5' : 'flex-col lg:gap-1 2xl:gap-2.5'}`}>
              {col.items.map((item, i) => (
                <li key={i}>
                  {item.href ? (
                    <Link href={item.href} className="xl:text-sm 2xl:text-lg font-semibold leading-7.5 text-white">
                      {item.text}
                    </Link>
                  ) : (
                    <div className="flex items-center gap-1 xl:gap-2.5">
                      {item.icon && <img src={item.icon} alt="icon" className={`object-cover ${col.title === 'Social Media' ? 'w-7 xl:w-10 2xl:w-12.5' : ''}`} />}
                      {item.text && (
                        <span className="lg:text-sm 2xl:text-lg font-semibold leading-7.5 text-white">
                            {item.text}
                        </span>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="xl:text-base font-normal leading-6 text-white text-center mt-8.25">
        {footerProps.bottom.text}
      </p>
    </footer>
  )
}

export default Footer
'use client'
import { useModal } from "@/app/Context/ModalType"
import { NavbarProps } from "@/app/interfaces/Navbar/Navbar"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { IoMdClose, IoIosMenu } from "react-icons/io";

const navbar = ({navProps}: NavbarProps) => {
    const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const { openModal } = useModal()

    const handleAuthClick = (buttonText: string) => {
        if (buttonText === 'Login') {
            openModal('login')
        } else if (buttonText === 'Sign Up') {
            openModal('signup')
        }
        setIsMenuOpen(false)
    }
  return (
    <nav className={`text-white ${isMenuOpen ? 'flex-col h-screen justify-center items-center gap-16 bg-black opacity-90' : 'flex-row'} flex justify-between items-center px-7 py-2 lg:px-[7.8125vw] xl:px-[13.02083vw] lg:py-4 2xl:py-5 bg-[#FFFFFF33]`}>
        <div>
            <Image src={navProps.logo} alt="Logo" width={133} height={130} loading="eager" className="object-contain w-24 2xl:w-full" />
        </div>
        <div className={`${isMenuOpen ? 'flex flex-col gap-10' : 'hidden'} md:flex md:flex-row md:justify-between items-center md:gap-8 lg:gap-10 xl:gap-20 2xl:gap-41.75`}>
            <ul className="flex flex-col md:flex-row items-center gap-7 md:gap-4 lg:gap-8 2xl:gap-10">
                {navProps.links.map((link, index) => (
                    <li key={index}>
                        <Link href={link.path} onClick={() => setIsMenuOpen(false)} className={`text-xl md:text-sm xl:text-base 2xl:text-xl font-open-sans font-semibold leading-none ${pathName === link.path ? 'pb-0.5 border-b border-orange' : ''}`}>{link.name}</Link>
                    </li>
                ))}
            </ul>
            <div className="flex gap-3 md:gap-1.5 xl:gap-2.5">
                <select className="text-[#FFFFFF33] md:text-sm xl:text-base 2xl:text-xl font-open-sans font-semibold leading-none lg:pr-0.5 xl:pr-1">
                    {navProps.lang.map((lng, index) => (
                        <option key={index} value={lng.name} className="">{lng.code}</option>
                    ))}
                </select>
                <div className="flex gap-2.5">
                    {navProps.buttons.map((btn, index) => (
                         <button 
                            key={index} 
                            onClick={() => handleAuthClick(btn.text)}
                            className={`md:px-1 2xl:py-2.5 xl:px-3 md:text-sm xl:text-base 2xl:text-xl font-open-sans font-semibold leading-none rounded-full ${btn.isActive ? 'bg-orange px-5 py-2 md:px-3 md:py-1.5 lg:px-4 2xl:px-6 lg:w-24 lg:h-10 2xl:w-42 2xl:h-11.75' : ''}`}
                        >
                            {btn.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
        <button className="md:hidden" onClick={() =>setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
                <IoMdClose className="w-9 h-9"/>
            ) : (
                <IoIosMenu className="w-9 h-9" />
            )}
        </button>
    </nav>
  )
}

export default navbar

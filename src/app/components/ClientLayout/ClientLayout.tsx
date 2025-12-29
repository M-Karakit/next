'use client'
import { ModalProvider, useModal } from "@/app/Context/ModalType"
import Modal from "@/app/components/Modal/Modal"
import AuthForm from "@/app/components/AuthForm/AuthForm"
import { LoginData, SignupData } from "@/app/Data/AuthForm/AuthForm"
import Navbar from "@/app/components/Navbar/navbar"
import { navbarData } from "@/app/Data/Navbar/NavbarData"
import Footer from "@/app/components/Footer/Footer"
import { footerData } from "@/app/Data/FooterData/FooterData"

function ModalContent() {
  const { modalType } = useModal()
  
  return (
    <Modal>
      {modalType === 'login' && <AuthForm {...LoginData} />}
      {modalType === 'signup' && <AuthForm {...SignupData} />}
    </Modal>
  )
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <header className="absolute top-0 left-0 w-full z-10">
        <Navbar navProps={navbarData} />
      </header>
      {children}
      <Footer footerProps={footerData.footerProps}/>
      <ModalContent />
    </ModalProvider>
  )
}

import { useModal } from "@/app/Context/ModalType"
import { AuthFormProps } from "@/app/interfaces/AuthForm/AuthForm"
import Link from "next/link"

const AuthForm = ({authFromProps}: AuthFormProps) => {
  const { closeModal, openModal } = useModal()

  const handleFooterLinkClick = (href: string) => {
    if (href === '/login') {
      openModal('login')
    } else if (href === '/signup') {
      openModal('signup')
    }
  }
  return (
    <div className="px-10 2xl:px-14.75 py-10 rounded-3xl shadow-[0px_4px_20px_#FFFFFF40] font-open-sans bg-white w-90 2xl:w-122">
      <div className="flex justify-between items-center bottom-3 mb-5">
        <h2 className="text-[32px] font-bold text-black">{authFromProps.header.text}</h2>
        <button onClick={closeModal}>
            <img src={authFromProps.header.close} alt="close-icon" className="object-cover" />
        </button>
      </div>
      {authFromProps.inputs.map((input, index) => (
        <div key={index} className="mb-5 flex flex-col">
            <label htmlFor={input.name} className="2xl:text-lg font-semibold text-black/60 mb-2.5">{input.name}</label>
            <div className="py-2.5 px-4 2xl:py-3.5 2xl:px-6 border rounded-lg border-black/30">
              <input type={input.type} id={input.id} name={input.name} placeholder={input.placeholder} className="focus:outline-none" required/>
            </div>
        </div>
      ))}
      {authFromProps.checkbox && (
        <div className="flex items-center gap-2.5">
            <input type="checkbox" id="terms" defaultChecked={authFromProps.checkbox.checked} className="w-4.5 h-4.5 border border-black/20 rounded-sm"/>
            <label htmlFor="terms" className="text-sm font-normal text-black/60">
                {authFromProps.checkbox.parts.map((part, index) => (
                  <span 
                      key={index} 
                      className={part.color === 'orange' ? 'text-orange' : 'text-black opacity-60'}
                  >
                      {part.text}
                  </span>
              ))}
            </label>
        </div>
      )}
      {authFromProps.forgetPass && (
        <p className="text-sm font-normal text-black opacity-60 text-right">{authFromProps.forgetPass}</p>
      )}
      <div className="flex flex-col justify-center items-center gap-1.5 my-6">
        <button className="w-full bg-orange py-2.5 text-white 2xl:text-xl font-semibold rounded-full">{authFromProps.signButton.text}</button>
        <p className="font-normal text-black opacity-40">or</p>
        <button className="relative w-full flex justify-center items-center py-2.5 gap-2.5 border border-black/20 rounded-full text-black/40 text-lg font-semibold">
            <div className="absolute left-6">
                <img src={authFromProps.googleSign.icon} alt="google-icon" className="object-cover" />
            </div>
            {authFromProps.googleSign.text}
        </button>
      </div>
      <div className="text-center text-black font-normal">
        {authFromProps.footer.text}
            <button 
                onClick={() => handleFooterLinkClick(authFromProps.footer.link.href)}
                className="text-orange font-normal cursor-pointer"
            >
                {authFromProps.footer.link.text}
            </button>
        </div>
    </div>
  )
}

export default AuthForm

'use client'
import { useModal } from '@/app/Context/ModalType'
import { ReactNode, useEffect } from 'react'

interface ModalProps {
  children: ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const { modalType, closeModal } = useModal()

  useEffect(() => {
    if (modalType) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [modalType])

  if (!modalType) return null

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={closeModal}
    >
      <div onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal

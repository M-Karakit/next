'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

type ModalType = 'login' | 'signup' | null

interface ModalContextType {
  modalType: ModalType
  openModal: (type: ModalType) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalType, setModalType] = useState<ModalType>(null)

  const openModal = (type: ModalType) => setModalType(type)
  const closeModal = () => setModalType(null)

  return (
    <ModalContext.Provider value={{ modalType, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within ModalProvider')
  }
  return context
}

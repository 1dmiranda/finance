import React, { createContext, ReactNode, useState } from 'react'
import Modal from '../components/Modal'

interface IFinancialsContext {
  toggleModal: () => void
}

interface IFinancialsProvider {
  children: ReactNode
}

export const FinancialsContext = createContext({} as IFinancialsContext)

export function FinancialsProvider({ children }: IFinancialsProvider) {
  const [modalOpen, setModalOpen] = useState(false)

  function toggleModal() {
    setModalOpen(!modalOpen)
  }

  return (
    <FinancialsContext.Provider
      value={{
        toggleModal
      }}
    >
      {children}
      {modalOpen && <Modal />}
    </FinancialsContext.Provider>
  )
}

import React, { createContext, ReactNode, useState } from 'react'
import Modal from '../components/Modal'
import usePersistedState from '../hooks/usePersistedState'
import { formatAmount, formatDate } from '../utils'

interface IFinancialsContext {
  toggleModal: () => void
  newTransaction: (transaction: ITransaction) => void
  removeTransaction: (index: number) => void
  transactions: ITransaction[]
}

interface IFinancialsProvider {
  children: ReactNode
  trs: ITransaction[]
}

export interface ITransaction {
  id: number
  description: string
  amount: number
  date: string
}

export const FinancialsContext = createContext({} as IFinancialsContext)

export function FinancialsProvider({ children, trs }: IFinancialsProvider) {
  const [modalOpen, setModalOpen] = useState(false)
  const [transactions, setTransactions] = usePersistedState<ITransaction[]>(
    'transactions',
    trs
  )

  function toggleModal() {
    setModalOpen(!modalOpen)
  }

  function newTransaction(transaction: ITransaction) {
    transaction = {
      amount: formatAmount(transaction.amount),
      date: formatDate(transaction.date),
      description: transaction.description,
      id: transactions.length + 1
    }

    setTransactions([...transactions, transaction])
    toggleModal()
  }

  function removeTransaction(index: number) {
    setTransactions(transactions.filter((_, i) => i !== index))
  }

  return (
    <FinancialsContext.Provider
      value={{
        toggleModal,
        transactions,
        newTransaction,
        removeTransaction
      }}
    >
      {children}
      {modalOpen && <Modal />}
    </FinancialsContext.Provider>
  )
}

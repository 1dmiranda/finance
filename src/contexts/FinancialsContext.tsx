import React, { createContext, ReactNode, useState } from 'react'
import Modal from '../components/Modal'
import { formatAmount, formatDate } from '../utils'

interface IFinancialsContext {
  toggleModal: () => void
  newTransaction: (transaction: ITransaction) => void
  removeTransaction: (index: number) => void
  transactions: ITransaction[]
}

interface IFinancialsProvider {
  children: ReactNode
}

export interface ITransaction {
  id: number
  description: string
  amount: number
  date: string
}

export const FinancialsContext = createContext({} as IFinancialsContext)

export function FinancialsProvider({ children }: IFinancialsProvider) {
  const trans = [
    {
      id: 1,
      description: 'Luz',
      amount: -50000,
      date: '23/01/2021'
    },
    {
      id: 2,
      description: 'Internet',
      amount: -20000,
      date: '23/01/2021'
    },
    {
      id: 3,
      description: 'Salário',
      amount: 500000,
      date: '25/01/2021'
    }
  ]
  const [modalOpen, setModalOpen] = useState(false)
  const [transactions, setTransactions] = useState<ITransaction[]>(trans)

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

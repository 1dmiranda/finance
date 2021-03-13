import React, { useContext, useEffect, useState } from 'react'
import { FinancialsContext } from '../../contexts/FinancialsContext'
import { Card, Header, Main, Section } from './styles'
import { formatCurrency } from '../../utils'

export default function Base() {
  const { toggleModal, transactions, removeTransaction } = useContext(
    FinancialsContext
  )

  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let income = 0
    let expense = 0
    transactions.forEach(transaction => {
      if (transaction.amount > 0) {
        income += transaction.amount
      }

      if (transaction.amount < 0) {
        expense += transaction.amount
      }
    })
    setIncome(income)
    setExpense(expense)
    setTotal(income + expense)
  }, [transactions])

  return (
    <>
      <Header>
        <h1 id="logo">finance$</h1>
      </Header>
      <Main>
        <Section id="balance">
          <h2 className="sr-only"> Balanço</h2>
          <Card>
            <h3>
              <span>Entradas</span>
              <img src="/assets/income.svg" alt="Imagem de entradas" />
            </h3>
            <p>{formatCurrency(income)}</p>
          </Card>
          <Card>
            <h3>
              <span>Saídas</span>
              <img src="/assets/expense.svg" alt="Imagem de saídas" />
            </h3>
            <p>{formatCurrency(expense)}</p>
          </Card>
          <Card className="total">
            <h3>
              <span>Total</span>
              <img src="/assets/total.svg" alt="Imagem de total" />
            </h3>
            <p>{formatCurrency(total)}</p>
          </Card>
        </Section>
        <Section id="transaction">
          <h2 className="sr-only">Transações</h2>

          <a href="#" onClick={toggleModal} className="button new">
            + Nova Transação
          </a>

          <table id="data-table">
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Data</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(({ amount, date, description, id }, index) => {
                return (
                  <tr key={id}>
                    <td className="description">{description}</td>
                    <td className={amount < 0 ? 'expense' : 'income'}>
                      {formatCurrency(amount)}
                    </td>
                    <td className="date">{date}</td>
                    <td>
                      <img
                        onClick={() => removeTransaction(index)}
                        src="/assets/minus.svg"
                        alt="Remover Transação"
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Section>
      </Main>
    </>
  )
}

import React, { useContext } from 'react'
import { FinancialsContext } from '../../contexts/FinancialsContext'
import { Card, Header, Main, Section } from './styles'

export default function Base() {
  const { toggleModal } = useContext(FinancialsContext)

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
            <p>R$ 5000,00</p>
          </Card>
          <Card>
            <h3>
              <span>Saídas</span>
              <img src="/assets/expense.svg" alt="Imagem de saídas" />
            </h3>
            <p>R$ 2000,00</p>
          </Card>
          <Card className="total">
            <h3>
              <span>Total</span>
              <img src="/assets/total.svg" alt="Imagem de total" />
            </h3>
            <p>R$ 3000,00</p>
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
              <tr>
                <td className="description">Luz</td>
                <td className="expense">- R$ 500,00</td>
                <td className="date">23/01/2021</td>
                <td>
                  <img src="/assets/minus.svg" alt="Remover Transação" />
                </td>
              </tr>
              <tr>
                <td className="description">Luz</td>
                <td className="income">- R$ 500,00</td>
                <td className="date">23/01/2021</td>
                <td>
                  <img src="/assets/minus.svg" alt="Remover Transação" />
                </td>
              </tr>
              <tr>
                <td className="description">Luz</td>
                <td className="expense">- R$ 500,00</td>
                <td className="date">23/01/2021</td>
                <td>
                  <img src="/assets/minus.svg" alt="Remover Transação" />
                </td>
              </tr>
            </tbody>
          </table>
        </Section>
      </Main>
    </>
  )
}

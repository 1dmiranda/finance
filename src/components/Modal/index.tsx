import React, { useContext } from 'react'
import {
  FinancialsContext,
  ITransaction
} from '../../contexts/FinancialsContext'
import Input from '../Input'

import { Overlay, Form } from './styles'

export default function Modal() {
  const { toggleModal, newTransaction } = useContext(FinancialsContext)

  function submitTransaction(data: ITransaction, { reset }) {
    newTransaction(data)
    reset()
  }

  return (
    <Overlay className="modal-overlay">
      <div className="modal">
        <div className="form">
          <h2>Nova Transação</h2>
          <Form onSubmit={submitTransaction}>
            <div className="input-group">
              <label htmlFor="description" className="sr-only">
                Descrição
              </label>
              <Input
                type="text"
                id="description"
                name="description"
                placeholder="Descrição"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="amount" className="sr-only">
                Valor
              </label>
              <Input
                type="text"
                id="amount"
                name="amount"
                placeholder="0,00"
                required
              />
              <small>
                Use o sinal - (negativo) para despesas e , (virgula) para casas
                decimais
              </small>
            </div>
            <div className="input-group">
              <label htmlFor="date" className="sr-only">
                Data
              </label>
              <Input type="date" id="date" name="date" required />
            </div>

            <div className="input-group actions">
              <a href="#" onClick={toggleModal} className="button cancel">
                Cancelar
              </a>
              <button type="submit">Salvar</button>
            </div>
          </Form>
        </div>
      </div>
    </Overlay>
  )
}

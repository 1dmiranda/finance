import React, { useContext } from 'react'
import { FinancialsContext } from '../../contexts/FinancialsContext'

import { Overlay, Form } from './styles'

export default function Modal() {
  const { toggleModal } = useContext(FinancialsContext)

  return (
    <Overlay className="modal-overlay">
      <div className="modal">
        <div className="form">
          <h2>Nova Transação</h2>
          <Form action="">
            <div className="input-group">
              <label htmlFor="description" className="sr-only">
                Descrição
              </label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Descrição"
              />
            </div>
            <div className="input-group">
              <label htmlFor="amount" className="sr-only">
                Valor
              </label>
              <input
                type="number"
                step="0.01"
                id="amount"
                name="amount"
                placeholder="0,00"
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
              <input type="date" id="date" name="date" />
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

import styled from 'styled-components'
import { Form as Unform } from '@unform/web'

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    background: #f0f2f5;
    padding: 2.4rem;
    width: min(90%, 500px);
    border-radius: 0.25rem;
  }
`

export const Form = styled(Unform)`
  h2 {
    margin-top: 0;
  }

  input {
    border: none;
    border-radius: 0.2rem;
    padding: 0.8rem;
    width: 100%;
  }

  .input-group {
    margin-top: 0.8rem;

    small {
      opacity: 0.4;
    }

    &.actions {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .button,
      button {
        width: 48%;
      }

      button {
        height: 50px;
        border: none;

        color: ${props => props.theme.colors.white};
        background: ${props => props.theme.colors.carolinaBlue};

        padding: 0;

        border-radius: 0.25rem;

        transition: background 0.3s;

        cursor: pointer;
      }

      button:hover {
        background: ${props => props.theme.colors.persianBlue};
      }

      .button.cancel {
        color: #e92929;
        border: 2px #e92929 solid;
        border-radius: 0.25rem;

        height: 50px;

        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;
        opacity: 0.7;

        transition: opacity 0.3s;
      }

      .button.cancel:hover {
        opacity: 1;
      }
    }
  }
`

import styled from 'styled-components'
export const Header = styled.header`
  background: ${props => props.theme.colors.persianBlue};
  padding: 2rem 0 10rem;
  text-align: center;

  #logo {
    color: ${props => props.theme.colors.white};
    font-weight: 300;
  }
`

export const Main = styled.main`
  width: min(90vw, 800px);
  margin: auto;
  margin-bottom: 20px;
`

export const Section = styled.section`
  &#balance {
    margin-top: -8rem;

    h2 {
      color: ${props => props.theme.colors.white};
    }

    @media (min-width: 800px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
  }

  h2 {
    color: ${props => props.theme.colors.navyBlue};
    margin-top: 3.2rem;
    margin-bottom: 0.8rem;
    font-weight: normal;
  }

  &#transaction {
    display: block;
    width: 100%;
    overflow-x: auto;
    #data-table {
      width: 100%;
      border-spacing: 0 0.5rem;
      color: ${props => props.theme.colors.carolinaBlue};

      tbody tr {
        opacity: 0.7;
        transition: opacity 0.2s linear;
      }

      tbody tr:hover {
        opacity: 1;
      }

      th {
        background: ${props => props.theme.colors.white};
        font-weight: normal;
        padding: 1rem 2rem;
        text-align: left;
      }

      td {
        background: ${props => props.theme.colors.white};
        padding: 1rem 2rem;
      }

      thead tr th:first-child,
      tbody tr td:first-child {
        border-radius: 0.25rem 0 0 0.25rem;
      }

      thead tr th:last-child,
      tbody tr td:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }
      td.description {
        color: ${props => props.theme.colors.navyBlue};
      }

      td.income {
        color: #12a454;
      }

      td.expense {
        color: #e92929;
      }
    }
  }

  a {
    color: ${props => props.theme.colors.carolinaBlue};
    text-decoration: none;
  }

  a:hover {
    color: ${props => props.theme.colors.persianBlue};
  }

  .button.new {
    display: inline-block;
    margin-bottom: 0.8rem;
  }
`

export const Card = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;

  margin-bottom: 2rem;

  color: ${props => props.theme.colors.navyBlue};

  h3 {
    font-weight: normal;
    font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-size: 2rem;
    line-height: 3rem;
    margin-top: 1rem;
  }

  &.total {
    background: ${props => props.theme.colors.carolinaBlue};
    color: ${props => props.theme.colors.white};
  }
`

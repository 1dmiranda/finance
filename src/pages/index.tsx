import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'
import Base from '../components/Base'
import { FinancialsProvider, ITransaction } from '../contexts/FinancialsContext'

interface IHome {
  transactions: ITransaction[]
}

export default function Home({ transactions }: IHome) {
  return (
    <FinancialsProvider trs={transactions}>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>finance$</title>
      </Head>
      <Base />
    </FinancialsProvider>
  )
}
export const getServerSideProps: GetServerSideProps = async ctx => {
  const { transactions } = ctx.req.cookies

  return {
    props: {
      transactions: JSON.parse(transactions)
    }
  }
}

import React from 'react'
import Base from '../components/Base'
import { FinancialsProvider } from '../contexts/FinancialsContext'

export default function Home() {
  return (
    <FinancialsProvider>
      <Base />
    </FinancialsProvider>
  )
}

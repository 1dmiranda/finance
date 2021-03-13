export function formatCurrency(value: number | string) {
  const signal = value < 0 ? '-' : ''
  value = String(value).replace(/\D/g, '')
  value = Number(value) / 100
  value = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return signal + value
}

export function formatAmount(value: number) {
  value = value * 100
  return value
}

export function formatDate(date: string) {
  const splittedDate = date.split('-')
  return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
}

import { Currency } from '../config/config'
import { ExchangeRate } from '../types/types'

export const getCurrencyRate = (from: string, to: string, exchangeRates: ExchangeRate[]): number => {
  if (from === to) {
    return 1
  }

  const mapCurrencies: { [key: string]: number } = { [Currency.UAH]: 1 }

  exchangeRates.forEach(rate => {
    if (rate.ccy === Currency.BTC) {
      mapCurrencies[rate.ccy] = +rate.sale * mapCurrencies[Currency.USD]
    } else {
      mapCurrencies[rate.ccy] = +rate.sale
    }
  })
  return mapCurrencies[to] / mapCurrencies[from]
}

export const validateInput = (value: string): string => {
  if (value === '.') {
    return ''
  }
  return value.replace(/[^.\d]+/g, '').replace(/^([^.]*\.)|\./g, '$1')
}

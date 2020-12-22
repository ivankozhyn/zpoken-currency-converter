import { currency } from '../config/config'

export const getCurrencyRate = (from, to, exchangeRates) => {
  if (from === to) {
    return 1
  }

  const mapCurrencies = { [currency.UAH]: 1 }

  exchangeRates.forEach(rate => {
    if (rate.ccy === currency.BTC) {
      mapCurrencies[rate.ccy] = +rate.sale * mapCurrencies[currency.USD]
    } else {
      mapCurrencies[rate.ccy] = +rate.sale
    }
  })
  return mapCurrencies[to] / mapCurrencies[from]
}

export const validateInput = value => {
  if (value === '.') {
    return ''
  }
  return value.replace(/[^.\d]+/g, '').replace(/^([^.]*\.)|\./g, '$1')
}

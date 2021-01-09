import btc from '../assets/btc.svg'
import eur from '../assets/eur.svg'
import rur from '../assets/rur.svg'
import uah from '../assets/uah.svg'
import usd from '../assets/usd.svg'

export enum Currency {
  UAH = 'UAH',
  BTC = 'BTC',
  USD = 'USD',
  EUR = 'EUR',
  RUR = 'RUR',
}

export type CurrencyType = {
  [key in Currency]: string
}

export const currencyFlags: CurrencyType = {
  UAH: uah,
  BTC: btc,
  USD: usd,
  EUR: eur,
  RUR: rur,
}

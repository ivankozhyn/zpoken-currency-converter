import { fromAmountAction, toAmountAction, fromCurrencyAction, toCurrencyAction } from '../redux/actions'
import { CurrencyType } from '../config/config'

interface FromAmount {
  type: typeof fromAmountAction
  payload: number
}

interface ToAmount {
  type: typeof toAmountAction
  payload: number
}

interface FromCurrency {
  type: typeof fromCurrencyAction
  payload: string
}

interface ToCurrency {
  type: typeof toCurrencyAction
  payload: string
}

export type CurrencyActionTypes = FromAmount | ToAmount | FromCurrency | ToCurrency

export interface ExchangeRate {
  ccy: string
  sale: string
  base_ccy?: string
}

export type CurrencyNameType = keyof CurrencyType
import {
  fromAmountAction,
  toCurrencyAction,
  fromCurrencyAction,
  toAmountAction,
} from './Actions'

export const getFromAmount = state => state.currencies[fromAmountAction]
export const getToAmount = state => state.currencies[toAmountAction]
export const getFromCurrency = state => state.currencies[fromCurrencyAction]
export const getToCurrency = state => state.currencies[toCurrencyAction]

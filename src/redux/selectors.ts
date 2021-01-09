import {
  fromAmountAction,
  toCurrencyAction,
  fromCurrencyAction,
  toAmountAction,
} from './actions'

import { AppStateType } from './store'
import { CurrencyNameType } from '../types/types'

export const getFromAmount = (state: AppStateType): number => state.currencies[fromAmountAction.type]
export const getToAmount = (state: AppStateType): number => state.currencies[toAmountAction.type]
export const getFromCurrency = (state: AppStateType): CurrencyNameType => state.currencies[fromCurrencyAction.type]
export const getToCurrency = (state: AppStateType): CurrencyNameType => state.currencies[toCurrencyAction.type]

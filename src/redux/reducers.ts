import { createReducer, combineReducers } from '@reduxjs/toolkit'

import {
  fromAmountAction,
  toAmountAction,
  fromCurrencyAction,
  toCurrencyAction,
} from './actions'
import { Currency } from '../config/config'
import { CurrencyNameType } from '../types/types'

interface CurrencyState {
  fromAmount: number
  toAmount: number
  fromCurrency: CurrencyNameType
  toCurrency: CurrencyNameType
}

const initialState: CurrencyState = {
  fromAmount: 1,
  toAmount: 0,
  fromCurrency: Currency.UAH,
  toCurrency: Currency.USD,
}

const currenciesReducer = createReducer(
  initialState, builder =>
  builder
    .addCase(fromAmountAction, (state, action) => ({
      ...state,
      [fromAmountAction.type]: action.payload,
    }))
    .addCase(toAmountAction, (state, action) => ({
      ...state,
      [toAmountAction.type]: action.payload
    }))
    .addCase(fromCurrencyAction, (state, action) => ({
      ...state,
      [fromCurrencyAction.type]: action.payload
    }))
    .addCase(toCurrencyAction, (state, action) => ({
      ...state,
      [toCurrencyAction.type]: action.payload
    }))
)

export default combineReducers({
  currencies: currenciesReducer,
})

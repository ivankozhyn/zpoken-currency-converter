import { createReducer, combineReducers } from '@reduxjs/toolkit'

import {
  fromAmountAction,
  toAmountAction,
  fromCurrencyAction,
  toCurrencyAction,
} from './Actions'

export const currenciesReducer = createReducer(
  {},
  {
    [fromAmountAction]: (state, action) => {
      state[fromAmountAction] = action.payload
    },
    [toAmountAction]: (state, action) => {
      state[toAmountAction] = action.payload
    },
    [fromCurrencyAction]: (state, action) => {
      state[fromCurrencyAction] = action.payload
    },
    [toCurrencyAction]: (state, action) => {
      state[toCurrencyAction] = action.payload
    },
  },
)

export default combineReducers({
  currenciesReducer,
})

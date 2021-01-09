import { createAction } from '@reduxjs/toolkit'

import { CurrencyNameType } from '../types/types'

export const fromAmountAction = createAction<number, 'fromAmount'>('fromAmount')
export const toAmountAction = createAction<number, 'toAmount'>('toAmount')
export const fromCurrencyAction = createAction<CurrencyNameType, 'fromCurrency'>('fromCurrency')
export const toCurrencyAction = createAction<CurrencyNameType, 'toCurrency'>('toCurrency')

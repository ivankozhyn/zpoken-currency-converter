import { configureStore } from '@reduxjs/toolkit'
import { currenciesReducer } from './Reducers'

const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
})

export default store

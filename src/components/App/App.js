import s from './App.module.scss'

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import CurrencyRow from '../CurrencyRow/CurrencyRow'
import Info from '../Info/Info'

import { getExchangeRates } from '../../services/api'
import { getCurrencyRate, validateInput } from '../../utils/utils'
import { currency } from '../../config/config'
import {
  fromCurrencyAction,
  toCurrencyAction,
  fromAmountAction,
  toAmountAction,
} from '../../redux/Actions'

function App() {
  const dispatch = useDispatch()
  const [error, setError] = useState(false)
  const [allCurrencies, setAllCurrencies] = useState([])
  const [fromCurrency, setFromCurrency] = useState('')
  const [toCurrency, setToCurrency] = useState('')
  const [сurrencyRate, setCurrencyRate] = useState(1)
  const [amount, setAmount] = useState(1)
  const [amountFromCurrency, setAmountFromCurrency] = useState(true)
  const [exchangeRatesFromApi, setExchangeRatesFromApi] = useState([])

  useEffect(() => {
    async function initDataFromApi() {
      const exchangeRates = await getExchangeRates()
      setExchangeRatesFromApi(exchangeRates)

      if (exchangeRates?.length) {
        const baseCurrency = exchangeRates[0].base_ccy
        const currencies = [
          baseCurrency,
          ...exchangeRates.map(exchangeRate => exchangeRate.ccy),
        ]
        setAllCurrencies(currencies)
        setFromCurrency(currency.UAH)
        setToCurrency(currency.USD)
        dispatch(fromCurrencyAction(currency.UAH))
        dispatch(toCurrencyAction(currency.USD))
      } else {
        setError(true)
      }
    }

    initDataFromApi()
  }, [dispatch])

  useEffect(() => {
    if (fromCurrency && toCurrency && exchangeRatesFromApi?.length) {
      const rate = getCurrencyRate(
        fromCurrency,
        toCurrency,
        exchangeRatesFromApi,
      )

      setCurrencyRate(rate)
    }
  }, [fromCurrency, toCurrency, exchangeRatesFromApi])

  const onChangeFromCurrency = e => {
    setFromCurrency(e.target.value)
    dispatch(fromCurrencyAction(e.target.value))
  }

  const onChangeToCurrency = e => {
    setToCurrency(e.target.value)
    dispatch(toCurrencyAction(e.target.value))
  }

  const handleFromAmountChange = e => {
    const amount = validateInput(e.target.value)
    setAmount(amount)
    setAmountFromCurrency(true)
  }

  const handleToAmountChange = e => {
    const amount = validateInput(e.target.value)
    setAmount(amount)
    setAmountFromCurrency(false)
  }

  const handleResetAmount = () => {
    setAmount(0)
  }

  let toAmount
  let fromAmount
  if (amountFromCurrency) {
    fromAmount = amount
    toAmount = amount / сurrencyRate
  } else {
    toAmount = amount
    fromAmount = amount * сurrencyRate
  }

  useEffect(() => {
    dispatch(toAmountAction(+toAmount))
    dispatch(fromAmountAction(+fromAmount))
  }, [toAmount, fromAmount, dispatch])

  return (
    <div className={s.app}>
      <h1>Currency Converter</h1>
      {error ? (
        <div className={s.error}>Oops! Something wrong. Please try later.</div>
      ) : (
        <>
          <Info />
          <CurrencyRow
            allCurrencies={allCurrencies}
            selectedCurrency={fromCurrency}
            onChangeCurrency={onChangeFromCurrency}
            onChangeAmount={handleFromAmountChange}
            handleResetAmount={handleResetAmount}
            amount={fromAmount}
          />
          <div className={s.equals}>&#61;</div>
          <CurrencyRow
            allCurrencies={allCurrencies}
            selectedCurrency={toCurrency}
            onChangeCurrency={onChangeToCurrency}
            onChangeAmount={handleToAmountChange}
            handleResetAmount={handleResetAmount}
            amount={toAmount}
          />
        </>
      )}
    </div>
  )
}

export default App

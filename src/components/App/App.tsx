
import { useEffect, useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import CurrencyRow from '../CurrencyRow/CurrencyRow'
import Info from '../Info/Info'

import { getExchangeRates } from '../../services/api'
import { getCurrencyRate, validateInput } from '../../utils/utils'
import { Currency } from '../../config/config'
import {
  fromCurrencyAction,
  toCurrencyAction,
  fromAmountAction,
  toAmountAction,
} from '../../redux/actions'
import { ExchangeRate, CurrencyNameType } from '../../types/types'

import s from './App.module.scss'

function App() {
  const dispatch = useDispatch()
  const [error, setError] = useState<boolean>(false)
  const [allCurrencies, setAllCurrencies] = useState<CurrencyNameType[]>([])
  const [fromCurrency, setFromCurrency] = useState<CurrencyNameType>()
  const [toCurrency, setToCurrency] = useState<CurrencyNameType>()
  const [сurrencyRate, setCurrencyRate] = useState<number>(1)
  const [amount, setAmount] = useState<number | string>(1)
  const [amountFromCurrency, setAmountFromCurrency] = useState<boolean>(true)
  const [exchangeRatesFromApi, setExchangeRatesFromApi] = useState<ExchangeRate[]>([])

  useEffect(() => {
    async function initDataFromApi(): Promise<void> {
      const exchangeRates: ExchangeRate[] = await getExchangeRates()
      setExchangeRatesFromApi(exchangeRates)

      if (exchangeRates?.length) {
        const baseCurrency = exchangeRates[0].base_ccy as CurrencyNameType
        const currencies: CurrencyNameType[] = [
          baseCurrency,
          ...exchangeRates.map((exchangeRate) => exchangeRate.ccy as CurrencyNameType),
        ]
        setAllCurrencies(currencies)
        setFromCurrency(Currency.UAH)
        setToCurrency(Currency.USD)
        dispatch(fromCurrencyAction(Currency.UAH))
        dispatch(toCurrencyAction(Currency.USD))
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

  const handleFromCurrencyChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setFromCurrency(e.target.value as CurrencyNameType)
    dispatch(fromCurrencyAction(e.target.value as CurrencyNameType))
  }

  const handleToCurrencyChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setToCurrency(e.target.value as CurrencyNameType)
    dispatch(toCurrencyAction(e.target.value as CurrencyNameType))
  }

  const handleFromAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const amount = validateInput(e.target.value)
    setAmount(amount)
    setAmountFromCurrency(true)
  }

  const handleToAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const amount = validateInput(e.target.value)
    setAmount(amount)
    setAmountFromCurrency(false)
  }

  const handleResetAmount = (): void => {
    setAmount(0)
  }

  let toAmount: number
  let fromAmount: number
  if (amountFromCurrency) {
    fromAmount = amount as number
    toAmount = amount as number / сurrencyRate
  } else {
    toAmount = amount as number
    fromAmount = amount as number * сurrencyRate
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
              selectedCurrency={fromCurrency!}
              handleCurrencyChange={handleFromCurrencyChange}
              handleAmountChange={handleFromAmountChange}
              handleResetAmount={handleResetAmount}
              amount={fromAmount}
            />
            <div className={s.equals}>&#61;</div>
            <CurrencyRow
              allCurrencies={allCurrencies}
              selectedCurrency={toCurrency!}
              handleCurrencyChange={handleToCurrencyChange}
              handleAmountChange={handleToAmountChange}
              handleResetAmount={handleResetAmount}
              amount={toAmount}
            />
          </>
        )}
    </div>
  )
}

export default App

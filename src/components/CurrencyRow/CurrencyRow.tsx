import { ChangeEvent } from 'react'

import { currencyFlags } from '../../config/config'
import { CurrencyNameType } from '../../types/types'
import remove from '../../assets/remove.svg'

import s from './CurrencyRow.module.scss'

interface Props {
  allCurrencies: CurrencyNameType[]
  selectedCurrency: CurrencyNameType
  handleCurrencyChange: (e: ChangeEvent<HTMLSelectElement>) => void
  amount: number
  handleAmountChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleResetAmount: () => void
}

export default function CurrencyRow({
  allCurrencies,
  selectedCurrency,
  handleCurrencyChange,
  amount,
  handleAmountChange,
  handleResetAmount,
}: Props) {
  return (
    <div className={s.container}>
      <span className={s.inputContainer}>
        <input
          type="text"
          className={s.input}
          value={amount}
          onChange={handleAmountChange}
        />
        <button type="button" className={s.button} onClick={handleResetAmount}>
          <img className={s.remove} src={remove} alt="remove" />
        </button>
      </span>
      <img
        className={s.img}
        src={currencyFlags[selectedCurrency]}
        alt="currency"
      />
      <select
        className={s.select}
        value={selectedCurrency}
        onChange={handleCurrencyChange}
      >
        {allCurrencies.map(currency => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  )
}

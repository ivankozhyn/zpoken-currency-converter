import s from './CurrencyRow.module.scss'

import { currencyFlags } from '../../config/config'
import remove from '../../assets/remove.svg'

export default function CurrencyRow({
  allCurrencies,
  selectedCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount,
  handleResetAmount,
}) {
  return (
    <div className={s.container}>
      <span className={s.inputContainer}>
        <input
          type="text"
          className={s.input}
          value={amount}
          onChange={onChangeAmount}
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
        onChange={onChangeCurrency}
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

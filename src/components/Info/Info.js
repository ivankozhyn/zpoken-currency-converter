import s from './Info.module.scss'

import { useSelector } from 'react-redux'

import {
  getFromAmount,
  getToCurrency,
  getFromCurrency,
  getToAmount,
} from '../../redux/Selectors'

export default function Info() {
  const fromAmount = useSelector(getFromAmount)
  const toAmount = useSelector(getToAmount)
  const fromCurrency = useSelector(getFromCurrency)
  const toCurrency = useSelector(getToCurrency)

  return (
    <div className={s.container}>
      {fromAmount} {fromCurrency} equals
      <div className={s.to}>
        {toAmount} {toCurrency}
      </div>
    </div>
  )
}

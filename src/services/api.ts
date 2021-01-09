import { ExchangeRate } from '../types/types'

const BASE_URL: string =
  'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'

export const getExchangeRates = async (): Promise<any> => {
  try {
    const data: ExchangeRate[] = await fetch(BASE_URL).then(response => {
      return response.json()
    })
    return data
  } catch (error) {
    console.log('getExchangeRates api error: ', error)
  }
}

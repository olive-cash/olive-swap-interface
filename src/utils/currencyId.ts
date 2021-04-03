import { Currency, ETHER, Token } from '@olive-dev/avax-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'AVAX'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId

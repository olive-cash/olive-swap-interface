import { ChainId, Token } from '@olive-dev/avax-sdk'
import { useTotalSupply } from '../data/TotalSupply'

const priceContract = '0xc6B19843d84e0728BF1f09f582aE0cD19906019B'

const useGetOlivePrice = () => {
  return useTotalSupply(new Token(ChainId.MAINNET, priceContract, 18, '', ''))
}

export default useGetOlivePrice

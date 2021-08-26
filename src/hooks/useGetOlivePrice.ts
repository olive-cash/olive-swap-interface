import { ChainId, Token } from '@olive-dev/avax-sdk'
import { useTotalSupply } from '../data/TotalSupply'

const priceContract = '0x61fa59D648f66f43119eA8Ee42e4F9fD680e5459'

const useGetOlivePrice = () => {
  return useTotalSupply(new Token(ChainId.MAINNET, priceContract, 18, '', ''))
}

export default useGetOlivePrice


import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react'

export interface TokenList {
  token: {
    icon: string
    name: string
  }
  daySummary: {
    close: number
    closeDollar: number
  }
}

export interface CrowToken {
  icon: string
  price: number
}

interface TokenContextType {
  tokenList: TokenList[]
  crowToken: CrowToken
  getTokens: () => void
  getCrowToken: () => void
}

const TokenContext = createContext({} as TokenContextType)

export function TokenProvider({ children }: { children: ReactNode }) {
  const [tokenList, setTokenList] = useState<TokenList[]>([])
  const [crowToken, setCrowToken] = useState<CrowToken>({icon: '', price: 0})

  async function getTokens() {
    const response = await fetch('https://napi.wemixplay.com/info/v1/token/dex/crowToken')
    const coins = await response.json()
    setTokenList(coins.Data)
  }

  async function getCrowToken() {
    const response = await fetch('https://api.wemixplay.com/info/v1/coin-detail?symbol=CROW')
    const crow = await response.json()
    setCrowToken({
      icon: crow.data.icon,
      price: crow.data.priceData.price,
    })
  }

  useEffect(() => {
    Promise.all([getTokens(), getCrowToken()])
    // getTokens()
    // getCrowToken()
  }, [])

  const contextValue = useMemo(() => ({ tokenList, crowToken, getTokens, getCrowToken }), [
    tokenList,
    crowToken,
  ])

  return (
    <TokenContext.Provider value={contextValue}>
      {children}
    </TokenContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useToken = () => useContext(TokenContext)

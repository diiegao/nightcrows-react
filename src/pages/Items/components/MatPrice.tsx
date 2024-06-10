import { useToken } from "../../../contexts/TokensContext"
import { formatToken, formatUSD } from "../../../utils/formatNumber"

interface MatPriceTypes {
    name: string
    quantity: number
    priceCrow: number
    priceDiamond: number
    priceUSD: number
}

interface MatPriceProps {
    coin: MatPriceTypes
}

export function MatPrice({ coin }: MatPriceProps) {
    // console.log(coin)

    const { tokenList } = useToken()
    
    const getToken = (name: string) => tokenList.find(t => t.token.name === name)

    return (
        <div className="flex items-center">
            <div className="flex items-center flex-col gap-1">
                
                <div className="relative">
                    <img
                        src={getToken(coin.name)?.token.icon}
                        alt={getToken(coin.name)?.token.name}
                        width="50"
                        height="50"
                    />
                    <span className="absolute bottom-0 left-5 text-xl">x{coin.quantity}</span>
                </div>
                
                <div className="flex items-center justify-center flex-col px-1">
                    <div className="flex items-center">
                        <img
                            src="https://cache.wemixplay.com/ADMIN-CONSOLE/TOKEN/CROW/5b1653cc-d2b1-4d57-a03c-4a73e83dbb46-crow.png"
                            alt="CROW"
                            width="25"
                            height="25"
                        />
                        <span className="text-2xl">{formatToken(coin.priceCrow)}</span>
                    </div>

                    <div className="flex items-center">
                        <img
                            src="https://gcdn.wemade.games/prod/ncgl/official/2.5.5/_next/static/images/token/diagram-vdia.webp"
                            alt="DIAMOND"
                            width="25"
                            height="25"
                        />
                        <span className="text-xl">{coin.priceDiamond.toFixed(0)}</span>
                    </div>

                    <div className="flex items-center ml-2">
                        <span className="text-base text-zinc-300">{formatUSD(coin.priceUSD)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
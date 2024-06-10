import { ChangeEvent, useState } from "react"
import { CrowToken, TokenList } from "../../../contexts/TokensContext"

interface TokenTradeProps {
    token: TokenList
    crow: CrowToken
}

export function TokenTrade({ token, crow }: TokenTradeProps) {
    const [averagePrice, setAveragePrice] = useState<number>(0)

    function handleAveragePrice(e: ChangeEvent<HTMLInputElement>) {
        setAveragePrice(Number(e.target.value))
    }

    // const priceDiamondShop = 0.0125
    const newPriceDiamond = crow.price / 80

    const result = newPriceDiamond * averagePrice
    const marketPrice = result - result * (5 / 100)
    const priceInCrow = result / crow.price
    const profit = marketPrice - token.daySummary.closeDollar
    const profitInCrow = profit / crow.price

    const percentProfit = (profit / result) * 100

    // console.log(percentProfit)

    return (
        <div className="flex items-center flex-col lg:flex-row w-full lg:w-[558px] gap-10 p-5 bg-zinc-900 border-zinc-800 border rounded-sm">
            <div className="flex items-center justify-center flex-col lg:h-[170px] gap-1 lg:pr-5 lg:border-r lg:border-zinc-800">
                <img src={token.token.icon} alt={token.token.name} width="80" height="80" />
                <p>{token.token.name}</p>

                <div className="flex flex-col items-center">
                    <span className="text-2xl">{token.daySummary.close.toLocaleString('en', { minimumFractionDigits: 4 })}</span>
                    <span className="text-md text-zinc-300">
                        ({token.daySummary.closeDollar.toLocaleString('en', {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 4,
                        })})
                    </span>
                </div>

            </div>

            <div className="flex flex-col items-center justify-around lg:h-[170px] pr-8 lg:border-r lg:border-zinc-800">
                <div className="flex items-center border-b border-zinc-800">
                    <img src="https://gcdn.wemade.games/prod/ncgl/official/2.5.5/_next/static/images/token/diagram-vdia.webp" width="40" height="40" alt="DIAMOND" />
                    <input
                        type="text"
                        placeholder="0"
                        value={averagePrice}
                        onChange={handleAveragePrice}
                        className="w-[90px] p-2 text-2xl text-white bg-transparent border-none focus-visible:outline-none"
                    />
                </div>
                
                <div className="flex flex-col items-center">
                    <span className="flex items-center text-4xl">
                        <img src={crow.icon} alt="CROW" width="30" height="30" />
                        {priceInCrow.toLocaleString('en', { minimumFractionDigits: 4 })}
                    </span>
                    <span className="text-xl text-zinc-300">
                        ({result.toLocaleString('en', {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 4,
                        })})
                    </span>
                </div>
            </div>
            
            {averagePrice > 0 && (
            <div className={`flex flex-col items-center justify-around lg:h-[170px] pr-5 ${profit > 0 ? 'text-green-500' : 'text-red-500'}`}>
                <div className="flex flex-col items-center">
                    <span className="flex items-center text-4xl">
                        <img src={crow.icon} alt="CROW" width="30" height="30" />
                        {profitInCrow.toLocaleString('en', { minimumFractionDigits: 4 })}
                    </span>
                    <span className="text-xl">
                        ({profit.toLocaleString('en', {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 4,
                        })})
                    </span>
                </div>

                <span className="text-6xl">{percentProfit.toFixed(0)}%</span>
            </div>
            )}
        </div>
    )
}
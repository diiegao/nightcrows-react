import { useState } from "react"
import { CrowToken, TokenList } from "../../../contexts/TokensContext"

interface CoinPriceProps {
    crow?: CrowToken
    tokens?: TokenList
}

export function CoinPrice({ crow, tokens }: CoinPriceProps) {
    // console.log({ crow, tokens })
    const [qtdToken, setQtdToken] = useState<number>(1)

    const priceCrow = crow && crow.price * qtdToken
    const priceToken = tokens && tokens.daySummary.close * qtdToken
    const priceTokenUSD = tokens && tokens.daySummary.closeDollar * qtdToken
    const priceDIMA = crow && qtdToken * 80

    return (
        <div className="flex items-center justify-between w-full lg:w-[365px] bg-zinc-900 border-zinc-800 border rounded-sm px-10 py-5 gap-5">
            <div className="flex items-center flex-col gap-2">
                <img 
                    src={crow?.icon || tokens?.token.icon} 
                    alt={crow ? "CROW" : tokens?.token.name} 
                    width={80} 
                    height={80} 
                />

                <p>{crow ? "CROW" : tokens?.token.name}</p>

            </div>

            {/* GAMBIARRA DO CARAIO */}
            <div className="flex flex-col items-center justify-center gap-3">
                <div className="flex items-center flex-col">
                    <p className="flex text-2xl gap-1">

                        {crow ? '' : <img src="https://cache.wemixplay.com/ADMIN-CONSOLE/TOKEN/CROW/5b1653cc-d2b1-4d57-a03c-4a73e83dbb46-crow.png" alt="CROW" width="30" height="30" />}
                        
                        {
                            priceCrow?.toLocaleString('en', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 4,
                            }) 
                        || 
                            priceToken?.toLocaleString('en', {
                                minimumFractionDigits: 4,
                            })
                        }

                    </p>

                    {crow && (
                        <span className="flex items-center gap-1">
                            <img src="https://gcdn.wemade.games/prod/ncgl/official/2.5.5/_next/static/images/token/diagram-vdia.webp" alt="DIAMOND" width="30" height="30" />
                            <p className="text-xl text-zinc-400">{priceDIMA}</p>
                        </span>
                    )}
                    
                    <span className="text-xl text-zinc-400">
                        {
                            !!crow 
                        || 
                            priceTokenUSD?.toLocaleString('en', {
                                style: 'currency',
                                currency: 'USD',
                            })            
                        }
                    </span>
                </div>
                <div className="flex items-center border-b border-zinc-700">
                    <p className="self-end">x</p>
                    <input 
                        type="text"
                        value={qtdToken}
                        onChange={(e) => setQtdToken(Number(e.target.value))}
                        className="w-[100px] px-2 text-2xl text-white bg-transparent border-none focus-visible:outline-none"
                    />
                </div>
            </div>
        </div>
    )
}
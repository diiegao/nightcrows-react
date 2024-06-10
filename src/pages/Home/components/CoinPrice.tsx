import { CrowToken, TokenList } from "../../../contexts/TokensContext"

interface CoinPriceProps {
    crow?: CrowToken
    tokens?: TokenList
}

export function CoinPrice({ crow, tokens }: CoinPriceProps) {
    // console.log({ crow, tokens })
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
            <div className="flex flex-col items-center justify-center">
                <p className="flex text-2xl gap-1">
                    {crow ? '' : <img src="https://cache.wemixplay.com/ADMIN-CONSOLE/TOKEN/CROW/5b1653cc-d2b1-4d57-a03c-4a73e83dbb46-crow.png" alt="CROW" width="30" height="30" />}
                    
                    {
                        crow?.price.toLocaleString('en', {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 4,
                        }) 
                    || 
                        tokens?.daySummary.close.toLocaleString('en', {
                            minimumFractionDigits: 4,
                        })
                    }

                </p>
                <span className="text-xl text-zinc-400">
                    {
                        !!crow 
                    || 
                        tokens?.daySummary.closeDollar.toLocaleString('en', {
                            style: 'currency',
                            currency: 'USD',
                        })            
                    }
                </span>
            </div>
        </div>
    )
}
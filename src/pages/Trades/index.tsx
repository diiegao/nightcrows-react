import { Title } from "../../components/Title";
import { useToken } from "../../contexts/TokensContext";
import { TokenTrade } from "./components/TokenTrade";

export function Trades() {
    const { tokenList, crowToken } = useToken()

    const priceDiamondShop = 0.0125
    const newPriceDiamond = crowToken.price / 80

    return (
        <>
            <Title text="Trade Simulator | DEX -> GAME" />
            <div className="flex items-center flex-col w-full lg:w-[1200px] px-8 gap-5">
                <div className="flex items-center justify-around flex-col lg:flex-row w-full bg-zinc-900 border-zinc-800 border rounded-sm">
                    <div className="flex items-center gap-2">
                        <img src={crowToken.icon} width="80" height="80" alt="CROW" />
                        <span className="text-zinc-300">
                            {crowToken.price.toLocaleString('en', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 4,
                            })}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="https://gcdn.wemade.games/prod/ncgl/official/2.5.5/_next/static/images/token/diagram-vdia.webp" width="80" height="80" alt="DIAMOND" />
                        <span className="text-zinc-300">(GAME) ${priceDiamondShop}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="https://gcdn.wemade.games/prod/ncgl/official/2.5.5/_next/static/images/token/diagram-vdia.webp" width="80" height="80" alt="DIAMOND" />
                        <span className="text-zinc-300">
                            (CROW) {newPriceDiamond.toLocaleString('en', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 4,
                            })}
                        </span>
                    </div>
                </div>

                <div className="flex items-center justify-center flex-wrap w-full gap-5 py-5">
                    {tokenList.map((token, i) => <TokenTrade token={token} crow={crowToken} key={i} />)}
                </div>
            </div>
        </>
    )
}
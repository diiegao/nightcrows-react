import { useState } from "react";
import { useToken } from "../../../contexts/TokensContext";
// import { formatToken, formatUSD } from "../../../utils/formatNumber";
import { MatPrice } from "./MatPrice";
import { formatToken, formatUSD } from "../../../utils/formatNumber";

export interface ItemMats {
    morion: number
    papyrus: number
    tear?: number
}

interface ResourcesType {
    tier: number
    rarity: string
    mats: ItemMats
}

interface ItemPriceProps {
    resources: ResourcesType
}

export function ItemPrice({ resources }: ItemPriceProps) {
    const { tokenList, crowToken } = useToken()

    const [qtdItems, setQtdItems] = useState<number>(1)

    function getToken(coin: string, qtd: number, items: number) {
        const getCoin = tokenList.find((t) => t.token.name === coin)

        return {
            price: getCoin!.daySummary?.close * qtd * items,
            priceUSD: getCoin!.daySummary?.closeDollar * qtd * items,
            priceDIMA: getCoin!.daySummary?.close / (crowToken.price / 80) * qtd * items,
        }
    }

    const totalPriceItem = (items: number[]) => items.reduce((p, c) => p + c, 0)


    return (
        <div className="flex items-center flex-col lg:flex-row w-full lg:w-[558px] lg:h-[300px] gap-3 p-3 bg-zinc-900 border-zinc-800 border rounded-sm">
            

            <div className="flex flex-col gap-3 lg:h-[257px] lg:border-r lg:border-zinc-800 lg:pr-2">
                <div className="flex items-center relative">
                    {resources.rarity === "rare" ? (
                        <img src="https://gcdn.wemade.games/prod/ncgl/official/2.5.5/_next/static/images/nft/equipment-circle-3.webp" alt="RARE" width="60" height="60" />
                        
                        ) : (
                            
                        <img src="https://gcdn.wemade.games/prod/ncgl/official/2.5.5/_next/static/images/nft/equipment-circle-4.webp" alt="EPIC" width="60" height="60" />
                    )}
                    <span className="flex items-center justify-center absolute left-4 top-4 text-2xl font-bold">T{resources.tier}</span>
                </div>

                <div className="flex items-center border-b border-zinc-800">
                    <span className="self-end">QTD:</span>
                    <input
                        type="text"
                        value={qtdItems}
                        onChange={(e) => setQtdItems(Number(e.target.value))}
                        className="w-[60px] px-2 text-2xl text-white bg-transparent border-none focus-visible:outline-none"
                    />
                </div>
            </div>

            <div className="flex items-center flex-col gap-3">
                <div className="flex justify-center w-full gap-3 lg:w-[415px] lg:border-b lg:border-zinc-800 lg:pb-2">
                    <MatPrice coin={{
                        name: "MORION",
                        quantity: resources.mats.morion * qtdItems,
                        priceCrow: getToken("MORION", qtdItems, resources.mats.morion / 10).price,
                        priceDiamond: getToken("MORION", qtdItems, resources.mats.morion / 10).priceDIMA,
                        priceUSD: getToken("MORION", qtdItems, resources.mats.morion / 10).priceUSD,
                    }} />
                    <MatPrice coin={{
                        name: "PAPYRUS",
                        quantity: resources.mats.papyrus * qtdItems,
                        priceCrow: getToken("PAPYRUS", qtdItems, resources.mats.papyrus / 10).price,
                        priceDiamond: getToken("PAPYRUS", qtdItems, resources.mats.papyrus / 10).priceDIMA,
                        priceUSD: getToken("PAPYRUS", qtdItems, resources.mats.papyrus / 10).priceUSD,
                    }} />
                    {resources.mats.tear && (
                        <MatPrice coin={{
                            name: "TEAR",
                            quantity: resources.mats.tear * qtdItems,
                            priceCrow: getToken("TEAR", qtdItems, resources.mats.tear).price,
                            priceDiamond: getToken("TEAR", qtdItems, resources.mats.tear).priceDIMA,
                            priceUSD: getToken("TEAR", qtdItems, resources.mats.tear).priceUSD,
                        }} />
                    )}
                </div>

                <div className="flex items-center gap-5">
                    <span className="flex items-center">
                        <img src="https://cache.wemixplay.com/ADMIN-CONSOLE/TOKEN/CROW/5b1653cc-d2b1-4d57-a03c-4a73e83dbb46-crow.png" alt="CROW" width="50" height="50" />
                        <p className="text-3xl">
                            {formatToken(totalPriceItem([
                                getToken("MORION", qtdItems, resources.mats.morion / 10).price,
                                getToken("PAPYRUS", qtdItems, resources.mats.papyrus / 10).price,
                                getToken("TEAR", qtdItems, resources.mats.tear!).price || 0,
                            ]))}
                        </p>
                    </span>

                    <span className="flex items-center">
                        <img src="https://gcdn.wemade.games/prod/ncgl/official/2.5.5/_next/static/images/token/diagram-vdia.webp" alt="DIAMOND" width="50" height="50" />
                        <p className="text-3xl">
                            {Math.ceil(totalPriceItem([
                                getToken("MORION", qtdItems, resources.mats.morion / 10).priceDIMA,
                                getToken("PAPYRUS", qtdItems, resources.mats.papyrus / 10).priceDIMA,
                                getToken("TEAR", qtdItems, resources.mats.tear!).priceDIMA || 0,
                            ])).toLocaleString('en')}
                        </p>
                    </span>
                </div>

                <p className="text-3xl">
                    {formatUSD(totalPriceItem([
                        getToken("MORION", qtdItems, resources.mats.morion / 10).priceUSD,
                        getToken("PAPYRUS", qtdItems, resources.mats.papyrus / 10).priceUSD,
                        getToken("TEAR", qtdItems, resources.mats.tear!).priceUSD || 0,
                    ]))}
                </p>
            </div>

        </div>
    )
}
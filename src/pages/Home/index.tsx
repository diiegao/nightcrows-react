import { Title } from "../../components/Title"
import { useToken } from "../../contexts/TokensContext"
import { CoinPrice } from "./components/CoinPrice"

export function Home() {
    const { tokenList, crowToken } = useToken()

    // console.log({tokenList, crowToken})
    return (
        <>
            <Title text="Tokens Price" />           
            <div className="flex items-center flex-wrap w-full lg:w-[1200px] px-8 gap-5">
                <CoinPrice crow={crowToken} />
                {tokenList.map((token, i) => (
                    <CoinPrice tokens={token} key={i} />    
                ))}
            </div>
        </>
    )
}
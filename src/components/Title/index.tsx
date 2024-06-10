import { ArrowsClockwise } from "@phosphor-icons/react"
import { useToken } from "../../contexts/TokensContext"

interface TitleProps {
    text: string
}

export function Title( { text }: TitleProps) {
    const { getTokens, getCrowToken } = useToken()

    function refreshTokens() {
        Promise.all([getTokens(), getCrowToken()])
    }

    return (
        <>
            <div className="flex items-center justify-between w-full lg:w-[1200px] px-8 py-4 mb-8">
                <h1 className="text-2xl">{text}</h1>
                <button onClick={() => refreshTokens()} className="flex items-center gap-1 px-3 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700">
                    <ArrowsClockwise size={22} /> Refresh
                </button>
            </div>
        </>
    )
}
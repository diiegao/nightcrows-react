import { ArrowsClockwise } from "@phosphor-icons/react"
import { useToken } from "../../contexts/TokensContext"
import { useState } from "react";

interface TitleProps {
    text: string
}

export function Title( { text }: TitleProps) {
    const { getTokens, getCrowToken } = useToken()

    const [isCooldown, setIsCooldown] = useState(false);

    function refreshTokens() {
        if(!isCooldown) {
            setIsCooldown(true)
            Promise.all([getTokens(), getCrowToken()])
            setTimeout(() => setIsCooldown(false), 6000)
        }
    }

    return (
        <>
            <div className="flex items-center justify-between w-full lg:w-[1200px] px-8 py-4 mb-8">
                <h1 className="text-2xl">{text}</h1>
                <button
                    onClick={() => refreshTokens()}
                    disabled={isCooldown}
                    className="flex items-center gap-1 px-3 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 disabled:bg-zinc-600 disabled:text-zinc-400"
                >
                    <ArrowsClockwise size={22} /> {isCooldown ? "Updating..." : "Update"}
                </button>
            </div>
        </>
    )
}
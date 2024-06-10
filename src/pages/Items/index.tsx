import { Title } from "../../components/Title";
import { ItemPrice } from "./components/ItemPrice";

export function Items() {
    return (
        <>
            <Title text="DEX price for crafting items" />

            <div className="flex items-center flex-col lg:flex-row lg:flex-wrap w-full lg:w-[1200px] px-8 gap-5">
                <ItemPrice resources={{
                    tier: 2,
                    rarity: "rare",
                    mats: {
                        morion: 60,
                        papyrus: 60,
                    }
                }} />
                <ItemPrice resources={{
                    tier: 1,
                    rarity: "epic",
                    mats: {
                        morion: 392,
                        papyrus: 294,
                        tear: 35
                    }
                }} />
                <ItemPrice resources={{
                    tier: 2,
                    rarity: "epic",
                    mats: {
                        morion: 560,
                        papyrus: 420,
                        tear: 100
                    }
                }} />
            </div>
        </>
    )
}
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="flex items-center justify-center w-full bg-zinc-900 p-6 gap-6 text-xl mb-16">
            <Link to="/">Prices</Link>
            <Link to="/trade">Trades</Link>
            <Link to="/items">Items</Link>
        </header>
    )
}
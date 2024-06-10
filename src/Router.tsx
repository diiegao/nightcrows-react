import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Trades } from "./pages/Trades";
import { Items } from "./pages/Items";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/trade" element={<Trades />} />
                <Route path="/items" element={<Items />} />
            </Route>
        </Routes>
    )
}
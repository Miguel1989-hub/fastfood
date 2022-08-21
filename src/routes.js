import { BrowserRouter, Routes as WrapperRoutes, Route } from "react-router-dom";
import Payment from "./pages/Payment";
import Orders  from "./pages/Orders";
import Production  from "./pages/Production"
import Kitchen from "./pages/Kitchen"

const Routes = () => {
    return (
        <BrowserRouter>
            <WrapperRoutes>
                <Route path="/" element={<Orders />} />
                <Route path="/cozinha" element={<Kitchen />} />
                <Route path="/saida" element={<Production />} />
                <Route path="/pagamento" element={<Payment />} />
            </WrapperRoutes>
        </BrowserRouter>
    )
}

export default Routes;
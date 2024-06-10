import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { TokenProvider } from "./contexts/TokensContext"

function App() {
  return (
    <TokenProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </TokenProvider>
  )
}

export default App

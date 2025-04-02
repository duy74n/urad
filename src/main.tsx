import { StrictMode } from "react"
import ReactDOM from "react-dom/client"

import "./index.css"
import AppQueryClientProvider from "./providers/AppQueryClientProvider"
import AppRoute from "./providers/AppRoute"

// Render the app
// biome-ignore lint/style/noNonNullAssertion: <explanation>
const rootElement = document.getElementById("root")!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <AppQueryClientProvider>
        <AppRoute />
      </AppQueryClientProvider>
    </StrictMode>
  )
}

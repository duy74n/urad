import { StrictMode } from "react"
import ReactDOM from "react-dom/client"

import AppMantineProvider from "./providers/AppMantineProvider"
import AppQueryClientProvider from "./providers/AppQueryClientProvider"
import AppRoute from "./providers/AppRoute"

import "@mantine/core/styles.css"
import "@mantine/dates/styles.css"
import "./index.css"

// Render the app
// biome-ignore lint/style/noNonNullAssertion: <explanation>
const rootElement = document.getElementById("root")!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <AppQueryClientProvider>
        <AppMantineProvider>
          <AppRoute />
        </AppMantineProvider>
      </AppQueryClientProvider>
    </StrictMode>
  )
}

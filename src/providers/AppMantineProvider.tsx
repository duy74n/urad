import { MantineProvider, createTheme } from "@mantine/core"
import { DEFAULT_THEME } from "@mantine/core"

const theme = createTheme({
  ...DEFAULT_THEME,
  /** Put your mantine theme override here */
  primaryColor: "indigo",
  defaultRadius: 0,
})

const AppMantineProvider = ({ children }: { children: React.ReactNode }) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>
}

export default AppMantineProvider

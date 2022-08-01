import { ThemeProvider } from 'styled-components'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { Router } from './routes/Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

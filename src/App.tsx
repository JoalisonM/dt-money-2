import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/Transactions'
import { defaultTheme } from './styles/themes/default'
import { TransactionsProvider } from './contexts/TransactionContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}

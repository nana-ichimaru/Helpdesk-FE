import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './core/queryClient.ts'
import { Provider as ChakraUiProvider } from './components/ui/provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraUiProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraUiProvider>
    </QueryClientProvider>
  </StrictMode>,
)

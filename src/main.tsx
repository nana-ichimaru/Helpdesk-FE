import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './core/queryClient.ts'
import { Provider as ChakraUiProvider } from './components/ui/provider.tsx'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  // StrictMode でアプリ全体を包む
  // 開発時のみ追加チェックが入る（本番ビルドには影響しない）
  <StrictMode>
    {/* // QueryClientProvider をアプリのルートに配置することで、
    // アプリ全体で同じ QueryClient を共有できるようにする。
    // これにより、App 配下のすべてのコンポーネントで
    // useQuery / useMutation などの react-query の Hooks が利用可能になる。 */}
    <QueryClientProvider client={queryClient}>
      {/* Chakra UI の Provider でアプリを包むことで、UI設定やテーマが全体に適用される */}
      <ChakraUiProvider>
        {/* BrowserRouter でアプリを包むことで、URLに応じた画面遷移ができるようになる */}
        <BrowserRouter>
          {/* App がアプリ全体の入口（ここから各ページやコンポーネントへ分岐する） */}
          <App />
        </BrowserRouter>
      </ChakraUiProvider>
    </QueryClientProvider>
  </StrictMode>,
)

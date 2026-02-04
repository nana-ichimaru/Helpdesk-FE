import { defineConfig as defineViteConfig, mergeConfig } from 'vite'
import { defineConfig as defineVitestConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const viteConfig = defineViteConfig({
  plugins: [react()],
})

const vitestConfig = defineVitestConfig({
  test: {
    // describe/it/expect/vi を import なしで使える
    globals: true,

    // ブラウザ環境（window/document）を再現。ReactのDOMテストに必要
    environment: 'jsdom',

    // テスト開始前に毎回読み込む初期化ファイル
    // ここで `import "@testing-library/jest-dom/vitest"` を読むと
    // toBeInTheDocument() などが使える（型も解決）
    setupFiles: './src/tests/setup.ts',

    // テストとして実行するファイルのパターン
    include: ['src/**/*.{test,spec}.{ts,tsx,js,jsx}'],
  },
})

export default mergeConfig(viteConfig, vitestConfig)

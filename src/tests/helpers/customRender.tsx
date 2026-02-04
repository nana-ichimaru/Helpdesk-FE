import { render } from '@testing-library/react'
import { CustomRenderProvider } from '../providers/customRenderProvider'

// テスト用の render ヘルパー。
// 毎回 Provider（React Query / Chakra UI / Router など）を手動で包むのが面倒なので、
// CustomRenderProvider でラップした状態でまとめて描画できるようにする。
export const customRender = (ui: React.ReactElement) => {
  // テストしたいコンポーネント（ui）を Provider 群で包んで render する
  return render(<CustomRenderProvider>{ui}</CustomRenderProvider>)
}

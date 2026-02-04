import { screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { LoginContainer } from '../LoginContainer'
// customRender を使うことで、テスト対象をアプリ本番同様の Provider 構成で描画できる
// （React Query / Chakra UI / Router などを毎回テストで用意しなくて済む）
import { customRender } from '../../../tests/helpers/customRender'

// LoginPresentational をモック化して、Container 側の描画確認に集中する
vi.mock('../LoginPresentational', () => ({
  // 本物の UI ではなく、テスト用のダミーコンポーネントを返す
  LoginPresentational: () => {
    // data-testid で確実に取得できるようにする
    return <div data-testid='mocked-login-presentational' />
  },
}))

describe('正常系', () => {
  it('LoginPresentational を描画している', () => {
    // Container を描画（内部で LoginPresentational が呼ばれる想定）
    customRender(<LoginContainer />)

    // モックした LoginPresentational が表示されていることを確認
    expect(screen.getByTestId('mocked-login-presentational')).toBeInTheDocument()
  })
})

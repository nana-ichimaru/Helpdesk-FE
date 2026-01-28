## アプリケーション概要

本アプリケーションは、社内向けのヘルプデスク業務を効率化するための
チケット管理システムです。

社員からの問い合わせをチケットとして登録・管理し、
サポート担当者および管理者が対応状況を一元的に把握・更新できることを目的としています。

ユーザーの権限（社員／サポート担当／システム管理者）に応じて
利用可能な機能や表示内容が切り替わる設計となっています。

## 利用想定

- 社員は、業務上の問い合わせやトラブルをチケットとして登録し、
　自身が作成したチケットの状況を確認できます。

- サポート担当者は、社員から登録されたチケットを取得・担当し、
　ステータス更新やコメントを通じて対応を行います。

- システム管理者は、全チケットの管理に加えて、
　ユーザーアカウントの登録・停止・再開などの管理操作を行います。

## 使用技術

### フロントエンド
- React
- TypeScript
- React Router
- Chakra UI
- React Query
- Axios
- Zod

### 開発・品質管理
- Vite
- Yarn
- ESLint / Prettier
- Vitest
- Playwright

## ディレクトリ構成（現状）
```bash
├─ index.html              # エントリーHTML
├─ package.json            # 依存関係 / npm scripts
├─ yarn.lock               # 依存関係のロックファイル
├─ vite.config.ts          # Vite設定
├─ tsconfig.json           # TypeScript共通設定
├─ tsconfig.app.json       # アプリ用TypeScript設定
├─ tsconfig.node.json      # Node用TypeScript設定
├─ eslint.config.js        # ESLint設定
├─ .gitignore
├─ README.md
└─ src/
   ├─ main.tsx             # アプリケーションのエントリーポイント
   └─ App.tsx              # ルートコンポーネント
```

## 前提条件
本プロジェクトをローカルで開発するためには、以下の環境が必要です。
- Node.js（v24.12.0）
- Yarn

## 環境構築手順

### 1. リポジトリをクローン
```bash
git clone https://github.com/nana-ichimaru/Helpdesk-FE.git
cd Helpdesk-FE
```

### 2. 依存関係のインストール
```bash
yarn install
```

### 3. 開発サーバーの起動
```bash
yarn dev
```


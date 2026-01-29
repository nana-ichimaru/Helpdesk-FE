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

## ディレクトリ構成
```bash
src/
├─ components/
├─ core/
├─ features/
├─ models/
├─ routes/
├─ services/
└─ share/   
```
### 主要ディレクトリの役割

- components：複数画面で使い回す共通UIコンポーネント
- core：アプリ全体の初期設定・土台となる処理
- features：機能単位で UI / ロジック / hooks をまとめるフォルダ
- models：アプリケーション内で使用するデータ構造を型として定義・管理
- routes：URL パスと画面（Container）の対応関係を管理
- services：バックエンド・外部サービスとの通信処理
- share：定数・型・共通ロジックなど、全体で共有するもの

<details>
<summary>ディレクトリ構成の方針</summary>

<h3>models（モデル定義）</h3>

<pre><code>src/models/
</code></pre>

<p>
アプリケーション内で使用するデータ構造を型として定義・管理します。<br />
主にバックエンドとのデータの受け渡しや、画面表示に必要なモデルを扱います。
</p>

<hr />

<h3>components（共通UIコンポーネント）</h3>

<pre><code>src/components/
</code></pre>

<p>
画面をまたいで再利用される UI コンポーネントを配置します。
</p>

<p>
Atomic Design の5階層（Atoms / Molecules / Organisms / Templates / Pages）を、
React コンポーネントのディレクトリ構造に反映しています。
</p>

<ul>
  <li>atoms：最小単位のUI（Button / Input / Badge など）</li>
  <li>molecules：atomsの組み合わせ</li>
  <li>organisms：意味を持つUIブロック</li>
  <li>templates：レイアウト構造</li>
  <li>pages：画面単位の見た目</li>
</ul>
<hr />

<h3>features（機能単位）</h3>

<pre><code>src/features/
</code></pre>

<p>
機能・ユースケース単位でコードをまとめるフォルダです。<br />
features 配下にはページ（画面）単位でフォルダを作成し、<br />
各ページに関する UI、ロジック、状態管理などを機能ごとに閉じ込めます。
</p>

<hr />

<h3>routes（ルーティング管理）</h3>

<pre><code>src/routes/
</code></pre>

<p>
アプリ全体のルーティング定義を管理します。<br />
URL と画面の対応関係はこのフォルダ配下で集約します。
</p>

<hr />

<h3>services（通信・外部連携）</h3>

<pre><code>src/services/
</code></pre>

<p>
バックエンドや外部サービスとの通信処理を管理します。<br />
API クライアントや通信ロジックはここに集約します。
</p>

<hr />

<h3>share（全体共有）</h3>

<pre><code>src/share/
</code></pre>

<p>
アプリ全体で共通利用される定義を配置します。
</p>

<ul>
  <li>constants：固定値・定数</li>
  <li>types：複数機能で共有する型定義</li>
  <li>logic：共通ロジックやユーティリティ</li>
</ul>

</details>

## 前提条件

本プロジェクトをローカルで開発するためには、以下の環境が必要です。

- Node.js（v24.12.0）
- Yarn

※ 上記の環境構築手順が分からない場合は、以下を参照してください。

<details>
<summary>前提条件・環境構築手順（Node.js / Yarn が未インストールの場合）</summary>
<h3>必要な環境</h3>

<ul>
  <li>OS：macOS / Windows / Linux（動作確認・手順例は macOS）</li>
  <li>Node.js：<strong>v24.12.0</strong></li>
  <li>パッケージマネージャ：Yarn</li>
</ul>

<p>
本プロジェクトでは、Node.js のバージョン差異による不具合を防ぐため、
<strong>Node.js のバージョンを完全に揃えること</strong>を前提としています。
</p>

<p>
以下では、<strong>nodebrew を利用して Node.js を管理する方法</strong>を例に説明します。
</p>

<p>
Windows / Linux 環境については、各OSに適した Node.js バージョン管理ツールを使用し、
上記と同一の Node.js バージョンを設定してください。
</p>

<hr />

<h3>1. nodebrew のインストール</h3>

<pre><code>brew install nodebrew
</code></pre>

<p>
nodebrew は、Node.js 本体ではなく、
<strong>Node.js のバージョンを管理・切り替えるためのツール</strong>です。
</p>

<hr />

<h3>2. インストール可能な Node.js バージョンの確認</h3>

<pre><code>nodebrew ls-remote
</code></pre>

<p>
指定バージョン（v24.12.0）がインストール可能かを確認します。
</p>

<hr />

<h3>3. Node.js のインストール（バイナリ版）</h3>

<pre><code>nodebrew install-binary v24.12.0
</code></pre>

<hr />

<h3>4. インストール済み Node.js の確認</h3>

<pre><code>nodebrew list
</code></pre>

<p>
インストール済みの Node.js バージョン一覧を確認します。
</p>

<hr />

<h3>5. 使用する Node.js バージョンの切り替え</h3>

<pre><code>nodebrew use v24.12.0
</code></pre>

<p>
切り替え後、以下でバージョンを確認してください。
</p>

<pre><code>node -v
</code></pre>

<hr />

<h4>yarn のインストール</h4>

<pre><code>npm install -g yarn
</code></pre>

<p>
インストール後、以下のコマンドで yarn が使用できることを確認してください。
</p>

<pre><code>yarn -v
</code></pre>

<hr />

<h4>（任意）グローバル npm パッケージの確認</h4>

<pre><code>npm list -g --depth=0
</code></pre>

<hr />

</details>


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


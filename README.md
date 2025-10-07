# React Marquee

[![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-9.1-ff4785?logo=storybook&logoColor=white)](https://storybook.js.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

HTMLの`<marquee>`要素をCSSアニメーションで再現したモダンなReactコンポーネントです。

## インストール

```bash
pnpm install
```

## 使用方法

```tsx
import { Marquee } from './Marquee';

function App() {
  return (
    <Marquee
      behavior="scroll"
      direction="left"
      scrollAmount={6}
      scrollDelay={85}
      loop={-1}
    >
      スクロールするテキスト
    </Marquee>
  );
}
```

## Props

| Prop              | Type                                  | Default    | Description                                |
| ----------------- | ------------------------------------- | ---------- | ------------------------------------------ |
| `behavior`        | `'scroll' \| 'slide' \| 'alternate'`  | `'scroll'` | スクロールの動作パターン                   |
| `direction`       | `'left' \| 'right' \| 'up' \| 'down'` | `'left'`   | スクロールの方向                           |
| `loop`            | `number`                              | `-1`       | スクロール回数（-1で無限ループ）           |
| `scrollAmount`    | `number`                              | `6`        | 1インターバルあたりの移動ピクセル数        |
| `scrollDelay`     | `number`                              | `85`       | スクロールのインターバル（ミリ秒、最小60） |
| `isStopAnimation` | `boolean`                             | `false`    | アニメーションを停止                       |
| `className`       | `string`                              | -          | カスタムCSSクラス名                        |
| `style`           | `React.CSSProperties`                 | -          | インラインスタイル                         |
| `children`        | `React.ReactNode`                     | -          | 表示するコンテンツ                         |

## Behaviorモード

- **scroll**: テキストが連続してスクロールします
- **slide**: テキストが完全に通過してから再度表示されます
- **alternate**: テキストが端で反転し往復運動します

## 使用例

### 基本的なスクロール

```tsx
<Marquee>This text will scroll from right to left</Marquee>
```

### 方向とスタイルの指定

```tsx
<Marquee direction="up" style={{ height: '100px', backgroundColor: '#f0f0f0' }}>
  This text will scroll from bottom to top
</Marquee>
```

### バウンス効果

```tsx
<Marquee behavior="alternate" direction="left">
  This text will bounce back and forth
</Marquee>
```

### 2次元のバウンス

```tsx
<Marquee
  direction="left"
  behavior="alternate"
  style={{ width: '250px', height: '200px', border: '1px solid #333' }}
>
  <Marquee behavior="alternate" direction="up">
    This text will bounce in 2D
  </Marquee>
</Marquee>
```

## 開発

```bash
# 開発サーバーの起動
pnpm dev

# Storybookの起動
pnpm storybook

# ビルド
pnpm build

# リント
pnpm lint

# フォーマット
pnpm format
```

## Tech Stack

- React 19
- TypeScript 5.8
- Vite 7
- Storybook 9
- ESLint + Prettier

## ライセンス

MIT

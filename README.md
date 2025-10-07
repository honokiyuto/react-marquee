# React Marquee

HTMLの`<marquee>`要素を模したモダンなReactコンポーネントです。テキストや要素を様々な方向にスクロール表示させることができます。

## 特徴

- 🎯 TypeScriptで型安全に実装
- 🎨 複数のbehaviorモード（scroll, slide, alternate）
- 🧭 4方向のスクロール対応（left, right, up, down）
- ⚡️ カスタマイズ可能なスピードとループ回数
- 🎭 完全なStorybook対応

# React Marquee Component

HTML の `<marquee>` タグをReactコンポーネントとしてCSSアニメーションで再現したコンポーネントです。

## 特徴

- 元の `<marquee>` タグの全ての属性に対応
- CSS アニメーションを使用したスムーズな動作
- TypeScript完全対応
- アクセシビリティ配慮（`prefers-reduced-motion` 対応）

## 対応する属性

| 属性 | 型 | デフォルト値 | 説明 |
|------|------|--------------|------|
| `behavior` | `'scroll' \| 'slide' \| 'alternate'` | `'scroll'` | テキストのスクロール方法を指定 |
| `direction` | `'left' \| 'right' \| 'up' \| 'down'` | `'left'` | テキストのスクロール方向を指定 |
| `bgcolor` | `string` | - | 背景色を指定 |
| `height` | `string \| number` | - | スクロール範囲の高さを指定 |
| `width` | `string \| number` | - | スクロール範囲の幅を指定 |
| `hspace` | `number` | `0` | 水平方向のマージンを指定 |
| `vspace` | `number` | `0` | 垂直方向のマージンを指定 |
| `loop` | `number` | `-1` | スクロール回数を指定（-1で無限） |
| `scrollamount` | `number` | `6` | テキストの移動ピクセル数を指定 |
| `scrolldelay` | `number` | `85` | スクロール動作のインターバル（ミリ秒） |
| `truespeed` | `boolean` | `false` | scrolldelayで60未満の値を許可 |

## 使用例

### 基本的な使用

```tsx
import Marquee from './Marquee';

// 基本的な左スクロール
<Marquee>
  This text will scroll from right to left
</Marquee>
```

### 方向を指定

```tsx
// 上方向スクロール
<Marquee direction="up" height="100px">
  This text will scroll from bottom to top
</Marquee>

// 右方向スクロール
<Marquee direction="right">
  This text scrolls to the right
</Marquee>
```

### 動作の種類を指定

```tsx
// スライド効果（1回だけ移動して停止）
<Marquee behavior="slide" direction="left" loop={1}>
  This text slides in from right once
</Marquee>

// バウンス効果（往復運動）
<Marquee behavior="alternate" direction="left">
  This text will bounce back and forth
</Marquee>
```

### スタイルのカスタマイズ

```tsx
// 背景色とサイズを指定
<Marquee 
  bgcolor="#ff6b6b" 
  width="300px" 
  height="50px"
  style={{ padding: '10px', color: 'white' }}
>
  Styled marquee text
</Marquee>

// スピード調整
<Marquee 
  scrollamount={2}
  scrolldelay={50}
>
  Slow scrolling text
</Marquee>

// 高速スクロール（truespeed使用）
<Marquee 
  scrollamount={15} 
  scrolldelay={20} 
  truespeed={true}
>
  Fast scrolling text
</Marquee>
```

### 複雑な組み合わせ

```tsx
// 2次元のバウンス効果
<Marquee 
  direction="left" 
  width="250px" 
  height="200px" 
  behavior="alternate" 
  style={{ border: '1px solid #333' }}
>
  <Marquee behavior="alternate" direction="up">
    This text will bounce in 2D
  </Marquee>
</Marquee>
```

## スタイルの注意点

- 水平方向のスクロール（`left`、`right`）では `white-space: nowrap` が適用されます
- 垂直方向のスクロール（`up`、`down`）では通常の改行が有効になります
- `prefers-reduced-motion: reduce` が設定されているユーザーにはアニメーションが無効になります

## 開発

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# ビルド
pnpm build

# リント
pnpm lint
```

## ライセンス

MIT

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```bash
pnpm dev
```

## Storybookの起動

コンポーネントのドキュメントと様々なバリエーションを確認できます：

```bash
pnpm storybook
```

Storybookは `http://localhost:6006` で起動します。

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

| Prop           | Type                                  | Default    | Description                                |
| -------------- | ------------------------------------- | ---------- | ------------------------------------------ |
| `behavior`     | `'scroll' \| 'slide' \| 'alternate'`  | `'scroll'` | スクロールの動作パターン                   |
| `direction`    | `'left' \| 'right' \| 'up' \| 'down'` | `'left'`   | スクロールの方向                           |
| `loop`         | `number`                              | `-1`       | スクロール回数（-1で無限ループ）           |
| `scrollAmount` | `number`                              | `6`        | 1インターバルあたりの移動ピクセル数        |
| `scrollDelay`  | `number`                              | `85`       | スクロールのインターバル（ミリ秒、最小60） |
| `className`    | `string`                              | `''`       | カスタムCSSクラス名                        |
| `style`        | `React.CSSProperties`                 | `{}`       | インラインスタイル                         |
| `children`     | `React.ReactNode`                     | -          | 表示するコンテンツ                         |

## Behaviorモード

### Scroll

テキストが連続してスクロールします。端に到達すると反対側から再度表示されます。

### Slide

テキストが完全に通過してから、再度反対側から表示されます。

### Alternate

テキストが端で反転し、往復運動します。

## ビルド

```bash
pnpm build
```

## リント

```bash
pnpm lint
```

## フォーマット

```bash
pnpm format
```

## Storybookのビルド

```bash
pnpm build-storybook
```

---

## Tech Stack

- React 19
- TypeScript
- Vite
- Storybook 9
- ESLint
- Prettier

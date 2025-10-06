# React Marquee

HTMLの`<marquee>`要素を模したモダンなReactコンポーネントです。テキストや要素を様々な方向にスクロール表示させることができます。

## 特徴

- 🎯 TypeScriptで型安全に実装
- 🎨 複数のbehaviorモード（scroll, slide, alternate）
- 🧭 4方向のスクロール対応（left, right, up, down）
- ⚡️ カスタマイズ可能なスピードとループ回数
- 🎭 完全なStorybook対応

## インストール

```bash
pnpm install
```

## 開発サーバーの起動

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

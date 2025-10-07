import type { Meta, StoryObj } from '@storybook/react-vite';
import { Marquee } from '../Marquee';

/**
 * マーキーコンポーネント
 *
 * HTMLの`<marquee>`要素を模したReactコンポーネントです。
 * テキストや要素をスクロール表示させることができます。
 */
const meta = {
  title: 'Components/Marquee',
  component: Marquee,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'マーキーコンポーネントは、テキストや要素を様々な方向にスクロール表示させることができます。behavior、direction、speed、loopなどのプロパティを使ってカスタマイズできます。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    behavior: {
      control: 'select',
      options: ['scroll', 'slide', 'alternate'],
      description: 'スクロールの動作パターンを指定します',
      table: {
        defaultValue: { summary: 'scroll' },
        type: { summary: "'scroll' | 'slide' | 'alternate'" },
      },
    },
    direction: {
      control: 'select',
      options: ['left', 'right', 'up', 'down'],
      description: 'スクロールの方向を指定します',
      table: {
        defaultValue: { summary: 'left' },
        type: { summary: "'left' | 'right' | 'up' | 'down'" },
      },
    },
    loop: {
      control: { type: 'number', min: -1, step: 1 },
      description: 'スクロール回数を指定します。-1で無限ループ',
      table: {
        defaultValue: { summary: '-1' },
        type: { summary: 'number' },
      },
    },
    scrollAmount: {
      control: { type: 'number', min: 1, max: 50, step: 1 },
      description: '1インターバルあたりの移動ピクセル数',
      table: {
        defaultValue: { summary: '6' },
        type: { summary: 'number' },
      },
    },
    scrollDelay: {
      control: { type: 'number', min: 60, max: 500, step: 5 },
      description: 'スクロールのインターバル（ミリ秒）。最小値は60',
      table: {
        defaultValue: { summary: '85' },
        type: { summary: 'number' },
      },
    },
    className: {
      control: 'text',
      description: 'カスタムCSSクラス名',
      table: {
        type: { summary: 'string' },
      },
    },
    style: {
      control: 'object',
      description: 'インラインスタイル',
      table: {
        type: { summary: 'React.CSSProperties' },
      },
    },
    children: {
      control: 'text',
      description: '表示するコンテンツ',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '600px',
          height: '200px',
          border: '1px solid #ccc',
          overflow: 'hidden',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Marquee>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルトのマーキー表示
 */
export const Default: Story = {
  args: {
    children: 'これはマーキーテキストです 📝',
  },
};

/**
 * ### Behavior: Scroll
 *
 * 左方向にスクロールする基本的なパターン
 */
export const ScrollLeft: Story = {
  args: {
    behavior: 'scroll',
    direction: 'left',
    children: '左にスクロールしています ← ← ←',
  },
};

/**
 * ### Behavior: Scroll
 *
 * 右方向にスクロール
 */
export const ScrollRight: Story = {
  args: {
    behavior: 'scroll',
    direction: 'right',
    children: '右にスクロールしています → → →',
  },
};

/**
 * ### Behavior: Scroll
 *
 * 上方向にスクロール
 */
export const ScrollUp: Story = {
  args: {
    behavior: 'scroll',
    direction: 'up',
    children: '上にスクロールしています ↑ ↑ ↑',
  },
};

/**
 * ### Behavior: Scroll
 *
 * 下方向にスクロール
 */
export const ScrollDown: Story = {
  args: {
    behavior: 'scroll',
    direction: 'down',
    children: '下にスクロールしています ↓ ↓ ↓',
  },
};

/**
 * ### Behavior: Slide
 *
 * スライド動作（左）- 完全に通過してから再度表示
 */
export const SlideLeft: Story = {
  args: {
    behavior: 'slide',
    direction: 'left',
    children: 'スライドして左に移動 🚀',
  },
};

/**
 * ### Behavior: Slide
 *
 * スライド動作（右）
 */
export const SlideRight: Story = {
  args: {
    behavior: 'slide',
    direction: 'right',
    children: 'スライドして右に移動 🚀',
  },
};

/**
 * ### Behavior: Slide
 *
 * スライド動作（上）
 */
export const SlideUp: Story = {
  args: {
    behavior: 'slide',
    direction: 'up',
    children: 'スライドして上に移動 🚀',
  },
};

/**
 * ### Behavior: Slide
 *
 * スライド動作（下）
 */
export const SlideDown: Story = {
  args: {
    behavior: 'slide',
    direction: 'down',
    children: 'スライドして下に移動 🚀',
  },
};

/**
 * ### Behavior: Alternate
 *
 * 左右に往復する動作
 */
export const AlternateLeft: Story = {
  args: {
    behavior: 'alternate',
    direction: 'left',
    children: '左右に往復します ⇄',
  },
};

/**
 * ### Behavior: Alternate
 *
 * 右左に往復する動作
 */
export const AlternateRight: Story = {
  args: {
    behavior: 'alternate',
    direction: 'right',
    children: '右左に往復します ⇄',
  },
};

/**
 * ### Behavior: Alternate
 *
 * 上下に往復する動作
 */
export const AlternateUp: Story = {
  args: {
    behavior: 'alternate',
    direction: 'up',
    children: '上下に往復します ⇅',
  },
};

/**
 * ### Behavior: Alternate
 *
 * 下上に往復する動作
 */
export const AlternateDown: Story = {
  args: {
    behavior: 'alternate',
    direction: 'down',
    children: '下上に往復します ⇅',
  },
};

/**
 * ### 高速スクロール
 *
 * scrollAmountとscrollDelayを調整して高速化
 */
export const FastSpeed: Story = {
  args: {
    behavior: 'scroll',
    direction: 'left',
    scrollAmount: 20,
    scrollDelay: 60,
    children: '高速でスクロールしています 💨💨💨',
  },
};

/**
 * ### 低速スクロール
 *
 * scrollAmountとscrollDelayを調整して低速化
 */
export const SlowSpeed: Story = {
  args: {
    behavior: 'scroll',
    direction: 'left',
    scrollAmount: 2,
    scrollDelay: 200,
    children: 'ゆっくりスクロールしています 🐢',
  },
};

/**
 * ### ループ回数制限
 *
 * 3回だけループして停止
 */
export const LimitedLoop: Story = {
  args: {
    behavior: 'scroll',
    direction: 'left',
    loop: 3,
    children: '3回だけスクロールします（リロードして確認）',
  },
};

/**
 * ### カスタムスタイル
 *
 * CSSでスタイルをカスタマイズ
 */
export const CustomStyle: Story = {
  args: {
    behavior: 'scroll',
    direction: 'left',
    children: 'カスタムスタイル付き ✨',
    style: {
      backgroundColor: '#4CAF50',
      color: 'white',
      fontSize: '24px',
      fontWeight: 'bold',
      borderRadius: '8px',
      width: '100%',
      height: '100%',
    },
  },
};

/**
 * ### 長いテキスト
 *
 * 長いコンテンツのスクロール
 */
export const LongText: Story = {
  args: {
    behavior: 'scroll',
    direction: 'left',
    children:
      'これは非常に長いテキストです。マーキーコンポーネントは長いコンテンツでも問題なくスクロール表示できます。ユーザーに重要な情報を伝えるのに便利です。🌟🌟🌟',
  },
};

/**
 * ### HTMLコンテンツ
 *
 * テキスト以外の要素も表示可能
 */
export const WithHTMLContent: Story = {
  args: {
    behavior: 'scroll',
    direction: 'left',
    children: (
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <span style={{ fontSize: '24px' }}>🎉</span>
        <strong>太字テキスト</strong>
        <em>イタリック体</em>
        <button style={{ padding: '5px 10px', cursor: 'pointer' }}>
          ボタン
        </button>
        <span style={{ fontSize: '24px' }}>🎨</span>
      </div>
    ),
  },
};

/**
 * ### 複数の要素
 *
 * 画像やアイコンなど複数の要素を含む
 */
export const WithMultipleElements: Story = {
  args: {
    behavior: 'scroll',
    direction: 'left',
    children: (
      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <span>⭐️</span>
        <span>🌟</span>
        <span>✨</span>
        <span>💫</span>
        <span>🌠</span>
        <span>⭐️</span>
        <span>🌟</span>
        <span>✨</span>
      </div>
    ),
  },
};

/**
 * ### 縦スクロール + 長いコンテンツ
 *
 * 縦方向の長いコンテンツ
 */
export const VerticalLongContent: Story = {
  args: {
    behavior: 'scroll',
    direction: 'up',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>📋 項目1</div>
        <div>📋 項目2</div>
        <div>📋 項目3</div>
        <div>📋 項目4</div>
        <div>📋 項目5</div>
      </div>
    ),
  },
};

/**
 * ### カスタムクラス名
 *
 * 外部CSSクラスを適用
 */
export const WithCustomClassName: Story = {
  args: {
    behavior: 'scroll',
    direction: 'left',
    className: 'custom-marquee',
    children: 'カスタムクラス名を持つマーキー',
  },
  decorators: [
    (Story) => (
      <div>
        <style>{`
          .custom-marquee {
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 10px;
          }
        `}</style>
        <div
          style={{
            width: '600px',
            height: '200px',
            border: '1px solid #ccc',
            overflow: 'hidden',
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
};

/**
 * ### 二重のAlternate
 *
 * alternateを二重に適用すると、内側の4辺で跳ね返るようになります
 * ```js
 * <Marquee behavior="alternate" direction="left" scrollDelay={5}>
 *   <Marquee behavior="alternate" direction="up">
 *     {children}
 *   </Marquee>
 * </Marquee>
 * ```
 */
export const DoubleAlternate: Story = {
  args: {
    behavior: 'alternate',
    direction: 'left',
    children: (
      <img
        src="https://cdn.iconscout.com/icon/free/png-512/free-dvd-icon-svg-download-png-282446.png?f=webp&w=90"
        alt="dvd icon"
      />
    ),
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '600px',
          height: '200px',
          border: '1px solid #ccc',
          overflow: 'hidden',
        }}
      >
        <Marquee behavior="alternate" direction="up" scrollDelay={5}>
          <Story />
        </Marquee>
      </div>
    ),
  ],
};

/**
 * ### インタラクティブなプレイグラウンド
 *
 * すべてのプロパティを自由に調整できます
 */
export const Playground: Story = {
  args: {
    behavior: 'scroll',
    direction: 'left',
    loop: -1,
    scrollAmount: 6,
    scrollDelay: 85,
    children: 'プロパティを自由に調整してください 🎮',
  },
};

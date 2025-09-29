export type MarqueeProps = {
  /**
   * @description marquee 要素内でのテキストのスクロール方法を `scroll`、`slide`、`alternate` の内の何れかのキーワードで指定します。指定を省略した場合は、初期値の `scroll` が適用されます。
   */
  behavor?: 'scroll' | 'slide' | 'alternate';
  /**
   * @description 背景色を、色名もしくは 16 進カラーコードで指定します。
   */
  bgcolor?: string;
  /**
   * @description marquee 要素内でのテキストのスクロール方向を `left`、`right`、`up`、`down` の内の何れかのキーワードで指定します。初期値は `left` です。
   */
  direction?: 'left' | 'right' | 'up' | 'down';
  /**
   * @description スクロール範囲の高さを、ピクセル値かパーセント値で指定します。
   */
  height?: number | string;
  /**
   * @description 水平方向のマージンを指定します。
   */
  hspace?: number;
  /**
   * @description テキストのスクロール回数を指定します。初期値は −1 であり、これはスクロール回数を制限せず、恒久的にスクロールを続ける指定です。
   */
  loop?: number;
  /**
   * @description インターバル内での、テキストの移動ピクセル数を指定します。初期値は 6 です。
   */
  scrollamount?: number;
  /**
   * @description スクロール動作のインターバルをミリ秒で指定します。初期値は 85 です。`truespeed` 属性が指定されていない場合は 60 が最下限であり、これ以下の値は 60 として解釈されます。
   */
  scrolldelay?: number;
  /**
   * @description 既定では、`scrolldelay` で 60 を下回る値は無視します。`truespeed` を指定すると、それらの値が無視されません。
   */
  truespeed?: boolean;
  /**
   * @description 垂直方向のマージンをピクセル値かパーセント値で指定します。
   */
  vspace?: number | string;
  /**
   * @description スクロール範囲の幅をピクセル値かパーセント値で指定します。
   */
  width?: number | string;
  /**
   * @description marquee 要素内に表示するテキストや HTML 要素を指定します。
   */
  children: React.ReactNode;
};

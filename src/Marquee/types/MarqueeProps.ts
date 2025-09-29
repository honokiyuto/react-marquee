export type MarqueeProps = {
  /**
   * @description marquee 要素内でのテキストのスクロール方法を `scroll`、`slide`、`alternate` の内の何れかのキーワードで指定します。指定を省略した場合は、初期値の `scroll` が適用されます。
   */
  behavior?: 'scroll' | 'slide' | 'alternate';
  /**
   * @description marquee 要素内でのテキストのスクロール方向を `left`、`right`、`up`、`down` の内の何れかのキーワードで指定します。初期値は `left` です。
   */
  direction?: 'left' | 'right' | 'up' | 'down';
  /**
   * @description テキストのスクロール回数を指定します。初期値は −1 であり、これはスクロール回数を制限せず、恒久的にスクロールを続ける指定です。
   */
  loop?: number;
  /**
   * @description インターバル内での、テキストの移動ピクセル数を指定します。初期値は 6 です。
   */
  scrollamount?: number;
  /**
   * @description スクロール動作のインターバルをミリ秒で指定します。初期値は 85 です。 60 が最下限であり、これ以下の値は 60 として解釈されます。
   */
  scrolldelay?: number;
  /**
   * @description marquee 要素内に表示するテキストや HTML 要素を指定します。
   */
  children: React.ReactNode;
  /**
   * @description marquee 要素に適用する CSS クラス名を指定します。
   */
  className?: string;
  /**
   * @description marquee 要素に適用するインラインスタイルを指定します。
   */
  style?: React.CSSProperties;
};

import type { MarqueeProps } from '../types/MarqueeProps';

/**
 * @description 本物のmarquee要素を使用します。なお、このコンポーネントは非推奨です。
 * @deprecated
 */
export const NativeMarquee = ({
  behavior = 'scroll',
  direction = 'left',
  loop = -1,
  scrollAmount = 6,
  scrollDelay = 85,
  className = '',
  style = {},
  children,
}: MarqueeProps) => {
  const props = {
    behavior,
    direction,
    loop,
    scrollamount: scrollAmount,
    scrolldelay: scrollDelay,
  };
  return (
    // @ts-ignore
    <marquee className={className} style={style} {...props}>
      {children}
      {/* @ts-ignore */}
    </marquee>
  );
};

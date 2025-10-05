import type { MarqueeProps } from '../types/MarqueeProps';

export const getAnimations = ({
  scrollAmount,
  scrollDelay,
  loop,
}: Pick<
  MarqueeProps,
  'scrollAmount' | 'scrollDelay' | 'loop'
>): React.CSSProperties => {
  // scrolldelayの最小値は60ms
  const actualScrollDelay = Math.max(60, scrollDelay ?? 0);

  // animation-durationを計算
  // 基準: scrollamount=6, scrolldelay=85 の時の速度を1とする
  // duration = (基準duration) × (基準scrolldelay / scrolldelay) × (scrollamount / 基準scrollamount)
  const baseDuration = 10000; // 10秒（基準値）
  const duration =
    (baseDuration * 85 * (scrollAmount ?? 0)) / (actualScrollDelay * 6);

  // animation-iteration-countを設定
  const iterationCount = loop === -1 ? 'infinite' : loop;

  return {
    animationDuration: `${duration}ms`,
    animationIterationCount: iterationCount,
  };
};

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
  // duration = (基準duration) × (scrolldelay / 基準scrolldelay) × (基準scrollamount / scrollamount)
  const baseDuration = 10000; // 10秒（基準値）
  const duration =
    (baseDuration * actualScrollDelay * 6) / (85 * (scrollAmount ?? 6));

  // animation-iteration-countを設定
  const iterationCount = loop === -1 ? 'infinite' : loop;

  return {
    animationDuration: `${duration}ms`,
    animationIterationCount: iterationCount,
  };
};

import { getAnimations } from '../logics/getAnimations';
import type { MarqueeProps } from '../types/MarqueeProps';
import '../styles/container.css';
import '../styles/content.css';
import '../styles/behavior-slide.css';
import '../styles/behavior-scroll.css';
import '../styles/behavior-alternate.css';

/**
 * @description 再現したmarquee要素を使用します。
 */
export const ResurrectedMarquee = ({
  behavior = 'scroll',
  direction = 'left',
  loop = -1,
  scrollAmount = 6,
  scrollDelay = 85,
  className = '',
  style = {},
  isStopAnimation = false,
  children,
}: MarqueeProps) => {
  const containerClassName = `marquee-container ${className}`.trim();
  const marqueeClassName = `marquee-content marquee-${behavior}-${direction}`;
  const marqueeStyle = getAnimations({
    scrollAmount,
    scrollDelay,
    loop,
    isStopAnimation,
  });
  return (
    <div className={containerClassName} style={style}>
      <div className={marqueeClassName} style={marqueeStyle}>
        {children}
      </div>
    </div>
  );
};

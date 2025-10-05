import './styles/container.css';
import './styles/behavior-slide.css';
import './styles/behavior-scroll.css';
import './styles/behavior-alternate.css';
import type { MarqueeProps } from './types/MarqueeProps';
import { getAnimations } from './logics/getAnimations';

export const Marquee = ({
  behavior = 'scroll',
  direction = 'left',
  loop = -1,
  scrollAmount: scrollamount = 6,
  scrollDelay: scrolldelay = 85,
  className = '',
  style = {},
  children,
}: MarqueeProps) => {
  const containerClassName = `marquee-container ${className}`.trim();
  const marqueeClassName = `marquee-${behavior}-${direction}`;
  const marqueeStyle = getAnimations({
    scrollAmount: scrollamount,
    scrollDelay: scrolldelay,
    loop,
  });
  return (
    <div className={containerClassName} style={style}>
      <div className={marqueeClassName} style={marqueeStyle}>
        {children}
      </div>
    </div>
  );
};

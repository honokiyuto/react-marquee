import './styles/container.css';
import './styles/behavior-slide.css';
import './styles/behavior-scroll.css';
import './styles/behavior-alternate.css';
import type { MarqueeProps } from './types/MarqueeProps';

export const Marquee = ({
  behavior = 'scroll',
  direction = 'left',
  loop = -1,
  scrollamount = 6,
  scrolldelay = 85,
  className = '',
  style = {},
  children,
}: MarqueeProps) => {
  const containerClassName = `marquee-container ${className}`.trim();
  const marqueeClassName = `marquee-${behavior}-${direction}`;
  return (
    <div className={containerClassName} style={style}>
      <div className={marqueeClassName}>{children}</div>
    </div>
  );
};

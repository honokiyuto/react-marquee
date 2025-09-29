import './styles/container.css';
import './styles/behavior-slide.css';
import './styles/behavior-scroll.css';
import './styles/behavior-alternate.css';
import type { MarqueeProps } from './types/MarqueeProps';

export const Marquee = ({
  behavor = 'slide',
  direction = 'left',
  children,
}: MarqueeProps) => {
  const className = `marquee-${behavor}-${direction}`;
  return (
    <div className="marquee-container">
      <div className={className}>{children}</div>
    </div>
  );
};

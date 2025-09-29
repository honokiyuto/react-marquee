import './index.css';
import type { MarqueeProps } from './MarqueeProps';

export const Marquee = ({
  behavor = 'scroll',
  bgcolor = 'transparent',
  direction = 'left',
  height,
  hspace,
  loop = -1,
  scrollamount = 6,
  scrolldelay = 85,
  truespeed = false,
  vspace,
  width,
  children,
}: MarqueeProps) => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">{children}</div>
    </div>
  );
};

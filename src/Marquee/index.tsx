import type { MarqueeProps } from './types/MarqueeProps';
import { NativeMarquee } from './components/NativeMarquee';
import { ResurrectedMarquee } from './components/ResurrectedMarquee';

export const Marquee = ({
  isNativeMarquee = false,
  ...props
}: MarqueeProps) => {
  // NativeMarqueeを使用する場合
  if (isNativeMarquee) {
    return <NativeMarquee {...props} />;
  }
  // 再現したmarquee要素を使用する場合
  return <ResurrectedMarquee {...props} />;
};

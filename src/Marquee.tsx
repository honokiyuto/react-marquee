import React, { type CSSProperties, useRef, useEffect, useState } from 'react';
import './Marquee.css';

export interface MarqueeProps {
  /** テキストのスクロール方法を指定 */
  behavior?: 'scroll' | 'slide' | 'alternate';
  /** 背景色を指定 */
  bgcolor?: string;
  /** テキストのスクロール方向を指定 */
  direction?: 'left' | 'right' | 'up' | 'down';
  /** スクロール範囲の高さを指定 */
  height?: string | number;
  /** 水平方向のマージンを指定 */
  hspace?: number;
  /** テキストのスクロール回数を指定 */
  loop?: number;
  /** インターバル内での、テキストの移動ピクセル数を指定 */
  scrollamount?: number;
  /** スクロール動作のインターバルをミリ秒で指定 */
  scrolldelay?: number;
  /** truespeedを指定すると、scrolldelayで60を下回る値が無視されません */
  truespeed?: boolean;
  /** 垂直方向のマージンを指定 */
  vspace?: number;
  /** スクロール範囲の幅を指定 */
  width?: string | number;
  /** 子要素 */
  children: React.ReactNode;
  /** 追加のCSSクラス */
  className?: string;
  /** 追加のスタイル */
  style?: CSSProperties;
}

const Marquee: React.FC<MarqueeProps> = ({
  behavior = 'scroll',
  bgcolor,
  direction = 'left',
  height,
  hspace = 0,
  loop = -1,
  scrollamount = 6,
  scrolldelay = 85,
  truespeed = false,
  vspace = 0,
  width,
  children,
  className = '',
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ containerWidth: 0, containerHeight: 0, contentWidth: 0, contentHeight: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current && contentRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const contentRect = contentRef.current.getBoundingClientRect();
        setDimensions({
          containerWidth: containerRect.width,
          containerHeight: containerRect.height,
          contentWidth: contentRect.width,
          contentHeight: contentRect.height,
        });
      }
    };

    // 複数回測定して正確な値を取得
    const timer1 = setTimeout(updateDimensions, 50);
    const timer2 = setTimeout(updateDimensions, 200);
    
    // リサイズイベント
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('resize', updateDimensions);
    };
  }, [children]);

  // スクロール遅延の計算（truespeedが指定されていない場合は60が最下限）
  const actualScrollDelay = truespeed ? scrolldelay : Math.max(scrolldelay, 60);
  
  // アニメーション継続時間の計算（距離に基づいて調整）
  let baseDuration = actualScrollDelay * 100 / scrollamount;
  
  // コンテンツサイズに基づく調整
  if (dimensions.contentWidth > 0 && (direction === 'left' || direction === 'right')) {
    const ratio = Math.max(1, dimensions.contentWidth / 200); // 基準幅200px
    baseDuration *= ratio;
  } else if (dimensions.contentHeight > 0 && (direction === 'up' || direction === 'down')) {
    const ratio = Math.max(1, dimensions.contentHeight / 50); // 基準高さ50px
    baseDuration *= ratio;
  }
  
  const animationDuration = `${baseDuration}ms`;
  
  // アニメーション反復回数の設定
  const animationIterationCount = loop === -1 ? 'infinite' : loop.toString();
  
  // CSSカスタムプロパティの設定
  const cssVariables: Record<string, string> = {
    '--marquee-duration': animationDuration,
    '--marquee-iteration-count': animationIterationCount,
  };
  
  // コンテナのスタイル
  const containerStyle: CSSProperties = {
    ...cssVariables,
    ...style,
    backgroundColor: bgcolor,
    height: typeof height === 'number' ? `${height}px` : height,
    width: typeof width === 'number' ? `${width}px` : width,
    marginLeft: hspace ? `${hspace}px` : undefined,
    marginRight: hspace ? `${hspace}px` : undefined,
    marginTop: vspace ? `${vspace}px` : undefined,
    marginBottom: vspace ? `${vspace}px` : undefined,
  };
  
  // アニメーションクラスの決定
  const animationClass = `marquee-${behavior}-${direction}`;
  
  return (
    <div
      ref={containerRef}
      className={`marquee-container ${animationClass} ${className}`}
      style={containerStyle}
    >
      <div ref={contentRef} className="marquee-content">
        {children}
      </div>
    </div>
  );
};

export default Marquee;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Marquee from './Marquee'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Marquee Demo</h1>
      
      {/* 基本的な左スクロール */}
      <div style={{ marginBottom: '20px' }}>
        <h3>基本的な左スクロール（デフォルト）</h3>
        <Marquee width="400px" style={{ border: '1px solid #ccc', padding: '10px' }}>
          This text will scroll from right to left
        </Marquee>
      </div>

      {/* 上方向スクロール */}
      <div style={{ marginBottom: '20px' }}>
        <h3>上方向スクロール</h3>
        <Marquee direction="up" height="100px" width="250px" style={{ border: '1px solid #ccc', padding: '10px' }}>
          This text will scroll from bottom to top
        </Marquee>
      </div>

      {/* バウンス（alternate）効果 */}
      <div style={{ marginBottom: '20px' }}>
        <h3>バウンス効果（alternate）</h3>
        <Marquee 
          direction="left" 
          width="250px" 
          height="200px" 
          behavior="alternate" 
          style={{ border: '2px solid #333' }}
        >
          <Marquee behavior="alternate" direction="up">
            This text will bounce
          </Marquee>
        </Marquee>
      </div>

      {/* 右方向スクロール */}
      <div style={{ marginBottom: '20px' }}>
        <h3>右方向スクロール</h3>
        <Marquee direction="right" width="300px" style={{ border: '1px solid #ccc', padding: '10px' }}>
          This text scrolls to the right
        </Marquee>
      </div>

      {/* スライド効果 */}
      <div style={{ marginBottom: '20px' }}>
        <h3>スライド効果</h3>
        <Marquee behavior="slide" direction="left" width="300px" loop={3} style={{ border: '1px solid #ccc', padding: '10px' }}>
          This text slides in from right (3 times only)
        </Marquee>
      </div>

      {/* 背景色とカスタマイズ */}
      <div style={{ marginBottom: '20px' }}>
        <h3>背景色とスピード調整</h3>
        <Marquee 
          bgcolor="#ff6b6b" 
          scrollamount={2} 
          scrolldelay={50} 
          width="350px" 
          style={{ padding: '15px', color: 'white', fontWeight: 'bold' }}
        >
          Slow scrolling with red background
        </Marquee>
      </div>

      {/* 高速スクロール */}
      <div style={{ marginBottom: '20px' }}>
        <h3>高速スクロール（truespeed使用）</h3>
        <Marquee 
          scrollamount={15} 
          scrolldelay={20} 
          truespeed={true}
          width="400px" 
          style={{ border: '1px solid #ccc', padding: '10px' }}
        >
          Fast scrolling text with truespeed enabled
        </Marquee>
      </div>

      {/* 垂直方向のalternate */}
      <div style={{ marginBottom: '20px' }}>
        <h3>垂直バウンス</h3>
        <Marquee 
          behavior="alternate" 
          direction="up" 
          height="150px" 
          width="200px" 
          style={{ border: '1px solid #ccc', padding: '10px' }}
        >
          Vertical bouncing text
        </Marquee>
      </div>

      {/* マージン設定 */}
      <div style={{ marginBottom: '20px' }}>
        <h3>マージン設定</h3>
        <Marquee 
          hspace={30} 
          vspace={20} 
          width="300px" 
          style={{ border: '1px solid #ccc', padding: '10px' }}
        >
          Text with horizontal and vertical margins
        </Marquee>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

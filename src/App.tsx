import './App.css';
import { Marquee } from './Marquee';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <Marquee
        behavior="alternate"
        direction="up"
        style={{ width: '400px', height: '300px', border: '1px solid #ccc' }}
      >
        <Marquee behavior="alternate" direction="right">
          DVD<br /> ◯
        </Marquee>
      </Marquee>
    </div>
  );
}

export default App;

import { Marquee } from './Marquee';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <Marquee
        behavior="alternate"
        direction="down"
        style={{ width: '400px', height: '300px', border: '1px solid #ccc' }}
      >
        <Marquee behavior="alternate" direction="right">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-dvd-icon-svg-download-png-282446.png?f=webp&w=90"
            alt="placeholder"
          />
        </Marquee>
      </Marquee>
    </div>
  );
}

export default App;

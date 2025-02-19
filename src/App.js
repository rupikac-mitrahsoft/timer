import logo from './logo.svg';
import './App.css';
import Hour from './Components/hour';
import Minute from './Components/minutes';
import Sec from './Components/sec';
import Timer from './Components/start';
function App() {
  return (
    <>
      {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <div style={{ display: 'grid', justifyContent: 'center' }}>
          <Hour />
        </div>
        <div style={{ display: 'grid', justifyContent: 'center' }}>
          <Minute />
        </div>
        <div style={{ display: 'grid', justifyContent: 'center' }}>
          <Sec />
        </div>
      </div> */}
      <div style={{ display: 'grid', justifyContent: 'center' }}>
        <Timer />
      </div>
    </>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import PieCharts from './PieCharts';

function App() {
  const [show, setShow] = useState(false);
  let val = show ? 'Hide Original' : 'Show Original';


  return (
    <div className="App">
      <h2>Chart</h2>
      <PieCharts></PieCharts>
      <button style={{ padding: '8px 15px', fontWeight: 'bolder', backgroundColor: 'cyan', color: 'black', fontSize: '15px', marginBottom: '20px' }} onClick={() => setShow(!show)}>{val}</button>
      <img src={require('../src/img/chart.png')} style={{ height: '900px', width: '900px', display: `${show ? 'block' : 'none'}` }} alt="" />
    </div>
  );
}

export default App;

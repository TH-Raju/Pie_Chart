import './App.css';
import PieCharts from './PieCharts';

function App() {
  return (
    <div className="App">
      <PieCharts></PieCharts>
      <img src={require('../src/img/chart.png')} style={{ height: '100%', width: '100%' }} alt="" />
    </div>
  );
}

export default App;

import './App.css';
import Accordion from './components/accordion/index';
import RandomColor from './components/randomcolor';

function App() {
  return (
    <div className="App">
      <RandomColor />
      <Accordion />
    </div>
  );
}

export default App;

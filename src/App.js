import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import Todos from './component/Todos';

function App() {
  return (
    <div className="App">
      <h1>Welcome to react-redux</h1>
      <Counter></Counter>
      <Todos></Todos>
    </div>
  );
}

export default App;

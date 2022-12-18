import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Hello</h4>
        <h4>World</h4>
        <h4>Javascript</h4>
        <p>abc</p>
        <p>def</p>
        <p>ghi</p>
        <p>hi 1</p>
        <p>hi 2</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

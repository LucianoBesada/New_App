import logo from './logo.svg';
import pair from './pair.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	<img src={pair} className="App-logo" alt="pair" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello there! How are you?
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

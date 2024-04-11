import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
        First Project Using Github Actions</h2>
        <p>
        <h3>Env: {process.env.REACT_APP_TEXT|| "No Env"}</h3>
          Hey I am doing Deployment using GitHub Actions
        </p>
       
      </header>
    </div>
  );
}

export default App;

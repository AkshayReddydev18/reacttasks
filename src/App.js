// import logo from './logo.svg';
import './App.css';
import './index.css';
import Cards from './table/home'
import Main from './cards/main'
import Todo from "./todo/index"
import Formsubmission from "./formsubmission"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Cards/>
      <Main/>
      <Todo/>
      <Formsubmission/>


    </div>
  );
}

export default App;

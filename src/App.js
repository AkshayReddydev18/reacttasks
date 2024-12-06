// import logo from './logo.svg';
import './App.css';
import './index.css';
import Cards from './table/home'
import Main from './cards/main'
import Todo from "./todo/index"
import Formsubmission from "./formsubmission"
import Productcards from "./productcards/"
import FuncLifeCycle from './uicomponent/lifecycle/index'

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
      <Productcards/>
      <Main/>
      <Todo/>
      <Formsubmission/>
      <FuncLifeCycle/>
      
      


    </div>
  );
}

export default App;

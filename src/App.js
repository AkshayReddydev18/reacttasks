// import logo from './logo.svg';
import './App.css';
import './index.css';
import Cards from './table/home'
import Main from './cards/main'
import Todo from "./todo/index"
import Formsubmission from "./formsubmission"
import Productcards from "./productcards/"
import FuncLifeCycle from './uicomponent/lifecycle/index'
import Counterfc from './6deccomponents/index'
import Calculator from './calculator/index'
import FormComp from './form7dec/index'
import EvenOddChecker from './evenodd/index'
import Accordion from './dec4cards/index'
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
      <FormComp/>
      
      
      <Cards/>
      <Productcards/>
      <Main/>
      <Todo/>
      <Formsubmission/>
      <FuncLifeCycle/>
      <Counterfc/>
      <Calculator/>
      <EvenOddChecker/>
      <Accordion/>
      
      


    </div>
  );
}

export default App;

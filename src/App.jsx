import "./App.css";
import "./index.css";
import { Link } from 'react-router-dom';
import Cards from "./table/home";
import Main from "./cards/main";
import Todo from "./todo/index";
import Formsubmission from "./formsubmission";
import Productcards from "./productcards";
import FuncLifeCycle from "./uicomponent/lifecycle/index";
import Counterfc from "./6deccomponents/index";
import Calculator from "./calculator/index";
import FormComp from "./form7dec/index";
import EvenOddChecker from "./evenodd/index";
import Accordionn from "./dec4cards/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movielist from './movies/movie_list'
function App() {
  return (
    <div className="App">
      <Router>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "",
            textDecoration:"none",
            height: "50px",
            fontSize: "20px",
          }}
        >
          <Link to="/task1">TASK1</Link>
          <Link to="/task2">TASK2</Link>
          <Link to="task3">TASK3</Link>
          <Link to="task4">TASK4</Link>
          <Link to="task5">TASK5</Link>
          <Link to="task6">TASK6</Link>
          <Link to="task7">TASK7</Link>
          <Link to="task8">TASK8</Link>
          <Link to="task9">TASK9</Link>
          <Link to="EvenOddChecker">EvenOddChecker</Link>
          <Link to="Accordionn">Accordionn</Link>
          <Link to="task12">Movielist</Link>
        </nav>
        <div >
          <Routes >
            <Route path="/task1" element={<FormComp />} />
            <Route path="/task2" element={<Cards />} />
            <Route path="/task3" element={<Productcards />} />
            <Route path="/task4" element={<Main />} />
            <Route path="/task5" element={<Todo />} />
            <Route path="/task6" element={<Formsubmission />} />
            <Route path="/task7" element={<FuncLifeCycle />} />
            <Route path="/task8" element={<Counterfc />} />
            <Route path="/task9" element={<Calculator />} />
            <Route path="/EvenOddChecker" element={<EvenOddChecker />} />
            <Route path="/Accordionn" element={<Accordionn />} />
            <Route path="/task12" element={<Movielist />} />
            
          </Routes>
        </div>
      </Router>

      {/* <FormComp/>
      <Cards/> 
      <Productcards/>
      <Main/>
      <Todo/>
      <Formsubmission/>
      <FuncLifeCycle/>
      <Counterfc/>
      <Calculator/>
      <EvenOddChecker/>
      <Accordionn/> */}
    </div>
  );
}

export default App;

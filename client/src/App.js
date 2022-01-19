import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/homepage";
import CounterApp1 from "./components/reduxDemon/reduxDemon";
import CounterApp2 from "./components/reduxPersist/reduxPersist";
import SalaryCalculator1 from "./components/sagaEx1/sagaEx1";
import SalaryCalculator2 from "./components/sagaEx2/sagaEx2";
import CounterAPP3 from "./components/namespaceDemon/namespaceDemon";
import ShowData from "./components/sagasDemon/sagasDemon";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/redux-demonstration" element={<CounterApp1 />} />
        <Route exact path="/saga-demonstration" element={<ShowData />} />
        <Route exact path="/sagaEx1" element={<SalaryCalculator1 />} />
        <Route exact path="/sagaEx2" element={<SalaryCalculator2 />} />
        <Route exact path="/redux-persist" element={<CounterApp2 />} />
        <Route exact path="/namespace" element={<CounterAPP3 />} />
      </Routes>
    </div>
  );
}

export default App;

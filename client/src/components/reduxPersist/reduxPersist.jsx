import React from "react";
import CounterApp1 from "../reduxDemon/reduxDemon";
import CounterPersistApp1 from "../reduxDemon/reduxPersistDemon";
import "./reduxPersist.css"

const CounterApp2 = () => {
  return (
    <div className="app-body">
      <div>
        <h5>Uses Normal Reducer</h5>
        <CounterApp1 />
      </div>
      <div>
        <h5>Uses Persisted Reducer</h5>
        <CounterPersistApp1 />
      </div>
    </div>
  );
};

export default CounterApp2;

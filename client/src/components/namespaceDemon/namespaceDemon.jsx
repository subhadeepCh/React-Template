import React from "react";
import LeftCounter from "../reduxDemon/leftCounter";
import RightCounter from "../reduxDemon/rightCounter";

const CounterAPP3 = () => {
  return (
    <div className="app-body">
      <div>
        <h5>Left Counter</h5>
        <LeftCounter />
      </div>
      <div>
        <h5>Right Counter</h5>
        <RightCounter />
      </div>
    </div>
  );
};

export default CounterAPP3;

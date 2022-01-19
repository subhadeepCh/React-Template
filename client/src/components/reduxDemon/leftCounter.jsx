import React from "react";
import "./reduxDemon.css";
import { useSelector, useDispatch } from "react-redux";
import { plus, minus, zero } from "../../redux/actions/counter.action";

const LeftCounter = () => {
  const { string, value } = useSelector((state) => ({
    string: state.specialCounter.leftCounter.key,
    value: state.specialCounter.leftCounter.count,
  }));

  const dispatch = useDispatch();

  const incrementHandler = () => dispatch(plus("LEFT_COUNTER"));
  const decrementHandler = () => dispatch(minus("LEFT_COUNTER"));
  const resettHandler = () => dispatch(zero("LEFT_COUNTER"));

  return (
    <div className="root">
      <div className="counter-body">
        <div className="screen">
          <h1>
            {string}
            {value}
          </h1>
        </div>
        <button
          style={{ width: "80%" }}
          className="btn btn-outline-danger"
          onClick={decrementHandler}
        >
          Decrement
        </button>
        <button
          style={{ width: "80%" }}
          className="btn btn-outline-primary"
          onClick={incrementHandler}
        >
          Increment
        </button>
        <button
          style={{ width: "80%" }}
          className="btn btn-dark"
          onClick={resettHandler}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default LeftCounter;

import React from "react";
import "./reduxDemon.css";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementPersist,
  decrementPersist,
  resetPersist,
} from "../../redux/actions/counter.action";

const CounterPersistApp1 = () => {
  const { string, value } = useSelector((state) => ({
    string: state.persistCounter.key,
    value: state.persistCounter.count,
  }));

  const dispatch = useDispatch();

  const incrementHandler = () => dispatch(incrementPersist());
  const decrementHandler = () => dispatch(decrementPersist());
  const resettHandler = () => dispatch(resetPersist());

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

export default CounterPersistApp1;

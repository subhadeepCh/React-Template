import React from "react";
import "./reduxDemon.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "../../redux/actions/counter.action";

const CounterApp1 = () => {
  const { string, value } = useSelector((state) => ({
    string: state.counter.key,
    value: state.counter.count,
  }));

  const dispatch = useDispatch();

  const incrementHandler = () => dispatch(increment());
  const decrementHandler = () => dispatch(decrement());
  const resettHandler = () => dispatch(reset());

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

export default CounterApp1;

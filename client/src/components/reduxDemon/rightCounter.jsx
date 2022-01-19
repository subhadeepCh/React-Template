import React from "react";
import "./reduxDemon.css";
import { useSelector, useDispatch } from "react-redux";
import { plus, minus, zero } from "../../redux/actions/counter.action";

const RightCounter = () => {
  const { string, value } = useSelector((state) => ({
    string: state.specialCounter.rightCounter.key,
    value: state.specialCounter.rightCounter.count,
  }));

  const dispatch = useDispatch();

  const incrementHandler = () => dispatch(plus("RIGHT_COUNTER"));
  const decrementHandler = () => dispatch(minus("RIGHT_COUNTER"));
  const resettHandler = () => dispatch(zero("RIGHT_COUNTER"));

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

export default RightCounter;

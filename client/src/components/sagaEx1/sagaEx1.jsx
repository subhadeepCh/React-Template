import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  calculateAmount,
  sendAmount,
} from "../../redux/actions/lossofPayAction";

const SalaryCalculator1 = () => {
  const { loading, currentAmt, calculatedAmt, sentAmt } = useSelector(
    (state) => ({
      loading: state.lop1.loading,
      currentAmt: state.lop1.currentAmt,
      calculatedAmt: state.lop1.calculatedAmt,
      sentAmt: state.lop1.sentAmt,
    })
  );

  const dispatch = useDispatch();

  const [inputField, setInputField] = React.useState("");

  const inputFieldHandler = (event) => {
    setInputField(event.target.value);
  };

  const clickButtonHandler = () => {
    dispatch(calculateAmount(inputField));
    dispatch(sendAmount(calculatedAmt + currentAmt));
  };

  return (
    <div className="root">
      <div>
        <h5>Enter Loss of pay (in Days)</h5>
        <input onChange={(e) => inputFieldHandler(e)} />
      </div>
      <h6 style={{ color: "red" }}>1 Day pay = $483</h6>
      <button className="btn btn-primary" onClick={clickButtonHandler}>
        Calculate and Send Payment
      </button>
      <h6 style={{ color: "green" }}>Current Amt: ${currentAmt}</h6>
      {loading ? (
        <h6 style={{ color: "blue" }}>Calculating...</h6>
      ) : (
        <h6 style={{ color: "blue" }}>Final Amt Sent: ${sentAmt}</h6>
      )}
    </div>
  );
};

export default SalaryCalculator1;

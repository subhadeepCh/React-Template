import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateAmount2 } from "../../redux/actions/lossofPayAction";

const SalaryCalculator2 = () => {
  const { loading, currentAmt, sentAmt } = useSelector((state) => ({
    loading: state.lop2.loading,
    currentAmt: state.lop2.currentAmt,
    calculatedAmt: state.lop2.calculatedAmt,
    sentAmt: state.lop2.sentAmt,
  }));

  const dispatch = useDispatch();

  const [inputField, setInputField] = React.useState("");

  const inputFieldHandler = (event) => {
    setInputField(event.target.value);
  };

  const clickButtonHandler = () => {
    dispatch(calculateAmount2(inputField));
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

export default SalaryCalculator2;

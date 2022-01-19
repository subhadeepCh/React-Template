import React from "react";
import { fetchData, resetData } from "../../redux/actions/data.action";
import { useSelector, useDispatch } from "react-redux";

const ShowData = () => {
  const { loading, data } = useSelector((state) => ({
    loading: state.data.loading,
    data: state.data.data,
  }));

  const dispatch = useDispatch();

  const fetchDataHandler = () => dispatch(fetchData());
  const resetHandler = () => dispatch(resetData());

  return (
    <div className="root">
      {loading ? <h1>Loading ....</h1> : data ? <h1>{data}</h1> : null}
      <button onClick={fetchDataHandler}>Get Data</button>
      <button onClick={resetHandler}>Reset Data</button>
    </div>
  );
};

export default ShowData;

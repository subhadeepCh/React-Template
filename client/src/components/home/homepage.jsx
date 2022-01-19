import React from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const reduxHandler = () => navigate("/redux-demonstration");
  const sagaHandler = () => navigate("/saga-demonstration");
  const saga1Handler = () => navigate("/sagaEx1");
  const saga2Handler = () => navigate("/sagaEx2");
  const reduxPersistHandler = () => navigate("/redux-persist");
  const namespaceHandler = () => navigate("/namespace");

  return (
    <div className="root">
      <button className="btn btn-outline-dark" onClick={reduxHandler}>
        Redux Demonstration
      </button>
      <button className="btn btn-outline-dark" onClick={sagaHandler}>Sagas Demonstration</button>
      <div>
        <button className="btn btn-outline-dark" style={{ width: "9.5rem" }} onClick={saga1Handler}>
          Sagas Ex 1
        </button>
        <button className="btn btn-outline-dark" style={{ width: "9.5rem" }} onClick={saga2Handler}>
          Sagas Ex 2
        </button>
      </div>
      <button className="btn btn-outline-dark" onClick={reduxPersistHandler}>
        Redux-Persist Demonstration
      </button>
      <button className="btn btn-outline-dark" onClick={namespaceHandler}>Namespace Demonstration</button>
    </div>
  );
};

export default HomePage;

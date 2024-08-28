import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./State/index";

const Amount = () => {
  const amounts = useSelector((state) => state.amounts);
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div className="my-3">
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          withdrawMoney(100);
        }}
      >
        {" "}
        -{" "}
      </button>
      Update Amount (Rs: {amounts})
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          depositMoney(50);
        }}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default Amount;

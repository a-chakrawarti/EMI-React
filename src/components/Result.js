import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Table } from "./Table";

const Result = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const toggleTable = () => {
    setToggle(!toggle);
  };

  const {
    principalAmount,
    rateOfInterest,
    timePeriod,
    timeUnit,
  } = location.state;

  const calculateEMI = () => {
    let tenure = 0;
    if (timeUnit === "days") {
      tenure = timePeriod / 30;
    } else if (timeUnit === "months") {
      tenure = timePeriod;
    } else {
      tenure = timePeriod * 12;
    }

    let interest = principalAmount * (rateOfInterest / 100);

    let interestFull = (interest * tenure) / 12;

    return [
      (Number(principalAmount) + Number(interestFull)) / tenure,
      interestFull,
      tenure,
    ];
  };

  const [EMI, interestFull, tenure] = calculateEMI();

  const tableData = {
    tenure,
    EMI,
    fullAmount: Number(principalAmount) + Number(interestFull),
  };

  console.log("Table Data", tableData);
  return (
    <div className="home">
      <div className="result-card">
        <table>
          <tbody>
            <tr>
              <th>EMI / month</th>
            </tr>
            <tr>
              <td id="emi-month">₹{EMI.toFixed(2)}</td>
            </tr>
            <tr>
              <th id="with-interest">Total Amount with Interest</th>
            </tr>
            <tr>
              <td>₹{(Number(principalAmount) + interestFull).toFixed(2)}</td>
            </tr>
            <tr>
              <th>Loan Amount</th>
              <th>Tenure</th>
            </tr>
            <tr>
              <td>₹{Number(principalAmount)}</td>
              <td>
                {timePeriod} {timeUnit}
              </td>
            </tr>
            <tr>
              <th>Interest Rate</th>
              <th>EMI Type</th>
            </tr>
            <tr>
              <td>{rateOfInterest}%</td>
              <td>Flat-Rate</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        onClick={toggleTable}
        className={toggle ? "toggle-table-up" : "toggle-table-down"}
      ></div>
      {toggle ? <Table tableData={tableData} /> : null}
    </div>
  );
};

export default Result;

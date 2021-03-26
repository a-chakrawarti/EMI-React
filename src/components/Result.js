import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  console.log(location);

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
    console.log("Loan Amount: ", principalAmount);
    console.log("Tenure in months: ", tenure);

    let interest = principalAmount * (rateOfInterest / 100);

    console.log("Interest/Annum: ", interest);

    let interestFull = (interest * tenure) / 12;
    console.log("Interest to pay through-out the tenure: ", interestFull);

    return [
      (Number(principalAmount) +
        (Number(principalAmount) * (rateOfInterest / 100) * tenure) / 12) /
        tenure,
      interestFull,
    ];
  };

  const [EMI, interestFull] = calculateEMI();
  return (
    <div className="home">
      <div className="result-card">
        <table>
          <tbody>
            <tr>
              <th>EMI / month</th>
            </tr>
            <tr>
              <td id="emi-month">₹{EMI.toFixed(3)}</td>
            </tr>
            <tr>
              <th id="with-interest">Total Amount with Interest</th>
            </tr>
            <tr>
              <td>₹{(Number(principalAmount) + interestFull).toFixed(3)}</td>
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
    </div>
  );
};

export default Result;

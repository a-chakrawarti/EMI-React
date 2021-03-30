import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

import Form from "./Form";

const Home = () => {
  const initialValue = {
    principalAmount: "",
    rateOfInterest: "",
    timePeriod: "",
    timeUnit: "days",
    errorMessage: "",
  };

  const [data, setData] = useState(initialValue);
  const [goToResult, setGoToResult] = useState(false);
  const history = useHistory();

  const handleValueChange = (event) => {
    const { id, value } = event.target;

    let newValue = {
      ...data,
      [id]: value,
    };

    setData(newValue);
  };

  const validate = () => {
    let newValue = {
      ...data,
      errorMessage: "",
    };
    if (
      Number(data.principalAmount) <= 0 ||
      Number(data.rateOfInterest) <= 0 ||
      Number(data.timePeriod) <= 0
    ) {
      newValue = {
        ...data,
        errorMessage: "Value cannot be zero or negative",
      };

      setData(newValue);
      setGoToResult(false);
    } else {
      setData(newValue);
      setGoToResult(true);
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    validate();
  };

  return (
    <div className="home">
      <div className="flex-container">
        <div className="emi-info">
          <h3>Equated Monthly Installment (EMI)</h3>
          <p>
            An equated monthly installment (EMI) is a fixed payment amount made
            by a borrower to a lender at a specified date each calendar month.
            Equated monthly installments are used to pay off both interest and
            principal each month so that over a specified number of years, the
            loan is paid off in full. With most common types of loans—such as
            real estate mortgages, auto loans, and student loans — the borrower
            makes fixed periodic payments to the lender over the course of
            several years with the goal of retiring the loan.
          </p>
        </div>
        <Form
          data={data}
          handleOnSubmit={handleOnSubmit}
          handleValueChange={handleValueChange}
        />
      </div>
      {goToResult ? history.push("/result", data) : null}
      {/* {goToResult ? (
        <Redirect
          to={{
            pathname: "/result",
            state: data,
          }}
        />
      ) : null} */}
    </div>
  );
};

export default Home;

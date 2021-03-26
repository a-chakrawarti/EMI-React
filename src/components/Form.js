import React from "react";
// import { Link } from "react-router-dom";

const Form = (props) => {
  const { data, handleOnSubmit, handleValueChange } = props;
  const {
    principalAmount,
    rateOfInterest,
    timePeriod,
    timeUnit,
    errorMessage,
  } = data;

  return (
    <div className="form-wrapper">
      <form onSubmit={handleOnSubmit}>
        <div className="form-item">
          <input
            type="number"
            id="principalAmount"
            value={principalAmount}
            onChange={handleValueChange}
            placeholder=" "
            required="required"
          />
          <label htmlFor="principalAmount">Principal Amount</label>
        </div>
        <div className="form-item">
          <input
            type="number"
            id="rateOfInterest"
            value={rateOfInterest}
            onChange={handleValueChange}
            placeholder=" "
            required="required"
          />
          <label htmlFor="rateOfInterest">Rate of Interest (in %)</label>
        </div>
        <div className="form-item">
          <input
            type="number"
            id="timePeriod"
            value={timePeriod}
            onChange={handleValueChange}
            placeholder=" "
            required="required"
          />
          <label htmlFor="timePeriod">Time Period</label>
          <select id="timeUnit" value={timeUnit} onChange={handleValueChange}>
            <option name="days">days</option>
            <option name="months">months</option>
            <option name="years">years</option>
          </select>
        </div>
        {/* <div className="form-item">
          <div className="month-select">
            <input type="month" id="monthStartSelect"></input>
            <label htmlFor="monthStartSelect">Month Start:</label>
            <input type="month" id="monthEndSelect"></input>
            <label htmlFor="monthEndSelect">Month End:</label>
          </div>
        </div> */}

        <div className="form-item">
          {/* <Link
            to={{
              pathname: "/result",
              state: data,
            }}
          >
            ;<button type="submit">Calculate</button>
          </Link> */}
          <button type="submit">Calculate</button>
        </div>
        <div className="form-item error">{errorMessage}</div>
      </form>
    </div>
  );
};

export default Form;

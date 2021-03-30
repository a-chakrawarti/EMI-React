import React from "react";

export const Table = (props) => {
  const { tenure, fullAmount, EMI } = props.tableData;
  //   const date = new Date();
  //   const currentMonth = date.getMonth();
  //   console.log("Tenure", tenure);
  //   console.log("Principal Amount", principalAmount);
  //   console.log("EMI", EMI);

  const getTableData = () => {
    const format = { month: "short", year: "numeric" };
    let balance = fullAmount;
    let emiValue = EMI;
    const data = [];
    {
      let date = new Date();
      for (let i = 0; i < tenure; i++) {
        const count = 1;
        const monthStart = date.getMonth();
        const nextMonth = date.setMonth(monthStart + count, 1);
        date = new Date(nextMonth);
        // console.log(date.toLocaleString("default", format));

        if (balance < EMI) {
          emiValue = balance;
        }
        balance -= EMI;
        let value = {
          installment: i + 1,
          month: date.toLocaleString("default", format),
          balance: balance,
          emi: emiValue,
        };
        data.push(value);
      }
    }
    return data;
  };

  const populateTable = () => {
    const data = getTableData();
    console.log(data);
    return (
      <>
        {data.map((item, index) => {
          return <ObjectRow key={index} value={item} />;
        })}
      </>
    );
  };

  const ObjectRow = (props) => {
    let { installment, month, balance, emi } = props.value;
    if (balance < 0) {
      balance = 0;
    }

    return (
      <tr>
        <td>{installment}</td>
        <td>₹{emi.toFixed(2)}</td>
        <td>{month}</td>
        <td>₹{balance.toFixed(2)}</td>
      </tr>
    );
  };

  return (
    <div className="breakup">
      <table>
        <thead>
          <tr>
            <th># Installment</th>
            <th>EMI</th>
            <th>Month</th>
            <th>After EMI</th>
          </tr>
        </thead>
        <tbody>{populateTable()}</tbody>
      </table>
    </div>
  );
};

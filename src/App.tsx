import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [income, setIncome] = useState({
    grossIncome: "0.00",
    tax: "0.00",
    splurge: "0.00",
    smile: "0.00",
    mojo: "0.00",
    everyday: "0.00",
    calculateTax: true,
  });
  const copyIcon = require("../src/assets/copy.png");

  const handleCheckboxChange = (event: any) => {
    const isChecked = event.target.checked;
    setIncome((prevIncome) => ({
      ...prevIncome,
      calculateTax: isChecked,
    }));
  };

  const handleChange = (event: any) => {
    const { value } = event.target;
    console.log(event.target.value.length + 1);
    if (!value) {
      event.target.style.width = "120px";
      return;
    }
    event.target.style.width = (event.target.value.length + 1) * 16 + "px";
    setIncome((prevIncome) => ({
      ...prevIncome,
      grossIncome: value,
    }));
  };

  useEffect(() => {
    let tax = 0;
    if (income.calculateTax) {
      tax = parseInt(income.grossIncome) * 0.25;
    }
    const netIncome = parseInt(income.grossIncome) - tax;
    const splurge = (netIncome * 0.1).toFixed(2);
    const smile = (netIncome * 0.1).toFixed(2);
    const mojo = (netIncome * 0.2).toFixed(2);
    const everyday = (netIncome * 0.6).toFixed(2);
    setIncome((prevIncome) => ({
      ...prevIncome,
      tax: tax.toFixed(2),
      splurge: splurge,
      smile: smile,
      mojo: mojo,
      everyday: everyday,
    }));
  }, [income.grossIncome, income.calculateTax]);

  return (
    <div className="app">
      <h1>Income Splitter</h1>
      <div id="accounts">
        <div className="account" id="gross-income">
          <h3>Gross Income</h3>
          <div className="result">
            <p>$</p>
            <input
              type="number"
              step="0.01"
              placeholder="1000.00"
              onChange={(event) => handleChange(event)}
            ></input>
          </div>
        </div>
        <div className={`account tax-enabled-${income.calculateTax}`} id="tax">
          <div id="tax-wrapper">
            <h3>Tax</h3>
            <label className="switch">
              <input
                type="checkbox"
                checked={income.calculateTax}
                onChange={(event) => {
                  handleCheckboxChange(event);
                }}
              />
              <span className="slider" />
            </label>
          </div>
          <div className="result">
            <p>${income.tax}</p>
            <button>
              <img src={copyIcon} alt="Copy paste icon." />
            </button>
          </div>
        </div>
        <div className="account" id="splurge">
          <h3>Splurge</h3>
          <div className="result">
            <p>${income.splurge}</p>
            <button>
              <img src={copyIcon} alt="Copy paste icon." />
            </button>
          </div>
        </div>
        <div className="account" id="smile">
          <h3>Smile</h3>
          <div className="result">
            <p>${income.smile}</p>
            <button>
              <img src={copyIcon} alt="Copy paste icon." />
            </button>
          </div>
        </div>
        <div className="account" id="mojo">
          <h3>Mojo</h3>
          <div className="result">
            <p>${income.mojo}</p>
            <button>
              <img src={copyIcon} alt="Copy paste icon." />
            </button>
          </div>
        </div>
        <div className="account" id="everyday">
          <h3>Everyday</h3>
          <div className="result">
            <p>${income.everyday}</p>
            <button>
              <img src={copyIcon} alt="Copy paste icon." />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

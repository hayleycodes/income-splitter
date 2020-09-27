import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [income, setIncome] = useState({
    totalIncome: "0.00",
    tax: "0.00",
    splurge: "0.00",
    smile: "0.00",
    mojo: "0.00",
    everyday: "0.00",
  });
  const copyIcon = require("../src/assets/copy.png");

  const handleChange = (event: any) => {
    const { value } = event.target;
    if (!value) {
      return;
    }
    setIncome((prevIncome) => ({
      ...prevIncome,
      totalIncome: value,
    }));
  };

  useEffect(() => {
    const tax = parseInt(income.totalIncome) * 0.25;
    const netIncome = parseInt(income.totalIncome) - tax;
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
  }, [income.totalIncome]);

  return (
    <div className="app">
      <h1>Income Splitter</h1>
      <input
        type="number"
        step="0.01"
        placeholder="1000.00"
        onChange={(event) => handleChange(event)}
        // onChange={(event) => setIncome(event.target.value)}
      ></input>
      <div className="account" id="splurge">
        <h3>Tax</h3>
        <div className="result">
          <p>{income.tax}</p>
          <button>
            <img src={copyIcon} />
          </button>
        </div>
      </div>
      <hr />
      <div className="account" id="splurge">
        <h3>Splurge</h3>
        <div className="result">
          <p>{income.splurge}</p>
          <button>
            <img src={copyIcon} />
          </button>
        </div>
      </div>
      <div className="account" id="smile">
        <h3>Smile</h3>
        <div className="result">
          <p>{income.smile}</p>
          <button>
            <img src={copyIcon} />
          </button>
        </div>
      </div>
      <div className="account" id="mojo">
        <h3>Mojo</h3>
        <div className="result">
          <p>{income.mojo}</p>
          <button>
            <img src={copyIcon} />
          </button>
        </div>
      </div>
      <div className="account" id="everyday">
        <h3>Everyday</h3>
        <div className="result">
          <p>{income.everyday}</p>
          <button>
            <img src={copyIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

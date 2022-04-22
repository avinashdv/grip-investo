import { useState } from "react";
import classes from "./Calculator.module.css";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [locationAvailable, setLocationAvailable] = useState(true);

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [userIp, setUserIp] = useState("0.0.0.0");

  const [amount, setAmount] = useState(0);
  const [term, setTerm] = useState(0);

  const [paymentEveryMonth, setPaymentEveryMonth] = useState(0);

  const [totalInterest, setTotalInterest] = useState(0);
  const interest = 10;

  const [loanSuccess, setLoanSuccess] = useState(false);

  const geoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocationAvailable(true);
        setLat(pos.coords.latitude);
        setLong(pos.coords.longitude);
        getIP();
        console.log(pos.coords.latitude, pos.coords.longitude);
      });
    } else {
      setLocationAvailable(false);
      console.log("Geo location not supported by this browser!!");
    }
  };

  const getIP = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        console.log(this.responseText.slice(7, this.responseText.length - 2));
        setUserIp(this.responseText.slice(7, this.responseText.length - 2));
      }
    };
    xhttp.open("GET", "//api.ipify.org?format=json", true);
    xhttp.send();
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const termChangeHandler = (e) => {
    setTerm(e.target.value);
  };

  const calculateData = () => {
    if (amount && term) {
      setPaymentEveryMonth(amount / interest);
      setTotalInterest((amount * interest * term) / 100 - amount);
    }
    console.log("calculation");
  };

  const grantLoan = () => {
    setLoanSuccess(true);
  };

  return (
    <div className={classes.calculator}>
      <h1 className={classes["calculator-Ip"]}>User IP: {userIp}</h1>
      {!locationAvailable && (
        <h2 className={classes["calculator-Ip"]}>Location Blocked !!</h2>
      )}
      <div className={classes["calculator-blockOne"]}>
        <button className={classes["calculator-btn"]} onClick={geoLocation}>
          Get Geo Location
        </button>

        <div className={classes["calculator-cords"]}>Latitude: {lat}</div>
        <div className={classes["calculator-cords"]}>Latitude: {long}</div>
      </div>

      <div className={classes["calculator-blockTwo"]}>
        <div className={classes["calculator-loanCalcy"]}>
          <h4>Loan Calculator</h4>
          <div className={classes["form-calc"]}>
            <label htmlFor="Amount">Loan Amount:</label>
            <br />
            <input
              type="number"
              className={classes["form-calcInput"]}
              required
              onChange={amountChangeHandler}
            />
          </div>

          <div className={classes["form-calc"]}>
            <label htmlFor="Amount">Loan Term:(In months)</label>
            <br />
            <input
              type="number"
              className={classes["form-calcInput"]}
              min="1"
              max="12"
              required
              onChange={termChangeHandler}
              //   step="1"
            />
          </div>

          <div className={classes["form-calc"]}>
            <p>Loan Percentage: 10%</p>
          </div>
          <button className={classes["calculator-btn"]} onClick={calculateData}>
            Calculate
          </button>
        </div>

        <div className={classes["calculator-loanApply"]}>
          <h4>Apply Loan</h4>
          <div className={classes["form-loan"]}>
            <input type="number" className={classes["form-calcInput"]} />
            <button
              className={classes["calculator-btn"]}
              style={{
                fontSize: "14px",
              }}
              onClick={grantLoan}
            >
              Take Loan
            </button>
          </div>
          {loanSuccess && (
            <p className={classes["form-loanSuccess"]}>
              Loan Successfully Granted!!
              <br />
              Go to{" "}
              <Link to="/dashboard" className={classes["form-loanSuccess"]}>
                Dashboard
              </Link>
            </p>
          )}
        </div>
      </div>

      <div className={classes["calculator-blockThree"]}>
        <h2>Results</h2>
        <div className={classes["calculator-results"]}>
          <div>
            Payment Every Month: <br />
            <p className={classes["calculator-op"]}>{paymentEveryMonth}</p>
          </div>
          <div>
            Total payments: <br />
            <p className={classes["calculator-op"]}>{term}</p>
          </div>
          <div>
            Total Interest: <br />
            <p className={classes["calculator-op"]}>{totalInterest}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

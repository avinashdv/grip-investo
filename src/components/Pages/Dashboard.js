import classes from "./Dashboard.module.css";
import { PieChart } from "react-minimal-pie-chart";
import { useState } from "react";

const Dashboard = () => {
  const [principalAmount, setPrincipalAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [totalAmountPayable, setTotalAmountPayable] = useState(0);

  return (
    <div className={classes.dashboardMain}>
      <div className={classes.dashboardBlockOne}>
        <h1 className={classes.head}>Dashboard</h1>
        <div className={classes.pieChart}>
          <PieChart
            style={{
              marginTop: "25px",
              height: "250px",
              width: "250px",
            }}
            data={[
              { title: "Loan", value: 100000, color: "#ffffff" },
              { title: "Interest", value: 20000, color: "#00b8b7" },
            ]}
          />

          <div className={classes.pieAbout}>
            <div>
              <span className={classes.pieOne}></span> Principal
            </div>
            <div>
              <span className={classes.pieTwo}></span> Interest
            </div>
          </div>
        </div>
        <div className={classes.body}>
          <p>Principal Amount: {principalAmount}</p>
          <p>Interest: {interest}</p>
          <p>Total Amount Payable: {totalAmountPayable}</p>
        </div>
      </div>
      <div className={classes.dashboardBlockTwo}>
        <div className={classes.wd}>
          <div>
            <input
              type="number"
              min="1000"
              max="10000"
              className={classes.dashboardInput}
            />
            <button className={classes.depositBtn}>Deposit</button>
          </div>
          <div>
            <input
              type="number"
              min="1000"
              max="10000"
              className={classes.dashboardInput}
            />
            <button className={classes.depositBtn}>Withdraw</button>
          </div>
        </div>
        <div className={classes.txns}>
          <h3>Transactions</h3>
          <table
            style={{
              width: "100%",
            }}
          >
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Credit</td>
                <td>10000</td>
                <td>22/11/22</td>
              </tr>
              <tr>
                <td>Debit</td>
                <td>10000</td>
                <td>22/11/22</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

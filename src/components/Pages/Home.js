import classes from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={classes.home}>
      <h1 className={classes["home-head"]}>
        Welcome to &nbsp;
        <img src="https://s3.ap-south-1.amazonaws.com/gripinvest.in/home-v2/logo-white.svg" />
        &nbsp; Investments
      </h1>
      <br />
      <Link to="/calculator" className={classes["home-button"]}>
        Login/SignUp
      </Link>
    </div>
  );
};

export default Home;

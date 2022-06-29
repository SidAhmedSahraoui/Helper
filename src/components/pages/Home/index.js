import React from "react";
import Helmet from "react-helmet";
import {
  faGraduationCap,
  faCoins,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { Card } from "@mui/material"
import useStyles from "./home-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Helper!</title>
      </Helmet>
      <div className={`${classes.page}`}>
        <h1 className="title text-center">Helper!</h1>
        <h5>
          {" "}
          Charity website for requesting and giving <span>help</span> for those
          who <span>need</span>.
        </h5>
        <h5>
          <span>Create account and start helping others or request aid</span>
        </h5>
        <h3>
          Our Services <span className="line"></span>
        </h3>
        <div className="services">
          <Card className="service">
            <div className="row">
              <FontAwesomeIcon className="icon" icon={faGraduationCap} />
              <h4>Educational Helps</h4>
            </div>
            <p>
              if you have some problems with maths, physics, science or any
              other topic! dont worry, just drop your help request and wait, for
              sure someone expert will contact you!
            </p>
          </Card>
          <Card className="service">
            <div className="row">
              <FontAwesomeIcon className="icon" icon={faCoins} />
              <h4>Financial Helps</h4>
            </div>
            <p>
              as a part of our humain role, we try to provide a efficiant
              communication tool between those who pass in a financial crise and
              aiders
            </p>
          </Card>
          <Card className="service">
            <div className="row">
              <FontAwesomeIcon className="icon" icon={faUserDoctor} />
              <h4>Medical Helps</h4>
            </div>
            <p>
              for those who need medical helps , drop your help request and wait
              for doctors or nurses to answer you
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;

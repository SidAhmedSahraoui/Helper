import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCoins,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { Card } from "@mui/material";
import { v4 as uuid } from "uuid";
import useStyles from "./home-jss";
import { connect } from "react-redux";

// Actions
import { getPosts } from "../../../redux/actions/postActions";

// Layouts
import NotFound from "../404";
import Spinner from "../../layouts/Spinner";
import Post from "../../layouts/PostCard";

// Images
import Characters from "../../../images/Characters.png";
import Social from "../../../images/social.svg";

const Home = (props) => {
  const { isAuthenticated, posts, loading, getPosts } = props;
  const classes = useStyles();
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Helmet>
        <title>Helper!</title>
      </Helmet>
      {isAuthenticated ? (
        <div className={`${classes.postsContainer}`}>
          <div className="posts">
            {loading ? (
              <Spinner />
            ) : posts === null || posts.length === 0 ? (
              <NotFound />
            ) : (
              posts.map((post) => (
                <Post
                  key={uuid()}
                  id={post._id}
                  title={post.title}
                  content={post.content}
                  category={post.category}
                  city={post.willaya}
                  className="post"
                />
              ))
            )}
          </div>
          <div className="ad">
            <img src={Social} alt="eid" />
            <div className="info">
              <h2>Contact us</h2>
              <p>
                {" "}
                <a
                  href="http://facebook.com/sidahmedsahraoui23"
                  target="new-tab">
                  <FontAwesomeIcon className="icon" icon={faFacebook} />
                </a>
                <a
                  href="http://linkedin.com/sid-ahmed-sahraoui"
                  target="new-tab">
                  <FontAwesomeIcon className="icon" icon={faLinkedin} />
                </a>
                <a
                  href="http://facebook.com/sid_ahmed_sahraoui"
                  target="new-tab">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
                <a
                  href="http://telegram.com/sidahmedsahraoui"
                  target="new-tab">
                  <FontAwesomeIcon className="icon" icon={faTelegram} />
                </a>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${classes.page}`}>
          <div className="row">
            <div className="col">
              <h1 className="title">Helper!</h1>

              <h5>
                <span>Charity website</span> for requesting and giving{" "}
                <span>help</span> for those who <span>need</span>.
              </h5>
            </div>
            <div className="col">
              <img src={Characters} alt="chars" />
            </div>
          </div>
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
                other topic! dont worry, just drop your help request and wait,
                for sure someone expert will contact you!
              </p>
            </Card>
            <Card className="service">
              <div className="row">
                <FontAwesomeIcon className="icon" icon={faCoins} />
                <h4>Financial Helps</h4>
              </div>
              <p>
                as a part of our humain role, we try to provide a efficiant
                communication tool between those who pass in a financial crise
                and aiders
              </p>
            </Card>
            <Card className="service">
              <div className="row">
                <FontAwesomeIcon className="icon" icon={faUserDoctor} />
                <h4>Medical Helps</h4>
              </div>
              <p>
                for those who need medical helps , drop your help request and
                wait for doctors or nurses to answer you
              </p>
            </Card>
          </div>
          <div className="ad">
            <img src={Social} alt="eid" />
            <div className="info">
              <h2>Contact us</h2>
              <p>
                {" "}
                <a
                  href="http://facebook.com/sidahmedsahraoui23"
                  target="new-tab">
                  <FontAwesomeIcon className="icon" icon={faFacebook} />
                </a>
                <a
                  href="http://linkedin.com/sid-ahmed-sahraoui"
                  target="new-tab">
                  <FontAwesomeIcon className="icon" icon={faLinkedin} />
                </a>
                <a
                  href="http://facebook.com/sid_ahmed_sahraoui"
                  target="new-tab">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
                <a
                  href="http://telegram.com/sidahmedsahraoui"
                  target="new-tab">
                  <FontAwesomeIcon className="icon" icon={faTelegram} />
                </a>
              </p>
              <form action="">
                <input type="text" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <textarea name="content" placeholder="Message..."></textarea>
                <input className="btn" type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  posts: state.post.posts,
  loading: state.post.loading,
});
export default connect(mapStateToProps, { getPosts })(Home);

import React, { useEffect } from "react";
import Helmet from "react-helmet";
import {
  faGraduationCap,
  faCoins,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { Card } from "@mui/material";
import { v4 as uuid } from "uuid";
import useStyles from "./home-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

// Actions
import { getPosts } from "../../../redux/actions/postActions";

// Layouts
import NotFound from "../404";
import Spinner from "../../layouts/Spinner";
import Post from "../../layouts/PostCard";

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
              />
            ))
          )}
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
            <div className="col"></div>
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

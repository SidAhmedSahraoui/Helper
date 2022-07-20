import React, { useEffect } from "react";
import { connect } from "react-redux";
import useStyles from "./messages-jss";
import { v4 as uuid } from "uuid";
import { Helmet } from "react-helmet";
// Actions
import { getMessages } from "../../../redux/actions/messageActions";

// Layouts
import MessageCard from "../../layouts/MessageCard";
import Spinner from "../../layouts/Spinner";
import NotFound from "../404";

const Messages = (props) => {
  const { messages, loading, getMessages } = props;

  const classes = useStyles();

  useEffect(() => {
    getMessages();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Helmet>
        <title>Helper | Messages</title>
      </Helmet>
      <div className={classes.messages}>
        {!loading ? (
          messages && messages.length !== 0 ? (
            messages.map((msg) => (
              <MessageCard
                key={uuid()}
                sender={msg.sender}
                post={msg.post}
                content={msg.content}
              />
            ))
          ) : (
            <NotFound />
          )
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  messages: state.message.messages,
  loading: state.message.loading,
});
export default connect(mapStateToProps, { getMessages })(Messages);

import React, { useState } from "react";
import useStyles from "./posts-jss";
import Post from "../../layouts/PostCard";
import { v4 as uuid } from "uuid"

const Posts = () => {
  // eslint-disable-next-line
  const [posts, setPosts] = useState([
    {
      id: "1",
      title: "eezc",
      content: "ev",
      category: "Medical",
      city: "eve",
      createdAt: "rfrf",
    },
    {
      id: "2",
      title: "eezc",
      content: "ev",
      category: "Medical",
      city: "eve",
      createdAt: "rfrf",
    },
    {
      id: "3",
      title: "eezc",
      content: "ev",
      category: "Education",
      city: "eve",
      createdAt: "rfrf",
    },
    {
      id: "4",
      title: "eezc",
      content: "ev",
      category: "eczec",
      city: "eve",
      createdAt: "rfrf",
    },
  ]);
  const classes = useStyles();

  return (
    <>
      <div className={classes.posts}>
        {posts.map((post) => (
          <Post
            key={uuid()}
            id={post.id}
            title={post.title}
            content={post.content}
            category={post.category}
            city={post.city}
            createdAt={post.createdAt}
          />
        ))}
      </div>
    </>
  );
};
export default Posts;

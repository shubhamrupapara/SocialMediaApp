import React, { useEffect } from "react";
import "./Posts.css";
import { useSelector, useDispatch } from "react-redux";
import Post from "../post/Post";
import { getTimelinePosts } from "../../actions/postAction";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.postReducer);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
  return (
    <div className="Posts">
      {loading
        ? "Fetching Posts..."
        : posts.map((post, id) => {
            return <Post data={post} id={id} />;
          })}
    </div>
  );
};

export default Posts;

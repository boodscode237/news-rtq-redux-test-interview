import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { Typography, CssBaseline } from "@mui/material";
import { selectPostById } from "./postsSlice";

const PostsExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));

  return (
    <article>
      <CssBaseline />
      <Typography variant="h5">{post.id}</Typography>
      <Typography variant="h4">{post.title}</Typography>
      <p className="excerpt">{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
        <Link to={`post/${post.id}`}>View Post</Link>
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;

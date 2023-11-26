import { useSelector } from "react-redux";
import { FixedSizeList as List } from "react-window";
import { selectPostIds } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";
import { useGetPostsQuery } from "./postsSlice";

const PostsList = () => {
  const { isLoading, isSuccess, isError, error } = useGetPostsQuery();
  //   const Row = ({ index, style }) => <div style={style}>{content}</div>;
  const orderedPostIds = useSelector(selectPostIds);

  //   let content = orderedPostIds.map((postId) => (
  //     <PostsExcerpt key={postId} postId={postId} />
  //   ));
  let content;
  if (isLoading) {
    content = <p>"Loading..."</p>;
  } else if (isSuccess) {
    content = orderedPostIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <section>
      {/* <List height={900} itemCount={100} itemSize={500} width={920}>
      {Row}
    </List> */}
      {content}
    </section>
  );
};
export default PostsList;

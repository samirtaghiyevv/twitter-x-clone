import PostList from "~/components/ui/PostList";
import { forYou } from "~/data/feed";

const ForYou = () => {
  return <PostList data={forYou} />;
};

export default ForYou;

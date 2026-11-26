import PostList from "~/components/ui/PostList";
import { forYou } from "~/data/feed";

const Following = () => {
  return <PostList data={forYou} />;
};

export default Following;

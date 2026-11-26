import { useState } from "react";
import Tab from "./Tab";
import NewPost from "./NewPost";
import ForYou from "./ForYou";
import Following from "./Following";

const Home = () => {
  const [activeTab, setActiveTab] = useState<string>("for_you");
  return (
    <div>
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
      <NewPost />
      {activeTab === "for_you" ? <ForYou /> : <Following />}
    </div>
  );
};

export default Home;

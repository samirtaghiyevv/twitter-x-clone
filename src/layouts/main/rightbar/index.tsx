import News from "./News";
import Recommended from "./Recommended";
import Search from "./Search";
import SubscribeCard from "./SubscribeCard";

const RightBar = () => {
  return (
    <div className="mr-2.5 flex-1 pt-1.75 pb-16 hidden lg:flex flex-col gap-3.5">
      <Search />
      <SubscribeCard />
      <News />
      <Recommended />
    </div>
  );
};

export default RightBar;

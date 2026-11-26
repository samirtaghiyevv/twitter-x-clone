import Icon from "~/components/icon";
import { tabs } from "~/constants/tabs";

const Tab = ({ activeTab, setActiveTab }: any) => {
  return (
    <div className="h-13.5 border-b border-[#2f3336] flex sticky top-0 bg-black/40 backdrop-blur-lg">
      <div className="flex h-full flex-1">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="w-full flex items-center justify-center hover:bg-white/5 transition-all duration-300 cursor-pointer"
          >
            <button
              onClick={() => setActiveTab(tab.value)}
              className={`relative flex items-center justify-center h-full cursor-pointer text-[15px] ${activeTab === tab.value ? "text-white font-bold" : "text-[#71767b]"}`}
            >
              {tab.title}
              {activeTab === tab.value && (
                <div className="absolute bottom-0 h-0.5 rounded-full bg-[#1d9bf0] w-full" />
              )}
            </button>
          </div>
        ))}
      </div>
      <button className="w-13.5 h-13.5 flex items-center justify-center hover:bg-white/5 transition-all duration-300 cursor-pointer text-[#71767b]">
        <Icon name="plus" size={16} />
      </button>
    </div>
  );
};

export default Tab;

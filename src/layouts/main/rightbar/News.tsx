import Icon from "~/components/icon";
import { news } from "~/data/news";

const News = () => {
  return (
    <div className="border border-[#2f3336] rounded-2xl pt-2">
      <h1 className="font-bold text-xl px-4">What's happening</h1>
      <div className="flex flex-col mt-2.5">
        {news.map((data) => (
          <div
            key={data.id}
            className="px-4 py-3 flex flex-col hover:bg-white/5 cursor-pointer transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <span className="text-[13px] leading-4 text-[#71767b]">
                {data.subtitle}
              </span>
              <div className="hover:text-[#1d9bf0] text-white/50 transition-all duration-300">
                <Icon name="dot" size={16} />
              </div>
            </div>
            <span className="font-bold">{data.title}</span>
          </div>
        ))}
        <div className="cursor-pointer text-[#1d9bf0] px-4 py-3 hover:bg-white/5 transition-all duration-300">
          Show more
        </div>
      </div>
    </div>
  );
};

export default News;

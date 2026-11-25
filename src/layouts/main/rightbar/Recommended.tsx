import Icon from "~/components/icon";
import { recommended } from "~/data/recommended";

const Recommended = () => {
  return (
    <div className="border border-[#2f3336] rounded-2xl pt-2">
      <h1 className="font-bold text-xl px-4">Who to follow</h1>
      <div className="flex flex-col mt-2.5">
        {recommended.map((item) => (
          <div
            key={item.id}
            className="px-4 py-3 flex items-center hover:bg-white/5 transition-all duration-300"
          >
            <div className="mr-2">
              <img
                src={item.avatar}
                className="w-10 h-10 object-cover rounded-full"
                alt="avatar"
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col leading-5">
                <span className="text-[15px] font-bold flex items-center gap-1">
                  {item.name}{" "}
                  {item.verify && (
                    <div className="text-[#1d9bf0]">
                      <Icon name="verify" size={16} />
                    </div>
                  )}
                </span>
                <span className="text-[#71767b]">@{item.username}</span>
              </div>
              <button
                className={`border px-4 h-8 rounded-full bg-white text-black font-medium cursor-pointer transition-all duration-300 hover:opacity-90`}
              >
                {item.isFollow ? "Unfollow" : "Follow"}
              </button>
            </div>
          </div>
        ))}
        <div className="cursor-pointer text-[#1d9bf0] px-4 py-3 hover:bg-white/5 transition-all duration-300">
          Show more
        </div>
      </div>
    </div>
  );
};

export default Recommended;

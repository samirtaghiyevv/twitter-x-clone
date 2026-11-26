import Icon from "~/components/icon";
import { icons } from "~/constants/icons";
import { user } from "~/data/user";

const NewPost = () => {
  const postActions: (keyof typeof icons)[] = [
    "photo",
    "gif",
    "quiz",
    "emoji",
    "calendar",
    "map",
    "flag",
  ];

  return (
    <div className="border-b border-[#2f3336] px-4.25 flex gap-2.5 h-30.25">
      <div className="pt-4">
        <img
          src={user.avatar}
          className="w-10 h-10 rounded-full object-cover"
          alt="avatar"
        />
      </div>
      <div className="pt-2 flex flex-col gap-3.25 w-full">
        <input
          type="text"
          className="outline-0 py-3 text-xl font-normal placeholder:text-[#71767b] w-full"
          placeholder="What's happening?"
        />
        <div className="flex items-center justify-between -ml-2 w-full">
          <div className="h-10 px-0.5 flex gap-1 w-full">
            {postActions.map((icon, index) => (
              <button
                key={index}
                className="w-9 h-9 flex items-center justify-center text-[#777e85]"
              >
                <Icon name={icon} size={23} />
              </button>
            ))}
          </div>
          <button
            disabled
            className="bg-white text-black border h-9 px-4 rounded-full font-bold -mr-2 mb-px disabled:bg-white/50"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;

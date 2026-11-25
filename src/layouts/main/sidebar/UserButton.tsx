import Icon from "~/components/icon";
import { user } from "~/data/user";

const UserButton = () => {
  return (
    <button className="my-3 p-3 flex items-center rounded-full hover:bg-white/5 transition-all duration-300 cursor-pointer">
      <img
        src={user.avatar}
        className="w-10 h-10 object-cover rounded-full"
        alt="avatar"
      />
      <div className="hidden xl:flex flex-col px-3 items-start leading-5 flex-1">
        <span className="font-bold text-[15px]">{user.name}</span>
        <span className="text-[#71767b] text-[15px]">@{user.username}</span>
      </div>
      <div className="hidden xl:flex">
        <Icon name="dot" size={19} />
      </div>
    </button>
  );
};

export default UserButton;

import Logo from "./Logo";
import Menu from "./Menu";
import UserButton from "./UserButton";
import Icon from "~/components/icon";

const SideBar = () => {
  return (
    <aside className="xl:w-68.75 px-2 flex flex-col justify-between max-h-screen overflow-auto sticky top-0">
      <div>
        <Logo />
        <Menu />
        <button className="mt-2.5 xl:px-8 h-13 w-13 font-bold text-[17px] bg-white transition-all duration-300 text-black rounded-full xl:w-58 cursor-pointer hover:opacity-90 flex items-center justify-center">
          <span className="hidden xl:inline">Post</span>
          <div className="xl:hidden">
            <Icon name="post" />
          </div>
        </button>
      </div>
      <UserButton />
    </aside>
  );
};

export default SideBar;

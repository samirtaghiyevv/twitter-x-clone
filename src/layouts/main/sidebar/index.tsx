import Button from "~/components/ui/Button";
import Logo from "./Logo";
import Menu from "./Menu";
import UserButton from "./UserButton";
import Icon from "~/components/icon";

const SideBar = () => {
  return (
    <aside className="xl:w-68.75 px-2 flex flex-col justify-between">
      <div>
        <Logo />
        <Menu />
        <Button>
          <>
            <span className="hidden xl:inline">Post</span>
            <div className="xl:hidden">
              <Icon name="post" />
            </div>
          </>
        </Button>
      </div>
      <UserButton />
    </aside>
  );
};

export default SideBar;

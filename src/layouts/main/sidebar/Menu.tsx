import { NavLink } from "react-router-dom";
import { menuItems } from "~/constants/menu-items";
import MoreButton from "./MoreButton";

const Menu = () => {
  return (
    <div className="my-1 flex flex-col">
      {menuItems.map((item) => (
        <NavLink key={item.id} to={item.path} className="group leading-6">
          {({ isActive }) => (
            <div className="p-3 flex items-center justify-center xl:justify-start group-hover:bg-white/5 transition-all duration-300 w-fit rounded-full">
              {isActive ? (
                <item.icon.active size={26} />
              ) : (
                <item.icon.default size={26} />
              )}
              <span
                className={`ml-5 xl:mr-4 text-xl leading-6 xl:inline hidden ${isActive ? "font-bold" : "font-normal"}`}
              >
                {item.title}
              </span>
            </div>
          )}
        </NavLink>
      ))}
      <MoreButton />
    </div>
  );
};

export default Menu;

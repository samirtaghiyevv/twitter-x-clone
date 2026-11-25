import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Icon from "~/components/icon";
import { moreItems } from "~/constants/more-items";

const MoreButton = () => {
  return (
    <Popover className="relative">
      <PopoverButton className="p-3 flex items-center hover:bg-white/5 transition-all duration-300 w-fit rounded-full outline-0">
        <Icon name="more" size={26} />
        <span className="ml-5 mr-4 text-xl leading-6 font-normal hidden xl:inline">
          More
        </span>
      </PopoverButton>
      <PopoverPanel className="flex flex-col w-79.5 absolute bottom-0 left-0 bg-[#141414] rounded-xl outline-0 scrollbar-none overflow-auto max-h-110">
        {moreItems.map((more) => (
          <button
            key={more.id}
            className="flex p-4 gap-6 transition-all duration-300 hover:bg-white/5 cursor-pointer"
          >
            <more.icon />
            <span className="text-xl font-bold">{more.title}</span>
          </button>
        ))}
      </PopoverPanel>
    </Popover>
  );
};

export default MoreButton;

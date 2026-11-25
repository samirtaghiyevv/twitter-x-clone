import Icon from "~/components/icon";

const Search = () => {
  return (
    <div className="sticky top-0 bg-black">
      <div className="flex items-center border border-[#333639] rounded-full text-[#71767b] w-full h-11 pl-3.25 focus-within:border-[#1d9bf0] focus-within:border-2 transition-all duration-300">
        <Icon name="search" size={16} />
        <input
          type="text"
          placeholder="Search"
          className="pl-1 pr-4 w-full outline-0 font-medium placeholder:text-[#71767b]"
        />
      </div>
    </div>
  );
};

export default Search;

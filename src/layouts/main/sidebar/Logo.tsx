import { Link } from "react-router-dom";
import Icon from "~/components/icon";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center justify-center w-13 h-13 my-0.5 transition-all duration-300 hover:bg-white/5 rounded-full"
    >
      <Icon name="logo" size={30} />
    </Link>
  );
};

export default Logo;

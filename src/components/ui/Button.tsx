import type { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button
      className={`my-1 xl:px-8 h-13 w-13 font-bold text-[17px] bg-white transition-all duration-300 text-black rounded-full xl:w-58 cursor-pointer hover:opacity-90 flex items-center justify-center`}
    >
      {children}
    </button>
  );
};

export default Button;

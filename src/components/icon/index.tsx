import type { FC } from "react";
import { icons } from "~/constants/icons";

interface IconProps {
  name: keyof typeof icons;
  size?: number;
}

const Icon: FC<IconProps> = ({ name, size = 24 }) => {
  const Component = icons[name];

  if (!Component) return null;

  return <Component size={size} />;
};

export default Icon;

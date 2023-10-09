import { icons } from "lucide-react";

type Props = {
  /**
   * Name of the icon, must match one of: https://lucide.dev/icons/
   *
   * Use the component name
   *
   * i.e. for the `arrow-down-z-a` icon use `name="ArrowDownZA"`
   */
  name: keyof typeof icons;
  /** Color of the icon, default currentColor */
  color?: string;
  /** Size of the icon, default is 24 */
  size?: number;
  /** strokeWidth, default is 2 */
  strokeWidth?: number;
  /** Default is false */
  absoluteStrokeWidth?: boolean;
};

/**
 * Wrapper around lucide-react icons component
 *
 * See: https://lucide.dev/guide/packages/lucide-react for more information
 */
const Icon = ({
  name,
  color,
  size,
  strokeWidth,
  absoluteStrokeWidth,
}: Props) => {
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      color={color}
      size={size}
      strokeWidth={strokeWidth}
      absoluteStrokeWidth={absoluteStrokeWidth}
    />
  );
};

export default Icon;

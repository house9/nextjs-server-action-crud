import { icons, LucideIcon as LucideIconType } from "lucide-react";

type Props = {
  /** Name of the icon, must match one of: https://lucide.dev/icons/ */
  name: string;
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
 * See: https://lucide.dev/guide/packages/lucide-react for more info
 *
 * TODO: error boundary for invalid icon name
 */
const Icon = ({
  name,
  color,
  size,
  strokeWidth,
  absoluteStrokeWidth,
}: Props) => {
  const LucideIcon = icons[name as keyof typeof icons] as LucideIconType;

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

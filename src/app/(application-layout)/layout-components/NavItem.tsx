import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";

const variants = cva(
  "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white",
  {
    variants: {
      kind: {
        default: "",
        active: "bg-gray-100",
      },
    },
    defaultVariants: {
      kind: "default",
    },
  }
);

type VarientType = VariantProps<typeof variants>;

interface NavItemProps extends VarientType {
  href: string;
  icon: React.ReactNode;
  title: string;
}

export const NavItem = ({ href, icon, title, kind }: NavItemProps) => {
  console.log(`   render: NavItem: ${title} - ${kind}`);

  return (
    <li>
      <Link href={href} className={variants({ kind })}>
        {icon}
        {title}
      </Link>
    </li>
  );
};

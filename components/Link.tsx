import NextLink, { LinkProps } from "next/link";
import type { AnchorHTMLAttributes } from "react";

type Props = LinkProps<typeof NextLink> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Wraps the next/link but sets prefetch to false
 */
export default function Link(props: Props) {
  return <NextLink prefetch={false} {...props} />;
}

// TODO: see https://blog.logrocket.com/dealing-links-next-js/
// may need to wrap in React.forwardRef

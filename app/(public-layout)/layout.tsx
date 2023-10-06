import type { Metadata } from "next";
import { getLogger } from "@/lib/logger";

export const metadata: Metadata = {
  title: "Public",
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const logger = getLogger({});
  logger.debug("render: app/(public-layout)/layout.tsx");

  return <body>{children}</body>;
}

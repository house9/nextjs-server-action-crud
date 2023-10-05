import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public",
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("  render: PublicLayout: app/(public-layout)/layout.tsx");

  return <body>{children}</body>;
}

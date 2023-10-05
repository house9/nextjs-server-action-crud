"use client";

import "./globals.css";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("  render: RootLayout: app/layout.tsx");

  useEffect(() => {
    require("preline");

    return () => {};
  }, []);

  return <html lang="en">{children}</html>;
}

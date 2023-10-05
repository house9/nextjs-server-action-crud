import type { Metadata } from "next";
import { Header } from "./layout-components/Header";
import { Sidebar } from "./layout-components/Sidebar";

export const metadata: Metadata = {
  title: "App",
};

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(
    "  render: ApplicationLayout: app/(application-layout)/layout.tsx"
  );

  return (
    <>
      <body className="bg-gray-50 dark:bg-slate-900">
        <Header />
        <Sidebar />
        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
          {children}
        </div>
      </body>
    </>
  );
}

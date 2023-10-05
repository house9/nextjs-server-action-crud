import Form from "../components/Form";
import { Metadata } from "next";
import { createBand } from "../server-actions";

export const metadata: Metadata = {
  title: "New Band",
  description: "Create new band record",
};

export default function BandNewPage() {
  console.log("  render: NewBand: app/(application-layout)/bands/new/page.tsx");

  return (
    <>
      <div className="flex items-center mb-6">
        <h1 className="text-3xl font-bold">New Band</h1>
      </div>

      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <Form action={createBand} />
          </div>
        </div>
      </div>
    </>
  );
}

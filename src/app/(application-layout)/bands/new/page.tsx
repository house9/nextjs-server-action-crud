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
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">New Band</h1>
      <Form action={createBand} />
    </div>
  );
}

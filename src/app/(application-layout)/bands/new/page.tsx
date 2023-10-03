import Form from "../components/Form";

export default function NewBand() {
  console.log("  render: NewBand: app/(application-layout)/bands/new/page.tsx");

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">New Band</h1>
      <Form />
    </div>
  );
}
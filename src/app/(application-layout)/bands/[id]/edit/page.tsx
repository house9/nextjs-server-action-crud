import Form from "../../components/Form";
import { getBand } from "../../data";
import { updateBand } from "../../server-actions";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({ params: { id } }: Props) => {
  const band = await getBand(id);

  return {
    title: `Edit Band: ${band.name}`,
  };
};

export default async function BandEditPage({ params: { id } }: Props) {
  console.log(
    `  render: EditBand: app/(application-layout)/bands/[id]/edit/page.tsx, ${id}`
  );

  const band = await getBand(id);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Edit Band</h1>
      <Form action={updateBand} band={band} />
    </div>
  );
}

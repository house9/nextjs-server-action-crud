import { getBand } from "../../data";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({ params: { id } }: Props) => {
  const band = await getBand(id);

  return {
    title: `Band: ${band.name}`,
  };
};

export default async function BandShowPage({ params: { id } }: Props) {
  console.log(
    `  render: EditBand: app/(application-layout)/bands/[id]/(show)/page.tsx, ${id}`
  );

  const band = await getBand(id);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Band</h1>
      <h2>{band.name}</h2>
    </div>
  );
}

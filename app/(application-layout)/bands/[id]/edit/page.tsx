import Form from "../../components/Form";
import { getBand } from "../../data";
import { updateBand } from "../../server-actions";
import { getLogger } from "@/lib/logger";

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
  const logger = getLogger({});
  logger.debug(
    `render: app/(application-layout)/bands/[id]/edit/page.tsx, ${id}`
  );

  const band = await getBand(id);

  return (
    <>
      <div className="flex items-center mb-6">
        <h1 className="text-3xl font-bold">Edit Band</h1>
      </div>

      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <Form action={updateBand} band={band} />
          </div>
        </div>
      </div>
    </>
  );
}

import Form from "../../components/Form";
import { getAlbum } from "../../data";
import { updateAlbum } from "../../server-actions";
import { getLogger } from "@/lib/logger";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({ params: { id } }: Props) => {
  const album = await getAlbum(id);

  return {
    title: `Edit Album: ${album.name}`,
  };
};

export default async function AlbumEditPage({ params: { id } }: Props) {
  const logger = getLogger({});
  logger.debug(
    `render: app/(application-layout)/albums/[id]/edit/page.tsx, ${id}`
  );

  const album = await getAlbum(id);

  return (
    <>
      <div className="flex items-center mb-6">
        <h1 className="text-3xl font-bold">Edit Album</h1>
      </div>

      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <Form action={updateAlbum} album={album} />
          </div>
        </div>
      </div>
    </>
  );
}

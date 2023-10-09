import Form from "../components/Form";
import { Metadata } from "next";
import { createAlbum } from "../server-actions";
import { getLogger } from "@/lib/logger";
import { getBands } from "../../bands/data";

export const metadata: Metadata = {
  title: "New Album",
  description: "Create new album",
};

export default async function AlbumNewPage() {
  const logger = getLogger({});
  logger.debug("render: app/(application-layout)/albums/new/page.tsx");

  const bands = await getBands();

  return (
    <>
      <div className="flex items-center mb-6">
        <h1 className="text-3xl font-bold">New Album</h1>
      </div>

      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <Form action={createAlbum} bands={bands} />
          </div>
        </div>
      </div>
    </>
  );
}

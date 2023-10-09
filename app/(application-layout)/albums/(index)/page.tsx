import Link from "@/components/Link";
import { Metadata } from "next";
import { AlbumWithCount, Row } from "./Row";
import { getAlbums } from "../data";
import { getLogger } from "@/lib/logger";

export const metadata: Metadata = {
  title: "Albums",
  description: "List of Albums",
};

export default async function AlbumIndexPage() {
  const logger = getLogger({});
  logger.debug("render: app/(application-layout)/albums/(index)/page.tsx");

  const albums = await getAlbums();

  return (
    <>
      <div className="flex items-center mb-6">
        <h1 className="text-2xl">Albums</h1>
        <div className="ml-auto">
          <Link
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            href="/albums/new"
          >
            New Album
          </Link>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Band
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Song Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Songs
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {albums.map((album: AlbumWithCount) => (
                    <Row key={album.id} album={album} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

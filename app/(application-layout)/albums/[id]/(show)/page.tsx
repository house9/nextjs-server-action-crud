import Link from "@/components/Link";
import { getAlbum } from "../../data";
import { getLogger } from "@/lib/logger";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({ params: { id } }: Props) => {
  const album = await getAlbum(id);

  return {
    title: `Album: ${album.name}`,
  };
};

export default async function AlbumShowPage({ params: { id } }: Props) {
  const logger = getLogger({});
  logger.debug(
    `render: app/(application-layout)/albums/[id]/(show)/page.tsx, ${id}`
  );

  const album = await getAlbum(id);

  return (
    <>
      <div className="flex items-center mb-6">
        <h1 className="text-3xl font-bold">Album Detail</h1>
      </div>

      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <h3 className="mb-2 text-xl font-bold">
              <Link href={`/bands/${album.band.id}`}>{album.band.name}</Link>:{" "}
              {album.name}
            </h3>

            <div className="m-1 p-4 bg-slate-200">
              {album.songs.length === 0 && <p>No songs</p>}
              {album.songs.map((song) => (
                <p key={song.id}>{song.name}</p>
              ))}
            </div>

            <ul>
              <li>Created At: {album.createdAt.toLocaleDateString()}</li>
              <li>Updated At: {album.updatedAt.toLocaleDateString()}</li>
            </ul>
            <div className="mt-2">
              <Link
                className="bg-blue-100 border border-transparent dark:focus:ring-offset-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold gap-2 hover:bg-blue-100 hover:text-white inline-flex items-center justify-center px-4 py-3 ring-offset-white rounded-md text-blue-500 text-sm transition-all"
                href="/albums"
              >
                Go Back
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2 px-4 py-3 ml-2 text-sm font-semibold text-blue-500 transition-all bg-blue-100 border border-transparent rounded-md hover:text-white hover:bg-blue-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                href={`/albums/${album.id}/edit`}
              >
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

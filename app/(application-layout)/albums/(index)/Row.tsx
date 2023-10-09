import { Album, Band } from "@prisma/client";
import Link from "@/components/Link";
import { DeleteButton } from "./DeleteButton";

export type AlbumWithCount = Album & { _count: { songs: number }; band: Band };

type Props = { album: AlbumWithCount };

export const Row = ({ album }: Props) => {
  // console.log("Album: app/(application-layout)/albums/(index)/Album.tsx", album);

  return (
    <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
        {album.band.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
        {album.name} ({album.id})
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {album._count.songs}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <DeleteButton album={album} />
        <Link
          className="ml-2 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-blue-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          href={`/albums/${album.id}/edit`}
        >
          Edit
        </Link>
        <Link
          className="ml-2 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-blue-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          href={`/albums/${album.id}`}
        >
          Show
        </Link>
      </td>
    </tr>
  );
};

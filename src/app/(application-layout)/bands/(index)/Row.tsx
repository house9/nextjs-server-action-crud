import { Band } from "@prisma/client";
import { deleteBand } from "../server-actions";
import SubmitButton from "@/app/form-components/SubmitButton";

type BandWithCount = Band & { _count: { albums: number } };

type Props = { band: BandWithCount };

export const Row = ({ band }: Props) => {
  // console.log("Band: app/(application-layout)/bands/(index)/Band.tsx", band);

  return (
    <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
        {band.name} ({band.id})
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {band._count.albums}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <form action={deleteBand}>
          <input type="hidden" name="id" value={band.id} />
          <SubmitButton name="Delete" kind="error" displayMessage={false} />
        </form>
      </td>
    </tr>
  );
};

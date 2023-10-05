import Link from "@/components/Link";
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
    <>
      <div className="flex items-center mb-6">
        <h1 className="text-3xl font-bold">Band Detail</h1>
        <p>{band.testingThings}</p>
      </div>

      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <h3 className="text-xl font-bold mb-2">{band.name}</h3>
            <ul>
              <li>Created At: {band.createdAt.toLocaleDateString()}</li>
              <li>Updated At: {band.updatedAt.toLocaleDateString()}</li>
            </ul>
            <div className="mt-2">
              <Link
                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-blue-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                href="/bands"
              >
                Go Back
              </Link>
              <Link
                className="ml-2 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-blue-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                href={`/bands/${band.id}/edit`}
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

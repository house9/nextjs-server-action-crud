import Link from "@/components/Link";
import { Metadata } from "next";
import { BandWithCount, Row } from "./Row";
import { getBands } from "../data";
import { getLogger } from "@/lib/logger";

export const metadata: Metadata = {
  title: "Bands",
  description: "List of Bands",
};

export default async function BandIndexPage() {
  const logger = getLogger({});
  logger.debug("render: app/(application-layout)/bands/(index)/page.tsx");

  const bands = await getBands();

  return (
    <>
      <div className="flex items-center mb-6">
        <h1 className="text-2xl">Bands</h1>
        <div className="ml-auto">
          <Link
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            href="/bands/new"
          >
            New Band
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
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Albums
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
                  {bands.map((band: BandWithCount) => (
                    <Row key={band.id} band={band} />
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

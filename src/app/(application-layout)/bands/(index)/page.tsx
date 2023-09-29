import { Row } from "./Row";

type Band = {
  id: number;
  name: string;
};

export default function Page() {
  console.log(
    "   render: Bands: app/(application-layout)/bands/(index)/page.tsx"
  );

  const bands: Band[] = [
    { id: 1, name: "The Beatles" },
    { id: 2, name: "The Rolling Stones" },
    { id: 3, name: "The Who" },
    { id: 4, name: "The Kinks" },
    { id: 5, name: "Metallica" },
    { id: 6, name: "The Clash" },
    { id: 7, name: "Black Sabbath" },
    { id: 8, name: "The Cure" },
    { id: 9, name: "The Smiths" },
    { id: 10, name: "The Pixies" },
    { id: 11, name: "The Ramones" },
    { id: 12, name: "Black Flag" },
  ];

  return (
    <>
      <h1 className="mb-6 text-2xl">Bands</h1>

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
                  {bands.map((band) => (
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

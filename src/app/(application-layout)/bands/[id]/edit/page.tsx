import { prisma } from "@/prisma";
import Form from "../../components/Form";
import { updateBand } from "../../server-actions";

type Props = {
  params: {
    id: string;
  };
};

export default async function EditBand({ params: { id } }: Props) {
  console.log(
    `  render: EditBand: app/(application-layout)/bands/[id]/edit/page.tsx, ${id}`
  );

  const band = await prisma.band.findUnique({
    where: { id },
  });

  // throw 404 if band not found

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Edit Band</h1>
      <Form action={updateBand} band={band!} />
    </div>
  );
}

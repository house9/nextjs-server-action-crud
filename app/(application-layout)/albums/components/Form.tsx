"use client";

// @ts-ignore
import { experimental_useFormState as useFormState } from "react-dom";
import { createAlbum, updateAlbum } from "../server-actions";
import SubmitButton from "@/components/SubmitButton";
import Link from "@/components/Link";
import { Album, Band } from "@prisma/client";
import { TextInput } from "@/components/TextInput";
import FieldError from "@/components/FieldError";

type Props = {
  action: typeof createAlbum | typeof updateAlbum;
  bandId?: string;
  bands?: Band[];
  album?: Album & { band: Band };
};

export default function Form({ action, bandId, bands, album }: Props) {
  console.log(
    "  render: Form: app/(application-layout)/albums/components/Form.tsx"
  );

  const [state, formAction] = useFormState(action, {});

  return (
    <form action={formAction}>
      {!album && (
        <div className="mb-2">
          <label
            htmlFor="bandId"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Band
          </label>
          <select
            name="bandId"
            id="bandId"
            className="py-3 px-4 block w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            defaultValue={bandId}
          >
            <option value="">Select a band</option>
            {(bands || []).map((band) => (
              <option key={band.id} value={band.id}>
                {band.name}
              </option>
            ))}
          </select>
          <FieldError field="bandId" payload={state} />
        </div>
      )}

      {album && (
        <div className="mb-2">
          <label
            htmlFor="bandId"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Band
          </label>
          <p className="py-3 px-4 block w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            {album.band.name}
          </p>
          <input type="hidden" name="bandId" value={album.bandId} />
        </div>
      )}
      <TextInput
        formState={state}
        inputLabel="Name"
        inputName="name"
        inputPlaceholder="Album name"
        inputValue={album?.name}
      />

      <div className="mt-6">
        {album && <input type="hidden" name="id" value={album.id} />}

        <SubmitButton name={album ? "Save Changes" : "Create Album"} />

        <Link className="ml-2 text-blue-500" href="/albums">
          Cancel, go back
        </Link>
      </div>
    </form>
  );
}

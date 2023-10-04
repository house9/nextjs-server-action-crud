"use client";

// @ts-ignore
import { experimental_useFormState as useFormState } from "react-dom";
import { createBand, updateBand } from "../server-actions";
import FieldError from "./FieldError";
import SubmitButton from "@/components/SubmitButton";
import Link from "next/link";
import { Band } from "@prisma/client";

type Props = {
  action: typeof createBand | typeof updateBand;
  band?: Band;
};

export default function Form({ action, band }: Props) {
  console.log(
    "  render: Form: app/(application-layout)/bands/components/Form.tsx"
  );

  const [state, formAction] = useFormState(action, {});

  return (
    <form action={formAction}>
      <label
        htmlFor="name"
        className="block text-sm font-medium mb-2 dark:text-white"
      >
        Name:
      </label>
      <input
        type="text"
        name="name"
        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
        placeholder="Band name"
        defaultValue={band?.name}
      />
      <FieldError field="name" payload={state} />
      <SubmitButton name={band ? "Save Changes" : "Create Band"} />
      <Link className="ml-2 text-blue-500" href="/bands">
        Cancel, go back
      </Link>
      {band && <input type="hidden" name="id" value={band.id} />}
    </form>
  );
}

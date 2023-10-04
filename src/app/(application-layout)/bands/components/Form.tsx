"use client";

// @ts-ignore
import { experimental_useFormState as useFormState } from "react-dom";
import { createBand } from "../server-actions";
import FieldError from "./FieldError";
import SubmitButton from "@/components/SubmitButton";

export default function Form() {
  console.log(
    "  render: Form: app/(application-layout)/bands/components/Form.tsx"
  );

  const [state, formAction] = useFormState(createBand, {});

  return (
    <form action={formAction}>
      <label
        htmlFor="name"
        className="block text-sm font-medium mb-2 dark:text-white"
      >
        Name
      </label>
      <input
        type="text"
        name="name"
        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
        placeholder="Band name"
      />
      <FieldError field="name" payload={state} />
      <SubmitButton name="Create Band" />
    </form>
  );
}

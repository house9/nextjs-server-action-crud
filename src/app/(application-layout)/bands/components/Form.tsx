"use client";

// @ts-ignore
import { experimental_useFormState as useFormState } from "react-dom";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { createBand } from "../server-actions";
import FieldError from "./FieldError";

export default function Form() {
  console.log(
    "  render: Form: app/(application-layout)/bands/components/Form.tsx"
  );

  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(createBand, {});

  return (
    <form action={formAction}>
      <input type="text" name="name" placeholder="Band name" />
      <FieldError field="name" payload={state} />
      <button type="submit" aria-disabled={pending}>
        {pending ? "Please Wait..." : "Create"}
      </button>
    </form>
  );
}

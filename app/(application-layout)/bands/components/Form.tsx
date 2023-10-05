"use client";

// @ts-ignore
import { experimental_useFormState as useFormState } from "react-dom";
import { createBand, updateBand } from "../server-actions";
import SubmitButton from "@/components/SubmitButton";
import Link from "@/components/Link";
import { Band } from "@prisma/client";
import { TextInput } from "@/components/TextInput";

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
      <TextInput
        formState={state}
        inputLabel="Name"
        inputName="name"
        inputPlaceholder="Band name"
        inputValue={band?.name}
      />

      <div className="mt-6">
        {band && <input type="hidden" name="id" value={band.id} />}

        <SubmitButton name={band ? "Save Changes" : "Create Band"} />

        <Link className="ml-2 text-blue-500" href="/bands">
          Cancel, go back
        </Link>
      </div>
    </form>
  );
}

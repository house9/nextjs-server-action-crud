"use client";

import { VariantProps, cva } from "class-variance-authority";
import { useFormStatus } from "react-dom";

const variants = cva(
  "py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800",
  {
    variants: {
      kind: {
        default: "bg-gray-800 text-white hover:bg-gray-900", // TODO: figure out all hover/etc...
        disabled: "bg-slate-300 text-gray hover:bg-green-600",
        success: "bg-green-500 text-white hover:bg-green-600",
        error: "bg-red-500 text-white hover:bg-green-600",
      },
    },
    defaultVariants: {
      kind: "default",
    },
  }
);

type VarientType = VariantProps<typeof variants>;

interface Props extends VarientType {
  name: string;
  displayMessage?: boolean;
}

const Loading = () => (
  <div
    className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
    role="status"
    aria-label="loading"
  >
    <span className="sr-only">Loading...</span>
  </div>
);

export default function SubmitButton({
  name,
  kind,
  displayMessage = true,
}: Props) {
  const { pending } = useFormStatus();
  const variant = pending ? "disabled" : kind;
  const pendingMessage = displayMessage ? "Please Wait..." : "...";

  return (
    <button
      className={variants({ kind: variant })}
      type="submit"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? pendingMessage : name}
      {pending && <Loading />}
    </button>
  );
}

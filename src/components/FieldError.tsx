type Props = {
  field: string;
  payload: any; // TODO: define this type (ZodError?)
};

export default function FieldError({ field, payload }: Props) {
  if (!payload.errors) return null;

  const errors = payload.errors.fieldErrors[field];
  if (!errors || errors.length === 0) return null;

  return <div className="text-red-500">{errors.join(" ")}</div>;
}

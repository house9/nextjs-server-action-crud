"use client";

import { createBand } from "../server-actions";

export default function Form() {
  console.log(
    "  render: Form: app/(application-layout)/bands/components/Form.tsx"
  );

  return (
    <form action={createBand}>
      <input type="text" name="name" placeholder="Band name" />
      <button type="submit">Create</button>
    </form>
  );
}

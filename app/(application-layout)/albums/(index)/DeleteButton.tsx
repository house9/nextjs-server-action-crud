"use client";

import { Album } from "@prisma/client";
import { deleteAlbum } from "../server-actions";
import { onSubmitConfirm } from "@/lib/form";
import SubmitButton from "@/components/SubmitButton";

type Props = {
  album: Album;
};

export const DeleteButton = ({ album }: Props) => {
  const message = `Are you sure you want to delete the album: ${album.name}?`;

  return (
    <form
      action={deleteAlbum}
      onSubmit={onSubmitConfirm({ message })}
      className="inline-block"
    >
      <input type="hidden" name="id" value={album.id} />
      <SubmitButton name="Delete" kind="error" displayMessage={false} />
    </form>
  );
};

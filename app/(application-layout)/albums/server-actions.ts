"use server";

import type { Prisma } from "@prisma/client";
import z, { string } from "zod";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { safeParse } from "@/lib/params";
import { getLogger } from "@/lib/logger";

const createSchema = z.object({
  name: z
    .string({ required_error: "`name` param is missing" })
    .nonempty({ message: "Name is required" }),
  bandId: string({ required_error: "`bandId` param is missing" }).nonempty({
    message: "Band is required",
  }),
});

const updateSchema = createSchema.extend({
  id: z.string({ required_error: "`id` param is missing" }),
});

export async function createAlbum(_prevState: any, params: FormData) {
  const logger = getLogger({});
  const { success, error, data } = safeParse(createSchema, params);

  if (!success) {
    return {
      success: false,
      errors: error,
      data: null,
    };
  }

  const input = data as Prisma.AlbumCreateInput;
  const album = await prisma.album.create({ data: input });
  logger.debug(`createAlbum: ${album.id}`);

  revalidatePath("/albums");
  redirect("/albums");
}

export async function updateAlbum(_prevState: any, params: FormData) {
  const logger = getLogger({});
  const { success, error, data } = safeParse(updateSchema, params);

  if (!success) {
    return {
      success: false,
      errors: error,
      data: null,
    };
  }

  const input = data as Prisma.AlbumCreateInput;
  const album = await prisma.album.update({
    where: { id: input.id },
    data: input,
  });
  logger.debug(`updateAlbum: ${album.id}`);

  revalidatePath("/albums");
  redirect("/albums");
}

export async function deleteAlbum(params: FormData) {
  const logger = getLogger({});
  const albumId = params.get("id") as string;
  logger.debug(`deleteAlbum: ${albumId}`);

  await prisma.album.delete({ where: { id: albumId } });

  revalidatePath("/albums");
  redirect("/albums");
}

"use server";

import type { Prisma } from "@prisma/client";
import z from "zod";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { safeParse } from "@/lib/params";
import { getLogger } from "@/lib/logger";

const createSchema = z.object({
  name: z
    .string({ required_error: "`name` param is missing" })
    .nonempty({ message: "Name is required" }),
});

const updateSchema = createSchema.extend({
  id: z.string({ required_error: "`id` param is missing" }),
});

export async function createBand(_prevState: any, params: FormData) {
  const logger = getLogger({});
  const { success, error, data } = safeParse(createSchema, params);

  if (!success) {
    return {
      success: false,
      errors: error,
      data: null,
    };
  }

  const input = data as Prisma.BandCreateInput;
  const band = await prisma.band.create({ data: input });
  logger.debug(`createBand: ${band.id}`);

  revalidatePath("/bands");
  redirect("/bands");
}

export async function updateBand(_prevState: any, params: FormData) {
  const logger = getLogger({});
  const { success, error, data } = safeParse(updateSchema, params);

  if (!success) {
    return {
      success: false,
      errors: error,
      data: null,
    };
  }

  const input = data as Prisma.BandCreateInput;
  const band = await prisma.band.update({
    where: { id: input.id },
    data: input,
  });
  logger.debug(`updateBand: ${band.id}`);

  revalidatePath("/bands");
  redirect("/bands");
}

export async function deleteBand(params: FormData) {
  const logger = getLogger({});
  const bandId = params.get("id") as string;
  logger.debug(`deleteBand: ${bandId}`);

  await prisma.band.delete({ where: { id: bandId } });

  revalidatePath("/bands");
  redirect("/bands");
}

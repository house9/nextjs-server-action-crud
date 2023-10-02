"use server";

import type { Prisma } from "@prisma/client";
import z from "zod";
import { prisma } from "@/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { safeParse } from "@/lib/params";

const createSchema = z.object({
  name: z
    .string({ required_error: "`name` param is missing" })
    .nonempty({ message: "Name is required" }),
});

export async function createBand(_prevState: any, params: FormData) {
  const { success, error, data } = safeParse(createSchema, params);
  console.log("  createBand", { success, error, data });

  if (!success) {
    return {
      success: false,
      errors: error,
      data: null,
    };
  }

  const input = data as Prisma.BandCreateInput;
  const band = await prisma.band.create({ data: input });
  console.log("  createBand", band.id);

  revalidatePath("/bands");
  redirect("/bands");
}

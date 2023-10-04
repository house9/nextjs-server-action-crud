import { prisma } from "@/prisma";
import { notFound } from "next/navigation";
import { cache } from "react";

export const revalidate = 3600; // 1 hour

export const getBand = cache(async (id: string) => {
  const band = await prisma.band.findUnique({
    where: { id },
  });

  if (!band) return notFound();

  return band;
});

export const getBands = cache(async () => {
  const bands = await prisma.band.findMany({
    include: { _count: { select: { albums: true } } },
    orderBy: { name: "asc" },
  });

  return bands;
});

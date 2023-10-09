import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { cache } from "react";

export const revalidate = 3600; // 1 hour

export const getAlbum = cache(async (id: string) => {
  const album = await prisma.album.findUnique({
    where: { id },
    include: { band: true, songs: true },
  });

  if (!album) return notFound();

  return album;
});

export const getAlbums = cache(async () => {
  const albums = await prisma.album.findMany({
    include: {
      _count: { select: { songs: true } },
      band: true,
    },
    orderBy: [{ band: { name: "asc" } }, { name: "asc" }],
  });

  return albums;
});

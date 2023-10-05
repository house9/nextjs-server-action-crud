import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  console.log("BEGIN: Seeding...");

  await seedMetallica();
  await seedACDC();
  await seedIronMaiden();
  await seedGojira();

  console.log("END: Seeding...");
}

async function seedMetallica() {
  await prisma.band.upsert({
    where: { name: "Metallica" },
    create: {
      name: "Metallica",
    },
    update: { name: "Metallica" },
  });
}

async function seedACDC() {
  await prisma.band.upsert({
    where: { name: "AC/DC" },
    create: {
      name: "AC/DC",
    },
    update: { name: "AC/DC" },
  });
}

async function seedIronMaiden() {
  await prisma.band.upsert({
    where: { name: "Iron Maiden" },
    create: {
      name: "Iron Maiden",
    },
    update: { name: "Iron Maiden" },
  });
}

async function seedGojira() {
  const gojira = await prisma.band.upsert({
    where: { name: "Gojira" },
    create: {
      name: "Gojira",
    },
    update: { name: "Gojira" },
  });

  const magma = await prisma.album.upsert({
    where: { uniqueAlbumNamePerBand: { name: "Magma", bandId: gojira.id } },
    create: {
      name: "Magma",
      bandId: gojira.id,
      songs: {
        create: [
          { name: "The Shooting Star" },
          { name: "Silvera" },
          { name: "The Cell" },
          { name: "Stranded" },
          { name: "Yellow Stone" },
          { name: "Magma" },
          { name: "Pray" },
          { name: "Only Pain" },
          { name: "Low Lands" },
          { name: "Liberation" },
        ],
      },
    },
    update: {},
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

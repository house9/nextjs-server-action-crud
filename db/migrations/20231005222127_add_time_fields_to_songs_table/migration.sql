-- AlterTable
ALTER TABLE "albums" ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();

-- AlterTable
ALTER TABLE "band_members" ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();

-- AlterTable
ALTER TABLE "bands" ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();

-- AlterTable
ALTER TABLE "musicians" ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();

-- AlterTable
ALTER TABLE "songs" ADD COLUMN     "minutes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "seconds" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();

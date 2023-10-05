-- AlterTable
ALTER TABLE "albums" ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();

-- AlterTable
ALTER TABLE "band_members" ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();

-- AlterTable
ALTER TABLE "bands" ADD COLUMN     "testing_things" TEXT NOT NULL DEFAULT 'testing',
ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();

-- AlterTable
ALTER TABLE "musicians" ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();

-- AlterTable
ALTER TABLE "songs" ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();
